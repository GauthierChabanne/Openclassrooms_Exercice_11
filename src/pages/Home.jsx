import Banner from "../components/Banner"
import homeBannerImage from "../assets/home-banner.png"
import '../style/pages/home.css'

function Home() {
  return (
    <section className="banner-part">
      <Banner
        img = {homeBannerImage}
      />
      <p>Chez vous, partout et ailleurs</p>
    </section>
  );
}

export default Home;
