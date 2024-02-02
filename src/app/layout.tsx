import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import { ThemeProvider } from "@/providers/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolso Conjunto",
  description:
    "Sua ferramenta para metas financeiras compartilhadas! Junte-se, economize e alcance objetivos em grupo. Finanças colaborativas feitas simples!",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#078d43" }],
  authors: [
    { name: "Bruno Felipy" },
    {
      name: "Bruno Felipy",
      url: "https://github.com/nobruf",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <div className="flex h-full flex-col">{children}</div>
            </AuthProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

