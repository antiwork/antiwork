import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

declare global {
  interface Window {
    HelperWidget: {
      init: (config: { mailbox_slug: string; title?: string }) => void;
      show: () => void;
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
                window.HelperWidget.init({
                  mailbox_slug: 'antiwork',
                  title: 'Anti-Work Support'
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
