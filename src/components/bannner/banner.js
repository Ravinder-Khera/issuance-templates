import nftImg from '../../assets/images/unnamed.png';

function Banner() {
    return (<>
       <section className='mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-md-2 position-relative">
                        <div className="Banner_card cards_transform1">
                            <div className="d-flex">
                                <div className="green_bg">BUY NOW</div>
                                <div className="black_bg">#1234</div>
                            </div>
                            <div className="container card">
                                <img src={ nftImg } className="img-fluid p-2"/>
                                <div className='rarity_percentage_box'>0.5%
					            </div>
                            </div>
                        </div>
                        <div className='round_border_card'>
                        </div>
                        <div className="Banner_card cards_transform2">
                            <div className="d-flex">
                                <div className="green_bg">BUY NOW</div>
                                <div className="black_bg">#1234</div>
                            </div>
                            <div className="container card position-relative">
                                <img src={ nftImg } className="img-fluid p-2"/>
                                <div className='rarity_percentage_box'>0.5%
					            </div>
                            </div>
                        </div>
                        <div className='bottom_shadow'></div>
                    </div>
                    <div className="col-md-6 order-md-1 text-md-start">
                        <img />
                        <h2 className="template_headings">D<span>O</span>LOR</h2>
                        <h2 className="template_headings">ABO RES</h2>
                        <h2 className="template_headings">SEN<span>E</span>ST</h2>
                        <p>Evenducil ex eaqui dolorrum aut faciis nusant velitat urestibus et eatest ant idundis evel iniminu.</p>
                        <button type="button" className="learn_more_btn"><p className="m-0 p-1">Explore</p></button>
                    </div>
                </div>
            </div>
        </section>
        

    </>);
  }
  
  export default Banner;