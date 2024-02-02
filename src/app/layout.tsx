import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolso Conjunto",
  description:
    "Sua ferramenta para metas financeiras compartilhadas! Junte-se, economize e alcance objetivos em grupo. Finanças colaborativas feitas simples!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <div className="flex-1">{children}</div>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
