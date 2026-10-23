import {
  PdfcnThemeProvider,
  usePdfcnTheme,
} from "@/components/pdf/theme-provider";
import { Text } from "@/components/pdf/text/text";
import { View, StyleSheet, Document, Page } from "@/lib/pdf-primitives";
import type { PdfcnTheme } from "@/types/pdf-themes";

export type DonationReceiptData = {
  receiptNumber: string;
  receiptDate: string;
  donorName: string;
  amount: number;
  currency: string;
  donationDate: string;
};

const church = {
  name: "Street Gospel Mission Church",
  address: "950 Main Street #229, Redwood City, CA 94063",
  mailingAddress: "P.O. Box 3573, Redwood City, CA 94064",
  phone: "650-995-3336 · 650-474-1637",
  email: "welcomecross@gmail.com",
  ein: "46-0692793",
};

const DonationReceiptContent = ({ data }: { data: DonationReceiptData }) => {
  const theme = usePdfcnTheme();

  const styles = StyleSheet.create({
    page: {
      backgroundColor: theme.colors.background,
      padding: 42,
      paddingBottom: 48,
      position: "relative",
    },
    topAccent: {
      height: 5,
      backgroundColor: theme.colors.primary,
      marginBottom: 30,
    },
    churchName: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.foreground,
      marginBottom: 8,
    },
    muted: {
      fontSize: 9,
      color: theme.colors.mutedForeground,
      marginBottom: 4,
    },
    receiptTitle: {
      fontSize: 26,
      fontWeight: "bold",
      color: theme.colors.foreground,
      marginBottom: 8,
    },
    intro: {
      fontSize: 10,
      color: theme.colors.mutedForeground,
      lineHeight: 1.6,
      marginBottom: 22,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.border,
      marginTop: 18,
      marginBottom: 18,
    },
    label: {
      fontSize: 8,
      fontWeight: "bold",
      color: theme.colors.mutedForeground,
      marginBottom: 6,
    },
    value: {
      fontSize: 13,
      color: theme.colors.foreground,
      marginBottom: 5,
    },
    amountBox: {
      backgroundColor: theme.colors.muted,
      padding: 18,
      marginTop: 24,
      marginBottom: 24,
    },
    amountLabel: {
      fontSize: 9,
      color: theme.colors.mutedForeground,
      marginBottom: 8,
    },
    amount: {
      fontSize: 27,
      fontWeight: "bold",
      color: theme.colors.foreground,
    },
    body: {
      fontSize: 10,
      color: theme.colors.foreground,
      lineHeight: 1.7,
      marginBottom: 12,
    },
    footer: {
      marginTop: 28,
      paddingTop: 14,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
  });

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: data.currency.toUpperCase(),
  }).format(data.amount);

  console.log(formattedAmount);

  return (
    <Document title={`Donation Receipt ${data.receiptNumber}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.topAccent} />

        <View style={{ marginBottom: 30 }}>
          <Text style={styles.churchName}>{church.name}</Text>
          <Text style={styles.muted}>{church.address}</Text>
          <Text style={styles.muted}>{church.mailingAddress}</Text>
          <Text style={styles.muted}>Tel: {church.phone}</Text>
          <Text style={styles.muted}>E-mail: {church.email}</Text>
        </View>

        <Text style={styles.receiptTitle}>Donation Receipt</Text>
        <Text style={styles.intro}>
          Official acknowledgment of your charitable contribution. Thank you for
          supporting our ministry and serving our community.
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>RECEIPT NUMBER</Text>
            <Text style={styles.value}>{data.receiptNumber}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>RECEIPT DATE</Text>
            <Text style={styles.value}>{data.receiptDate}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.label}>DONATION RECEIVED FROM</Text>
        <Text style={{ ...styles.value, fontSize: 13, fontWeight: "bold" }}>
          {data.donorName || "Donor"}
        </Text>

        <Text style={{ ...styles.label, marginTop: 16 }}>
          DATE OF CONTRIBUTION
        </Text>
        <Text style={styles.value}>{data.donationDate}</Text>

        {formattedAmount !== "$0.00" && (
          <View style={styles.amountBox}>
            <Text style={styles.amountLabel}>TOTAL CONTRIBUTION</Text>
            <Text style={styles.amount}>{formattedAmount}</Text>
          </View>
        )}

        <Text style={styles.body}>
          Street Gospel Mission Church gratefully acknowledges receipt of the
          charitable contribution listed above. Your generosity helps support
          our ministry serving neighbors experiencing hardship in San Francisco,
          the Silicon Valley and San Jose, Oakland, Berkeley, and surrounding
          Bay Area communities.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>TAX ACKNOWLEDGMENT</Text>
        <Text style={styles.body}>
          No goods or services were provided in exchange for this contribution.
        </Text>

        <Text style={styles.body}>
          Street Gospel Mission Church is a tax-exempt organization. EIN:{" "}
          {church.ein}.
        </Text>

        <Text style={styles.body}>
          Please retain this receipt for your records. The deductibility of your
          contribution depends on your individual tax circumstances and
          applicable tax law.
        </Text>

        <View style={styles.footer}>
          <Text style={{ ...styles.value, fontWeight: "bold" }}>
            Thank you for your generosity.
          </Text>
          <Text style={{ ...styles.value, fontWeight: "bold", fontSize: 18 }}>
            Rev Pastor: Steven G. Lee
          </Text>
          <Text style={styles.muted}>Street Gospel Mission Church</Text>
          <Text style={styles.muted}>{church.address}</Text>
          <Text style={styles.muted}>
            (PO BOX 3573, Redwood City, CA, 94063)
          </Text>
          <Text style={styles.muted}>EIN: {church.ein}</Text>
          <Text style={styles.muted}>Contribution Deductibility: Yes</Text>
          <Text style={styles.muted}>
            Public Charity Status: 170(B)(1)(A)(I)
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export const InvoiceModernDocument = ({
  theme,
  data,
}: {
  theme?: PdfcnTheme;
  data: DonationReceiptData;
}) => (
  <PdfcnThemeProvider theme={theme}>
    <DonationReceiptContent data={data} />
  </PdfcnThemeProvider>
);
