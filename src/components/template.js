import Header from './common/header/header'
import Footer from "./common/footer/footer";
import Banner from "./bannner/banner";
import ImageText from "./img-text-section/img-text";
import Details from './details-section/details'
import '../assets/sass/main.css';

function Template() {
  return (<>
    <Header />
    <Banner />
    <ImageText />
    <Details />
    <Footer />
  </>);
}

export default Template;