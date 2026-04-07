import React from "react";
import { renderToFile, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import path from "path";

// Brand colors
const BLUE = "#0A3D91";
const GOLD = "#C9A86A";
const GRAY = "#F4F4F4";
const TEXT = "#1a1a2e";
const TEXT_LIGHT = "#4a4a6a";

const s = StyleSheet.create({
  page: { padding: 50, fontFamily: "Helvetica", fontSize: 11, color: TEXT },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: GOLD,
  },
  logo: { fontSize: 18, fontFamily: "Helvetica-Bold", color: BLUE },
  tagline: { fontSize: 9, color: TEXT_LIGHT },
  title: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: GOLD,
    marginBottom: 25,
    fontFamily: "Helvetica-Bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    marginTop: 20,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
  },
  paragraph: { fontSize: 11, lineHeight: 1.6, color: TEXT_LIGHT, marginBottom: 8 },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 5,
    paddingLeft: 10,
  },
  bullet: { width: 15, fontSize: 11, color: GOLD },
  bulletText: { flex: 1, fontSize: 11, lineHeight: 1.5, color: TEXT_LIGHT },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
  },
  dataRowAlt: { backgroundColor: GRAY },
  dataLabel: { fontSize: 11, color: TEXT },
  dataValue: { fontSize: 11, fontFamily: "Helvetica-Bold", color: BLUE },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: GRAY,
    paddingTop: 10,
  },
  footerText: { fontSize: 8, color: TEXT_LIGHT },
  callout: {
    backgroundColor: GRAY,
    padding: 15,
    borderRadius: 4,
    marginVertical: 10,
    borderLeftWidth: 3,
    borderLeftColor: GOLD,
  },
  calloutText: { fontSize: 11, color: TEXT, fontFamily: "Helvetica-Bold" },
});

function Header() {
  return (
    <View style={s.header}>
      <View>
        <Text style={s.logo}>ReloKey Cyprus</Text>
        <Text style={s.tagline}>Your Key to Cyprus Living</Text>
      </View>
      <Text style={s.tagline}>info@relokeycyprus.com | +357 99 123 456</Text>
    </View>
  );
}

function Footer({ page }: { page: string }) {
  return (
    <View style={s.footer}>
      <Text style={s.footerText}>ReloKey Cyprus — {page}</Text>
      <Text style={s.footerText}>www.relokeycyprus.com</Text>
    </View>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item, i) => (
        <View key={i} style={s.bulletItem}>
          <Text style={s.bullet}>&#8226;</Text>
          <Text style={s.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

// ── PDF 1: Living in Limassol 2025 ──

function LivingInLimassolPDF() {
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Header />
        <Text style={s.title}>Living in Limassol</Text>
        <Text style={s.subtitle}>Your Complete 2025 Guide</Text>

        <Text style={s.paragraph}>
          Limassol is Cyprus&apos;s business and lifestyle capital — a vibrant Mediterranean city
          that combines modern infrastructure with coastal charm. This guide covers everything
          you need to know about living in Limassol as an expat, family, or professional.
        </Text>

        <Text style={s.sectionTitle}>Why Limassol?</Text>
        <Bullets
          items={[
            "Cyprus's largest business hub — home to international companies, tech firms, and financial services",
            "Mediterranean climate with 340+ days of sunshine per year",
            "International schools, modern hospitals, and excellent infrastructure",
            "Vibrant expat community with 100+ nationalities",
            "Safe, walkable neighborhoods with beach access",
            "EU member state with English widely spoken",
          ]}
        />

        <Text style={s.sectionTitle}>Best Neighborhoods</Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT }}>
          Germasogeia — The Expat Hub
        </Text>
        <Text style={s.paragraph}>
          Close to beaches, restaurants, and tourist strip. Popular with expats and short-term
          renters. Average rent: EUR 800-1,400 for a 2-bed apartment.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT }}>
          Agios Tychonas — Elevated Living
        </Text>
        <Text style={s.paragraph}>
          Hillside with panoramic sea views. Luxury developments, international schools nearby.
          Average price: EUR 3,000-5,000 per sqm.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT }}>
          Mouttagiaka — Quiet Coastal
        </Text>
        <Text style={s.paragraph}>
          Peaceful village between Limassol and Amathus. Family-friendly with newer developments.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT }}>
          Mesa Geitonia — Central &amp; Practical
        </Text>
        <Text style={s.paragraph}>
          Affordable central area with excellent schools and amenities. Strong local community.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT }}>
          City Center &amp; Marina — Urban Energy
        </Text>
        <Text style={s.paragraph}>
          Historic old town meets modern marina district. Business hub, nightlife, premium properties.
        </Text>
        <Footer page="Living in Limassol 2025" />
      </Page>

      <Page size="A4" style={s.page}>
        <Header />
        <Text style={s.sectionTitle}>Cost of Living</Text>
        <Text style={s.paragraph}>
          Limassol offers a high quality of life at a fraction of Western European prices.
        </Text>

        {[
          ["1-Bed Apartment (City Center)", "EUR 700 - 1,200/month"],
          ["3-Bed Apartment (City Center)", "EUR 1,200 - 2,500/month"],
          ["Groceries (Monthly, couple)", "EUR 400 - 600"],
          ["Utilities (Electricity, Water, Internet)", "EUR 120 - 200/month"],
          ["Dining Out (Mid-range, 2 people)", "EUR 40 - 70"],
          ["International School (Annual)", "EUR 5,000 - 12,000"],
          ["Private Health Insurance (Annual)", "EUR 500 - 1,500"],
          ["Public Transport (Monthly)", "EUR 40 - 60"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}

        <Text style={s.sectionTitle}>Schools</Text>
        <Text style={s.paragraph}>Limassol has excellent international schools:</Text>
        <Bullets
          items={[
            "Heritage Private School",
            "Foley's Grammar School",
            "The Grammar School Limassol",
            "Silverline Private School",
            "Pascal English School",
          ]}
        />
        <Text style={s.paragraph}>
          Annual fees range from EUR 5,000 to EUR 12,000. Public schools are free for residents.
        </Text>

        <Text style={s.sectionTitle}>Getting Started</Text>
        <Bullets
          items={[
            "Rent first, buy later — explore areas before committing",
            "Budget 1 month deposit + 1 month advance for rentals",
            "Get your Tax ID (TIN) within the first month",
            "Register for Social Insurance",
            "Open a bank account (allow 1-3 weeks for compliance)",
            "Set up utilities: EAC (electricity), local water board, Cyta/Epic (internet)",
          ]}
        />

        <View style={s.callout}>
          <Text style={s.calloutText}>
            Need help relocating? ReloKey Cyprus offers full relocation packages starting from
            EUR 350. Contact us at info@relokeycyprus.com or +357 99 123 456.
          </Text>
        </View>
        <Footer page="Living in Limassol 2025" />
      </Page>
    </Document>
  );
}

// ── PDF 2: Cyprus Investment Report 2025 ──

function InvestmentReportPDF() {
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Header />
        <Text style={s.title}>Cyprus Investment Report</Text>
        <Text style={s.subtitle}>Property Market Analysis 2025</Text>

        <Text style={s.paragraph}>
          Cyprus continues to attract property investors from across Europe, the Middle East, and
          beyond. This report provides a data-driven analysis of investment returns across the
          island's major cities.
        </Text>

        <Text style={s.sectionTitle}>Why Invest in Cyprus?</Text>
        <Bullets
          items={[
            "EU member state with strong rule of law and political stability",
            "12.5% corporate tax rate — one of the lowest in Europe",
            "60+ double tax treaties worldwide",
            "No inheritance tax",
            "Growing demand from international professionals and companies",
            "Tourism sector driving short-term rental demand",
            "Strategic location bridging Europe, Middle East, and Africa",
          ]}
        />

        <Text style={s.sectionTitle}>City-by-City Analysis</Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT, marginTop: 10 }}>
          Limassol — Stability &amp; Premium Returns
        </Text>
        {[
          ["Average Price", "EUR 3,000 - 5,500 / sqm"],
          ["Long-term Rental Yield", "4 - 5.5%"],
          ["Capital Appreciation", "5 - 8% annually"],
          ["Tenant Profile", "Corporate professionals, expats"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT, marginTop: 15 }}>
          Nicosia — Highest Rental Yields
        </Text>
        {[
          ["Average Price", "EUR 1,500 - 2,800 / sqm"],
          ["Long-term Rental Yield", "5.5 - 7%"],
          ["Capital Appreciation", "3 - 5% annually"],
          ["Tenant Profile", "Government, students, professionals"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}
        <Footer page="Cyprus Investment Report 2025" />
      </Page>

      <Page size="A4" style={s.page}>
        <Header />

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT }}>
          Paphos — Holiday Rental Market
        </Text>
        {[
          ["Average Price", "EUR 1,800 - 3,200 / sqm"],
          ["Short-term Rental Yield", "6 - 9% (seasonal)"],
          ["Capital Appreciation", "3 - 6% annually"],
          ["Tenant Profile", "Tourists, retirees, holiday buyers"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT, marginTop: 15 }}>
          Larnaca — Emerging Opportunity
        </Text>
        {[
          ["Average Price", "EUR 1,200 - 2,500 / sqm"],
          ["Long-term Rental Yield", "5 - 6.5%"],
          ["Capital Appreciation", "4 - 7% annually"],
          ["Tenant Profile", "Airport workers, growing expat community"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: TEXT, marginTop: 15 }}>
          Ayia Napa — Short-Term ROI Champion
        </Text>
        {[
          ["Average Price", "EUR 2,000 - 3,500 / sqm"],
          ["Short-term Rental Yield", "8 - 12% (peak season)"],
          ["Capital Appreciation", "4 - 6% annually"],
          ["Tenant Profile", "Tourists (April - October)"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}

        <Text style={s.sectionTitle}>Transaction Costs</Text>
        <Bullets
          items={[
            "Transfer fees: 3-8% (reduced by 50% for new properties with VAT)",
            "Stamp duty: 0.15-0.20%",
            "Legal fees: 1-2%",
            "VAT: 19% on new properties (reduced to 5% for primary residence)",
            "Total acquisition cost: typically 8-12% on top of purchase price",
          ]}
        />

        <View style={s.callout}>
          <Text style={s.calloutText}>
            Want personalized investment analysis? ReloKey Cyprus provides ROI reports, off-market
            opportunities, and full transaction management. Contact: info@relokeycyprus.com
          </Text>
        </View>
        <Footer page="Cyprus Investment Report 2025" />
      </Page>
    </Document>
  );
}

// ── PDF 3: How to Buy Property as a Foreigner ──

function HowToBuyPDF() {
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Header />
        <Text style={s.title}>How to Buy Property</Text>
        <Text style={s.subtitle}>A Foreigner&apos;s Guide to Cyprus Real Estate</Text>

        <Text style={s.paragraph}>
          Buying property in Cyprus is straightforward, but there are specific steps and legal
          requirements to follow. This guide walks you through the entire process from search
          to keys.
        </Text>

        <Text style={s.sectionTitle}>Who Can Buy?</Text>
        <Bullets
          items={[
            "EU citizens: No restrictions. Can buy any property freely.",
            "Non-EU citizens: Can buy one property (apartment or house) per person. Council of Ministers approval required (usually granted).",
            "Companies registered in Cyprus: Can buy multiple properties regardless of ownership nationality.",
          ]}
        />

        <Text style={s.sectionTitle}>Step-by-Step Process</Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: BLUE }}>
          Step 1: Define Your Requirements
        </Text>
        <Text style={s.paragraph}>
          Determine your budget, preferred location, property type, and purpose (residence, investment,
          holiday home). Consider rental yield if investing.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: BLUE }}>
          Step 2: Find a Property
        </Text>
        <Text style={s.paragraph}>
          Work with a trusted agent who knows the local market. Visit properties in person or via
          video tour. Check title deeds status and any encumbrances.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: BLUE }}>
          Step 3: Make an Offer &amp; Sign Reservation
        </Text>
        <Text style={s.paragraph}>
          Once you find a property, make an offer. A reservation deposit (EUR 2,000-10,000) secures
          the property while contracts are prepared.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: BLUE }}>
          Step 4: Hire a Lawyer
        </Text>
        <Text style={s.paragraph}>
          Essential. Your lawyer will conduct due diligence: verify title deeds, check for liens or
          mortgages, review the sales contract, and handle legal filings.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: BLUE }}>
          Step 5: Sign the Contract of Sale
        </Text>
        <Text style={s.paragraph}>
          Both parties sign. The contract is deposited at the Land Registry within 6 months for
          buyer protection. Typically 20-30% paid at signing, balance on completion.
        </Text>

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: BLUE }}>
          Step 6: Non-EU Buyers — Apply for Council of Ministers Approval
        </Text>
        <Text style={s.paragraph}>
          Your lawyer files the application. Processing time: 2-6 months. Usually approved for
          one residential property.
        </Text>
        <Footer page="How to Buy Property in Cyprus" />
      </Page>

      <Page size="A4" style={s.page}>
        <Header />

        <Text style={{ ...s.paragraph, fontFamily: "Helvetica-Bold", color: BLUE }}>
          Step 7: Transfer of Title Deeds
        </Text>
        <Text style={s.paragraph}>
          Once full payment is made, the title deed is transferred at the Land Registry.
          Transfer fees apply (see costs below).
        </Text>

        <Text style={s.sectionTitle}>Costs &amp; Fees</Text>
        {[
          ["Transfer Fees", "3-8% (50% reduction with VAT)"],
          ["Stamp Duty", "0.15% up to EUR 170,860, 0.20% above"],
          ["Legal Fees", "1-2% of property value"],
          ["VAT (new properties)", "19% standard, 5% for primary residence"],
          ["Agent Commission", "Typically paid by seller (3-5%)"],
          ["Mortgage Arrangement", "0.5-1% if applicable"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}

        <Text style={s.sectionTitle}>Timeline</Text>
        {[
          ["Property Search", "1 - 4 weeks"],
          ["Offer & Reservation", "1 - 2 days"],
          ["Legal Due Diligence", "2 - 4 weeks"],
          ["Contract Signing", "1 day"],
          ["Council Approval (non-EU)", "2 - 6 months"],
          ["Completion & Transfer", "1 - 3 months after signing"],
        ].map(([label, value], i) => (
          <View key={i} style={[s.dataRow, i % 2 === 0 ? s.dataRowAlt : {}]}>
            <Text style={s.dataLabel}>{label}</Text>
            <Text style={s.dataValue}>{value}</Text>
          </View>
        ))}

        <Text style={s.sectionTitle}>Common Mistakes to Avoid</Text>
        <Bullets
          items={[
            "Not hiring an independent lawyer (never use the seller's lawyer)",
            "Not checking title deed status — some properties have no separate title deeds",
            "Underestimating total costs (budget 10-12% on top of purchase price)",
            "Not verifying the property is free from encumbrances or mortgages",
            "Rushing the decision — always visit the area at different times of day",
            "Not considering resale potential if buying for investment",
          ]}
        />

        <View style={s.callout}>
          <Text style={s.calloutText}>
            ReloKey Cyprus guides you through every step — from property search to key handover.
            Book a free consultation: info@relokeycyprus.com | +357 99 123 456
          </Text>
        </View>
        <Footer page="How to Buy Property in Cyprus" />
      </Page>
    </Document>
  );
}

// ── Generate all PDFs ──

async function main() {
  const outputDir = path.join(process.cwd(), "public", "downloads");

  console.log("Generating branded PDFs...\n");

  await renderToFile(<LivingInLimassolPDF />, path.join(outputDir, "living-in-limassol-2025.pdf"));
  console.log("  ✓ living-in-limassol-2025.pdf");

  await renderToFile(<InvestmentReportPDF />, path.join(outputDir, "cyprus-investment-report-2025.pdf"));
  console.log("  ✓ cyprus-investment-report-2025.pdf");

  await renderToFile(<HowToBuyPDF />, path.join(outputDir, "how-to-buy-property-cyprus.pdf"));
  console.log("  ✓ how-to-buy-property-cyprus.pdf");

  console.log("\nAll PDFs generated successfully!");
}

main().catch(console.error);
