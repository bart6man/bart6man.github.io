import Header from "../components/Header";
import Video from "../components/Video";
import Support from "../components/Supports";
import Bio from "../components/Bio";
import Footer from "../components/Footer/Footer";
import Up from "../components/Bio/Buttons/Up";

export default function Home() {
  return (
    <>
      <Header />
      <Video />
      <Support />
      <Up />
      <Bio />

      <Footer />
    </>
  );
}
