import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fala Português — AI 葡语口语练习',
  description: '为中文母语学习者设计的巴西葡语 AI 情景口语练习原型。',
  openGraph: {
    title: 'Fala Português — AI 葡语口语练习',
    description: 'Pratique português com IA em situações do dia a dia.',
    images: ['https://fala-portugues-ai.huanru330.chatgpt.site/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fala Português — AI 葡语口语练习',
    description: 'Pratique português com IA em situações do dia a dia.',
    images: ['https://fala-portugues-ai.huanru330.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
