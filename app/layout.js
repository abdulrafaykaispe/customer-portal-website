import { Poppins } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import "react-phone-number-input/style.css";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Customer Portal – Self-Service Order Tracking & Support",
  description:
    "KAISPE's Customer Portal empowers clients with 24/7 self-service: track orders, manage payments & access account details. Boost satisfaction—try free or book a demo!",
  verification: {
    google: "0dqQ5E-SMhvXzN6bbtZjzcRgWFOmpOIgv2GIWE6_TUg",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`}
          async
        ></script>
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased -bg-page text-white overflow-x-clip`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
