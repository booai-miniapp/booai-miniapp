import "./globals.css";

export const metadata = {
  title: 'BooAI — Base Marketplace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
