import Head from "next/head";
import Header from "@/content/components/Header";
import "./globals.css";
import Footer from "@/content/components/Footer";

export const metadata = {
  title: "31ombr",
  description: "31 окрема механізована бригада",
  keywords: [
    "31ombr",
    "31омбр",
    "ОМБр",
    "31 бригада",
    "31 окрема механізована бригада",
    "рекрутиг",
    "механізована бригада",
    "вакансії",
    "захист країни",
    "служба",
    "військова служба",
    "військові"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>31ombr</title>
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
