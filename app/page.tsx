import DataTable from "@/components/DataTable";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header pt-2">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin logo"
              width={100}
              height={100}
            />
            <div className="info">
                <p>Bitcoin / BTC</p>
                <p>$89,113.00</p>
            </div>
          </div>
        </div>
        <p>Trending Coins</p>
        {/* <DataTable/> */}
      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default Page;
