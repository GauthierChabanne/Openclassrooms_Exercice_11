import Banner from "../components/Banner"
import CardsList from "../components/CardsList";
import homeBannerImage from "../assets/home-banner.png"
import '../style/pages/home.css'
import React from "react";

function Home() {
  return (
    <main className="container">
      <section className="banner-part">
      <Banner
        img = {homeBannerImage}
      />
      <p>Chez vous, partout et ailleurs</p>
    </section>
    <section className="cardsPart">
        <CardsList />
    </section>
    </main>
  );
}

export default Home;
