// email to self user data from contact form

// email to user confirmation from contact form
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
      <Preview>User Contact Information</Preview>
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
              Contact Details from name - {name}
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#333333",
                marginBottom: "24px",
              }}
            >
              email - {email} <br />
              phone - {phone} <br />
              message - {message}
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
