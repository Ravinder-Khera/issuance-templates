import nftImg from '../../assets/images/unnamed.png';
import React from "react";
import Slider from "react-slick";

function Team() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      };
    return (<>
        <section className="teams_section">
            <div className="container">
                <div className="heading_div mb-5">
                    <h2 className="template_headings">Team</h2>
                    <p>Iliquas pelicil idundis evel iniminu menditate volorec temquamust labo. Dolupta tiantibus secuptatem harchil inctotat experibus.</p>
                </div>
                <div className='slider_div'>
                    <Slider {...settings}>
                        <div className='card'>
                            <div className="carousal_card">
                                <div className="d-flex">
                                    <div className="green_bg">BUY NOW</div>
                                    <div className="black_bg">#1234</div>
                                </div>
                                <div className="container card position-relative">
                                    <img src={ nftImg } className="img-fluid p-2"/>
                                    <div className='rarity_percentage_box'>
                                        <p className='m-0 p-2'>
                                            0.5%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="carousal_card">
                                <div className="d-flex">
                                    <div className="green_bg">BUY NOW</div>
                                    <div className="black_bg">#1234</div>
                                </div>
                                <div className="container card position-relative">
                                    <img src={ nftImg } className="img-fluid p-2"/>
                                    <div className='rarity_percentage_box'>
                                        <p className='m-0 p-2'>
                                            0.5%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="carousal_card">
                                <div className="d-flex">
                                    <div className="green_bg">BUY NOW</div>
                                    <div className="black_bg">#1234</div>
                                </div>
                                <div className="container card position-relative">
                                    <img src={ nftImg } className="img-fluid p-2"/>
                                    <div className='rarity_percentage_box'>
                                        <p className='m-0 p-2'>
                                            0.5%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="carousal_card">
                                <div className="d-flex">
                                    <div className="green_bg">BUY NOW</div>
                                    <div className="black_bg">#1234</div>
                                </div>
                                <div className="container card position-relative">
                                    <img src={ nftImg } className="img-fluid p-2"/>
                                    <div className='rarity_percentage_box'>
                                        <p className='m-0 p-2'>
                                            0.5%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    </>);
}
  
export default Team;