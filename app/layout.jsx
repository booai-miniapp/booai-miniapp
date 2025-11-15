export const metadata = {
  title: "BooAI Marketplace",
  description: "Base + Farcaster NFT Marketplace"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ background: "#000", color: "#fff", margin: 0, fontFamily: "system-ui, Arial" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
