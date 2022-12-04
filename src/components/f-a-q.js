import React from 'react'

import PropTypes from 'prop-types'

import './f-a-q.css'

const FAQ = (props) => {
  return (
    <div className={`f-a-q-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="f-a-q-element accordion-element"
      >
        <div className="f-a-q-details">
          <span className="f-a-q-text">
            What in the name of Bamboozle is Bambooverse?
          </span>
          <span data-role="accordion-content" className="f-a-q-text01">
            An aim at making a series of mini games and more using blockchained
            IP arranging battle passes, early access, airdrops and more to the
            owners
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="f-a-q-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="f-a-q-element1 accordion-element"
      >
        <div className="f-a-q-details1">
          <span className="f-a-q-text02">Why Bambooverse</span>
          <span data-role="accordion-content" className="f-a-q-text03">
            Some people see things and say why and some imagine things that
            never were and say why in the Panda has it not been done aleady.
            It&apos;s fun stuf
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="f-a-q-icon02">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="f-a-q-element2 accordion-element"
      >
        <div className="f-a-q-details2">
          <span className="f-a-q-text04">
            What does blockchain add over a central databse?
          </span>
          <span data-role="accordion-content" className="f-a-q-text05">
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
          <svg viewBox="0 0 1024 1024" className="f-a-q-icon04">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="f-a-q-element3 accordion-element"
      >
        <div className="f-a-q-details3">
          <span className="f-a-q-text06">
            How many Pandas roam the Bambooverse?
          </span>
          <span data-role="accordion-content" className="f-a-q-text07">
            The alpha edition unlocks 6969 limited edition Pandas who have
            powers to be roaming across entire series of games starting with a
            f2p shooter game
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="f-a-q-icon06">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="f-a-q-element4 accordion-element"
      >
        <div className="f-a-q-details4">
          <span className="f-a-q-text08">What&apos;s new in the shooter?</span>
          <span data-role="accordion-content" className="f-a-q-text09">
            Bamboo Bazookas, Babushkas and a special partnership with a top tier
            streamer with airdrops of 1off skins for superfans
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="f-a-q-icon08">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="f-a-q-element5 accordion-element"
      >
        <div className="f-a-q-details5">
          <span className="f-a-q-text10">When is the launch</span>
          <span data-role="accordion-content" className="f-a-q-text11">
            Soon (Follow the socials for updates)
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="f-a-q-icon10">
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
