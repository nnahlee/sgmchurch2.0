import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Section,
  Button,
  Img,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  phone,
  message,
}: ContactEmailProps) {
  const primaryBlue = "#2563EB"; // Modern blue for headings and button

  return (
    <Html lang="en">
      <Head />
      <Preview>Thank you for contacting Street Gospel Mission Church!</Preview>
      <Body
        style={{
          backgroundColor: "#f9fafb",
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "8px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {/* Welcome Section */}
          <Section>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "16px",
                textAlign: "center",
                color: primaryBlue,
              }}
            >
              Welcome to Street Gospel Mission Church!
            </Text>
            <Text
              style={{ fontSize: "16px", lineHeight: "24px", color: "#333333" }}
            >
              Hi {name},
            </Text>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#333333",
                marginBottom: "24px",
              }}
            >
              Thank you for reaching out to us. We have received your message
              and someone from our team will get back to you shortly.
            </Text>
          </Section>

          {/* User Message Details */}
          <Section>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "8px",
                color: primaryBlue,
              }}
            >
              Your Submitted Information
            </Text>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text
              style={{
                whiteSpace: "pre-wrap",
                padding: "24px",
                backgroundColor: "#f3f4f6",
                borderRadius: "4px",
              }}
            >
              {message}
            </Text>
          </Section>

          {/* Thank You Footer with Cross Image */}
          <Section style={{ marginTop: "32px", textAlign: "center" }}>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#333333",
                marginBottom: "16px",
              }}
            >
              Thank you for contacting Street Gospel Mission Church. We
              appreciate your interest and support!
            </Text>

            <Img
              src="https://icons.iconarchive.com/icons/designbolts/religious-symbol/256/Christian-cross-icon.png"
              alt="Cross"
              width={120}
              height={120}
              className="object-cover"
              style={{ display: "block", margin: "0 auto 16px auto" }}
            />

            <Button
              href="https://www.sgmchurch.com"
              style={{
                backgroundColor: "#14B8A6",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: "bold",
              }}
            >
              Visit Our Website
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
