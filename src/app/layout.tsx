import "@/styles/global.scss";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import icon from "@/assets/images/logo.png";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GO.Charity",
  description: `Welcome to GO.Charity, a crowdfunding platform with a profound purpose. GO.Charity is a pioneering initiative based in Nigeria that's rewriting the rules of crowdfunding. Our commitment goes beyond fundraising; we exist to amplify the voices of less privileged children, particularly those in orphanages.`,
  icons: { icon: icon.src },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          {...{ crossorigin: "anonymous" }}
          {...{ referrerpolicy: "no-referrer" }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
