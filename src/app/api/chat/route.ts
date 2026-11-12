import {
  streamText,
  type UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from "ai";

import { google } from "@ai-sdk/google";

import {
  siteKnowledge,
  type SiteLocale,
} from "@/components/ai-chat/site-knowledge";

export async function POST(req: Request) {
  const {
    messages,
    locale,
  }: {
    messages: UIMessage[];
    locale?: SiteLocale;
  } = await req.json();

  // Select the correct language's website content.
  const selectedLocale: SiteLocale = locale === "ko" ? "ko" : "en";
  const languageInstruction =
    selectedLocale === "ko"
      ? "Always respond in natural, fluent Korean."
      : "Always respond in natural, fluent English.";
  // Convert the page objects into actual readable text.
  const websiteContext = siteKnowledge[selectedLocale]

    .map((page) => {
      return `
        PAGE TITLE: ${page.title}
        PAGE ROUTE: ${page.route}

        PAGE CONTENT:
        ${page.content}
      `;
    })
    .join("\n\n--------------------\n\n");

  const result = streamText({
    model: google("gemini-3.1-flash-lite-preview"),

    temperature: 0,

    system: `
      You are the official AI assistant for
      Street Gospel Mission Church.

        ${languageInstruction}

      Your job is to answer visitor questions
      using ONLY the website information provided below.

      STRICT RULES:

      1. Use only the information in the WEBSITE KNOWLEDGE BASE.
      2. Do not use your general knowledge to answer questions.
      3. Do not invent, assume, or guess information.
      4. Do not create information that is not explicitly
         present in the website content.
      5. If the answer cannot be found in the knowledge base,
         say that you do not have that information and
         recommend contacting the church.
      6. Answer in the same language as the visitor's question.
      7. You may summarize or rephrase the website content,
         but do not change its meaning.

      WEBSITE KNOWLEDGE BASE:

      ${websiteContext}
    `,

    messages: await convertToModelMessages(messages),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({
      stream: result.stream,
    }),
  });
}
