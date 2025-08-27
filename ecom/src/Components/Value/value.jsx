import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good place to live can make your life better
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, index) => (
              <AccordionItem key={index} uuid={index}>
                <AccordionItemHeading>
                  <AccordionItemButton className='accordionButton flexCenter'>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div className="flexCenter icon">
                            {item.icon}
                          </div>
                          <span className="primaryText">{item.heading}</span>
                          <div className={`flexCenter icon ${expanded ? 'rotate' : ''}`}> 
                            <MdOutlineArrowDropDown size={20}/>
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <span className="secondaryText">{item.detail}</span>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  )
}

export default Value
