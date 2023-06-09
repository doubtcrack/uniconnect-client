import Faq from "../components/FAQ/FAQ";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

export default FAQPage;
