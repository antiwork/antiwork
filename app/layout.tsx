import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

declare global {
  interface Window {
    HelperWidget: {
      init: (config: {
        email: string;
        email_hash: string;
        mailbox_slug: string;
        timestamp: number;
        title?: string;
        autoOpen?: boolean;
      }) => void;
      show: () => void;
      toggle: () => void;
    };
  }
}

export const metadata: Metadata = {
  title: "Anti-Work",
  description: "A suite of sweet software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Script id="helper-widget" strategy="afterInteractive">
          {`
            (function(d,t) {
              var g = d.createElement("script");
              g.src = "https://helper.ai/widget/sdk.js";
              g.onload = function() {
                const timestamp = Date.now();
                window.HelperWidget.init({
                  email: 'public@antiwork.com',
                  email_hash: 'public',
                  mailbox_slug: 'gumroad',
                  timestamp: timestamp,
                  title: 'Anti-Work Support',
                  autoOpen: false
                });
              };
              d.body.appendChild(g);
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
}
