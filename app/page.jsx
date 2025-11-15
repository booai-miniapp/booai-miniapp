import Marketplace from "../components/Marketplace";

export default function Home() {
  return (
    <main className="py-8">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">BooAI — Base Marketplace</h1>
          <p className="text-sm text-gray-300">
            Aggregate NFTs from Base collections — highest price first.
          </p>
        </div>

        <nav className="text-sm">
          <a href="#" className="mr-4 underline">Mint</a>
          <a href="#" className="underline">Create Drop</a>
        </nav>
      </header>

      <section className="mt-8 grid gap-8">
        {/* Big banner */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Trending NFTs</h2>
              <p className="text-sm text-gray-300">
                Top NFTs across the Base ecosystem
              </p>
            </div>
            <button className="bg-blue-600 px-4 py-2 rounded-lg">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Marketplace grid */}
        <Marketplace />
      </section>
    </main>
  );
}
