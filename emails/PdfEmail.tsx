import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
  Hr,
  Preview,
  Img,
  Tailwind,
} from "@react-email/components";

type DonationReceiptEmailProps = {
  amount: string;
  donationDate: string;
  receiptUrl: string;
};

export default function DonationReceiptEmail({
  amount,
  donationDate,
  receiptUrl,
}: DonationReceiptEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for your generous donation to Street Gospel Mission Church!
      </Preview>

      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Tailwind>
              <Img
                alt="street gospel mission church logo"
                className="rounded-[12px] my-0 mx-auto"
                width={250}
                height={250}
                src="/images/compressed/icontwo-compressed.webp"
              />
            </Tailwind>
            <Heading style={headerTitle}>Street Gospel Mission Church</Heading>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Text style={successBadge}>DONATION CONFIRMED</Text>

            <Heading style={title}>Thank You for Your Generosity!</Heading>

            <Text style={paragraph}>Dear Mr/Ms. ,</Text>

            <Text style={paragraph}>
              Thank you for your generous donation to Street Gospel Mission
              Church. Your support helps us continue our ministry, serve our
              community, and share God's love.
            </Text>

            {/* Donation Details */}
            <Section style={details}>
              <Text style={label}>DONATION AMOUNT</Text>

              <Heading style={amountStyle}>{amount}</Heading>

              <Hr style={divider} />

              <Text style={detailText}>
                <strong>Date:</strong> {donationDate}
              </Text>

              {/* <Text style={detailText}>
                <strong>Transaction ID:</strong> {transactionId}
              </Text> */}
            </Section>

            {/* PDF Download */}
            <Section style={receiptSection}>
              <Text style={pdfIcon}>📄</Text>

              <Heading style={receiptTitle}>
                Your Donation Receipt is Ready
              </Heading>

              <Text style={receiptDescription}>
                Your donation receipt is available to download below. A PDF copy
                is also attached to this email.
              </Text>

              <Button href={receiptUrl} style={button}>
                Download Donation Receipt (PDF)
              </Button>
            </Section>

            <Text style={paragraph}>
              We are grateful for your generosity and partnership in our
              mission. May God bless you!
            </Text>

            <Text style={signature}>Street Gospel Mission Church</Text>
          </Section>

          {/* Footer */}
          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerText}>
              Thank you for supporting our ministry.
            </Text>

            <Text style={footerText}>
              <a href="https://sgmchurch.com" style={footerLink}>
                sgmchurch.com
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f4f6fa",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "30px 10px",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  margin: "0 auto",
  maxWidth: "560px",
  overflow: "hidden" as const,
};

const header = {
  backgroundColor: "#172554",
  padding: "32px 20px",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "bold",
  margin: "0",
};

const headerSubtitle = {
  color: "#bfdbfe",
  fontSize: "11px",
  letterSpacing: "2px",
  marginTop: "12px",
};

const content = {
  padding: "32px 28px",
};

const successBadge = {
  backgroundColor: "#dcfce7",
  borderRadius: "20px",
  color: "#166534",
  display: "inline-block",
  fontSize: "11px",
  fontWeight: "bold",
  padding: "7px 12px",
};

const title = {
  color: "#172554",
  fontSize: "27px",
  lineHeight: "1.3",
  margin: "20px 0",
};

const paragraph = {
  color: "#475569",
  fontSize: "14px",
  lineHeight: "1.8",
};

const details = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "20px",
  margin: "25px 0",
};

const label = {
  color: "#64748b",
  fontSize: "11px",
  fontWeight: "bold",
  letterSpacing: "1px",
};

const amountStyle = {
  color: "#172554",
  fontSize: "32px",
  margin: "8px 0 18px",
};

const divider = {
  borderColor: "#e2e8f0",
  margin: "18px 0",
};

const detailText = {
  color: "#475569",
  fontSize: "13px",
  lineHeight: "1.8",
};

const receiptSection = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "24px 16px",
  textAlign: "center" as const,
  margin: "25px 0",
};

const pdfIcon = {
  fontSize: "30px",
  margin: "0",
};

const receiptTitle = {
  color: "#172554",
  fontSize: "18px",
};

const receiptDescription = {
  color: "#64748b",
  fontSize: "13px",
  lineHeight: "1.7",
};

const button = {
  backgroundColor: "#1d4ed8",
  borderRadius: "6px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "14px 22px",
  textDecoration: "none",
};

const signature = {
  color: "#172554",
  fontSize: "15px",
  fontWeight: "bold",
  marginTop: "25px",
};

const footer = {
  padding: "5px 20px 25px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#94a3b8",
  fontSize: "12px",
};

const footerLink = {
  color: "#1d4ed8",
  textDecoration: "none",
};
