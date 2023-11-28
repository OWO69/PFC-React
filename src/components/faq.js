import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="faq-element accordion-element"
      >
        <div className="faq-details">
          <span className="faq-text">
            What in the name of Bamboozle is Bambooverse?
          </span>
          <span data-role="accordion-content" className="faq-text01">
            An aim at making a series of mini games and more using blockchained
            IP arranging battle passes, early access, airdrops and more to the
            owners
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span className="faq-text02">Why Bambooverse</span>
          <span data-role="accordion-content" className="faq-text03">
            Some people see things and say why and some imagine things that
            never were and say why in the Panda has it not been done aleady.
            It&apos;s fun stuf
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon02">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text04">
            What does blockchain add over a central databse?
          </span>
          <span data-role="accordion-content" className="faq-text05">
            A common protocol of exchangable value that is decentralized and has
            a github-esque community aided development has benefits for both
            gamers and game companies. Gamers benefit by having ownership over
            game skins, asset portability and subsidizing of experiences and
            first time possibility of cashing out the fruits of grind in more
            than just flex. Easier game drops, limited edition skins,
            straightforward launches, IP engagement across games are something
            developers can leverage even more easily. An easy launch and
            standard operating procedure of asset implementation with Chainsafe
            as an addon in unity is an example of that - lowering costs and
            adding transparency to the business of in game items. What internet
            tools did for creators the web3 does for capturing value for gamers
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon04">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text06">
            How many Pandas roam the Bambooverse?
          </span>
          <span data-role="accordion-content" className="faq-text07">
            The alpha edition unlocks 6969 limited edition Pandas who have
            powers to be roaming across entire series of games starting with a
            f2p shooter game
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon06">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4">
          <span className="faq-text08">What&apos;s new in the shooter?</span>
          <span data-role="accordion-content" className="faq-text09">
            Bamboo Bazookas, Babushkas and a special partnership with a top tier
            streamer with airdrops of 1off skins for superfans
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon08">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element5 accordion-element"
      >
        <div className="faq-details5">
          <span className="faq-text10">When is the launch</span>
          <span data-role="accordion-content" className="faq-text11">
            Soon (Follow the socials for updates)
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon10">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
