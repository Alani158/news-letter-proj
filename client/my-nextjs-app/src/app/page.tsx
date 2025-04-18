import Blogs from "./component/Blogs";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import News from "./component/News";

export default function Home() {
  return (
    <div>
      <Hero />
      <Blogs />
      <News />
      <Footer />
    </div>
  );
}
