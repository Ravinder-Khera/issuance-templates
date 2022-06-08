
import React, { useState } from 'react';
import Accordion from './accordian';

function Faq() {
    const accordionData = [
        {
          title: 'How Do I Buy NFT?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          title: 'WHERE CAN I VIEW MY NFT?',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'WHERE CAN I SELL MY NFT?',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti`
        }
      ];

    return (<>
        <section className="teams_section faq_section">
            <div className="container">
                <div className="heading_div mb-5">
                    <h2 className="template_headings">Questi<span>o</span>ns</h2>
                    
                    <div className="accordion">
                        {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                        ))}
                    </div>
                </div>
                <button type="button" className="learn_more_btn"><p className="m-0 p-1">Learn More</p></button>
            </div>
        </section>
    </>);
}
  
export default Faq;
