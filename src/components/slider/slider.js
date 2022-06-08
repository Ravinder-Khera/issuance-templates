import nftImg from '../../assets/images/unnamed.png';
import React from "react";
import Slider from "react-slick";

function SliderSection() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
      };
    return (<>
        <section className="slider_section">
            <div className="container slider_container">
                <div className='slider_div'>
                    <Slider {...settings}>
                        <div  className='m-2'>
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
                        <div  className='m-2'>
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
                        <div className='m-2'>
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
                        <div  className='m-2'>
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
                        <div className='m-2'>
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
                        <div  className='m-2'>
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
  
export default SliderSection;