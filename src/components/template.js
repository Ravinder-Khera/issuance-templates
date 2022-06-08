import Header from './common/header/header'
import Footer from "./common/footer/footer";
import Banner from "./bannner/banner";
import ImageText from "./img-text-section/img-text";
import Details from './details-section/details'
import Progress from './pogressBar/progress';
import '../assets/sass/main.css';
import Team from './team-section/team';
import Slider from './slider/slider';
import Faq from './FAQ/faq';

function Template() {
  return (<>
    <Header />
    <Banner />
    <Progress />
    <ImageText />
    <Slider />
    <Details />
    <Team />
    <Faq />
    <Footer />
  </>);
}

export default Template;