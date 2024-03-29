import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, title, fullscreen = false }: any) {
  return (
    <main>
      <Head>
        <title>{title !== undefined ? title : "The Windows"}</title>
      </Head>
      <div className={`w-full`}>
        <div>
          <Navbar />
        </div>

        <div className="">{children}</div>
        <Footer fullscreen={fullscreen} />
      </div>
    </main>
  );
}

export default Layout;
