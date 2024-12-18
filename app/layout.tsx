import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
        <button
          data-helper-toggle
          className="fixed bottom-4 right-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Support
        </button>
        <Script src="/sdk.js" strategy="afterInteractive" />
        <Script id="init-widget">
          {`
            function initWidget() {
              if (typeof window !== 'undefined' && window.HelperWidget) {
                window.HelperWidget.init({
                  title: 'Support',
                  mailbox_slug: 'antiwork',
                });
                console.log('HelperWidget initialized');
              } else {
                console.error('HelperWidget not found on window');
              }
            }

            if (typeof window !== 'undefined' && window.HelperWidget) {
              initWidget();
            } else {
              window.addEventListener('load', initWidget);
            }
          `}
        </Script>
      </body>
    </html>
  );
}
