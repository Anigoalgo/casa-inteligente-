import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Achados de Casa Inteligente | Tecnologia para o seu lar",
  description:
    "Descubra achados de casa inteligente: interruptores touch, controles universais e soluções práticas para automatizar sua casa.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Achados de Casa Inteligente",
    description: "Sua casa mais inteligente. Sua rotina mais simples.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
