import { Nav } from "./components";

import {
  Hero,
  Services,
  AboutUs,
  Trending,
  Reviews,
  NewsLetter,
  Footer,
} from "./sections";

function App() {
  return (
    <main>
      <Nav />
      <section className="padding-x py-8 md:py-2">
        <Hero />
      </section>
      <section className="padding-x padding-y">
        <Services />
      </section>
      <section className="padding-x padding-y">
        <AboutUs />
      </section>
      <section className="padding-x padding-y">
        <Trending />
      </section>
      <section className="padding-x padding-y">
        <Reviews />
      </section>
      <section className="padding-x padding-y">
        <NewsLetter />
      </section>
      <section className="pt-8 md:pt-24">
        <Footer />
      </section>
    </main>
  );
}

export default App;
