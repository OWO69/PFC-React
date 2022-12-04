import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import FAQ from '../components/f-a-q'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PFC</title>
        <meta property="og:title" content="PFC" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-gallery gallery">
          <div className="home-container1 scrollbar">
            <img
              alt="image"
              src="/playground_assets/7-300h.png"
              className="home-image scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/8-300h.png"
              className="home-image01 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/6-300h.png"
              className="home-image02 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/5-300h.png"
              className="home-image03 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/4-300h.png"
              className="home-image04 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/3-300h.png"
              className="home-image05 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/9-300h.png"
              className="home-image06 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/2-300h.png"
              className="home-image07 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/11-300h.png"
              className="home-image08 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/1-300h.png"
              className="home-image09 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/10-300h.png"
              className="home-image10 scroll-item"
            />
          </div>
        </div>
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">Panda Fight Club</h1>
                <span className="home-caption">
                  Black and white belt fighters vowing for stream sniping
                  supremacy as they hash it out on the most f2p fun game ever
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text">Join the waitlist</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text01">
                    Join the waitlist (but in grey)
                  </span>
                </div>
              </div>
            </main>
          </div>
          <div className="home-image11">
            <img
              alt="image"
              src="/playground_assets/faceon__1_-removebg-preview-900h.png"
              className="home-image12"
            />
          </div>
          <div className="home-image13">
            <img
              alt="image"
              src="/playground_assets/heroimage-900h.png"
              className="home-image14"
            />
          </div>
        </div>
      </section>
      <section className="home-section01">
        <header className="home-header01">
          <h2 className="home-text02">
            What&apos;s cooking in the Panda kitchen?
          </h2>
          <span className="home-text03">Panda stuff</span>
        </header>
        <section className="home-note">
          <div className="home-image15">
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B18%5D-600h.png"
              className="home-image16"
            />
          </div>
          <div className="home-content01">
            <div className="home-main1">
              <div className="home-caption1">
                <span className="home-section02 section-head">Sneak peek</span>
              </div>
              <div className="home-heading01">
                <h2 className="section-heading">Wen trailer</h2>
                <p className="section-description">
                  The black &amp; white belt master of all 69 known and unheard
                  of martial arts these Pandas have the excitement &amp; energy
                  of amateurs and the guile &amp; expertise of pros.
                  Reincarnated from a Panda who ate too much Bamboo and was
                  deemed too hot for hell and sent back these Jetpacks of joy go
                  for the jugular and are proficient in 20+ weapons
                </p>
              </div>
            </div>
            <div className="home-get-started2 button">
              <span className="home-text04">Join Discord</span>
            </div>
          </div>
        </section>
        <section className="home-note1">
          <div className="home-image17">
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B8%5D-1200w.png"
              className="home-image18"
            />
          </div>
          <div className="home-content02">
            <main className="home-main2">
              <header className="home-caption2">
                <span className="home-section03 section-head">
                  From new+ york to Cyberpunk Bangkok
                </span>
              </header>
              <main className="home-heading03">
                <header className="home-header02">
                  <h2 className="section-heading">10+ game modes</h2>
                  <p className="section-description">
                    While brought up in the bamboo jungles, they quickly spread
                    to the rest of the world to complete their conquest of
                    collecting wisdom and knowledge of what the Planet Panda has
                    to offer them. They assimilated across various cultures and
                    gained fondness for various sports, cuisines &amp; dances
                    unlockable throughout the game modes
                  </p>
                </header>
                <div className="home-checkmarks">
                  <div className="home-mark">
                    <div className="home-icon">
                      <svg viewBox="0 0 1024 1024" className="home-icon01">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                    </div>
                    <p className="home-label">Battle Pass</p>
                  </div>
                  <div className="home-mark1">
                    <div className="home-icon03">
                      <svg viewBox="0 0 1024 1024" className="home-icon04">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                    </div>
                    <p className="home-label1">OG Skin Drops</p>
                  </div>
                  <div className="home-mark2">
                    <div className="home-icon06">
                      <svg viewBox="0 0 1024 1024" className="home-icon07">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                    </div>
                    <p className="home-label2">Limited edition streamer Drip</p>
                  </div>
                </div>
              </main>
            </main>
            <div className="home-get-started3 button">
              <span className="home-text05">
                Did I tell you about our lord and savior black&amp;whitelist
              </span>
            </div>
          </div>
        </section>
        <div className="home-gallery1 gallery">
          <div className="home-container2 scrollbar">
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B1%5D-600h.png"
              className="home-image19 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B10%5D-600h.png"
              className="home-image20 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B11%5D-600h.png"
              className="home-image21 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B12%5D-600h.png"
              className="home-image22 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B13%5D-600h.png"
              className="home-image23 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B14%5D-600h.png"
              className="home-image24 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B15%5D-600h.png"
              className="home-image25 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B16%5D-600h.png"
              className="home-image26 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B17%5D-600h.png"
              className="home-image27 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B18%5D-600h.png"
              className="home-image28 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B19%5D-600h.png"
              className="home-image29 scroll-item"
            />
          </div>
        </div>
      </section>
      <section className="home-section04">
        <h2 className="home-text06">
          <span>PEW PEW POW POW</span>
          <br></br>
        </h2>
        <div className="home-features">
          <header className="feature feature-active home-feature">
            <h3 className="home-text09">Bambooska</h3>
            <p className="home-text10">ERC 1155s</p>
          </header>
          <header className="feature home-feature1">
            <h3 className="home-text11">Babubshka</h3>
            <p className="home-text12">Limited Edition</p>
          </header>
          <header className="feature home-feature2">
            <h3 className="home-text13">Streamer Snipers</h3>
            <p className="home-text14">Ultra Rare Pro Max 1off Editions</p>
          </header>
        </div>
        <div className="home-note2">
          <div className="home-content03">
            <main className="home-main3">
              <h2 className="home-heading05">Tradable GunSkins</h2>
              <p className="home-paragraph2">
                <span>
                  The road to digital ownership of items was started by steam
                  but true mastery comes from a lifetime devotion to improvement
                  which I&apos;d say is pretty good with transparent trading of
                  assets and public knowledge of how many editions of a skin are
                  there. More and more people will buy one if they can just give
                  a shot to this new way of tokenized ownership imo
                </span>
                <br></br>
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text17">Learn more -&gt;</p>
            </div>
          </div>
          <div className="home-image30">
            <img
              alt="image"
              src="/playground_assets/wrappedzooka%20%5B1%5D-1200w.png"
              className="home-image31"
            />
          </div>
        </div>
        <div className="home-gallery2 gallery">
          <div className="home-container3 scrollbar">
            <img
              alt="image"
              src="/playground_assets/bambooka-200h.png"
              className="home-image32 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B11%5D-200h.png"
              className="home-image33 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/shotgun-200h.png"
              className="home-image34 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B1%5D-200h.png"
              className="home-image35 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/binigun-200h.png"
              className="home-image36 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B10%5D-200h.png"
              className="home-image37 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bk47-200h.png"
              className="home-image38 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B12%5D-200h.png"
              className="home-image39 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooshka-200h.png"
              className="home-image40 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B4%5D-200h.png"
              className="home-image41 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image42 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B9%5D-200h.png"
              className="home-image43 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooka-200h.png"
              className="home-image44 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B31%5D-200h.png"
              className="home-image45 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/shotgun-200h.png"
              className="home-image46 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B22%5D-200h.png"
              className="home-image47 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/binigun-200h.png"
              className="home-image48 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B32%5D-200h.png"
              className="home-image49 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bk47-200h.png"
              className="home-image50 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B37%5D-200h.png"
              className="home-image51 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooshka-200h.png"
              className="home-image52 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B7%5D-200h.png"
              className="home-image53 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image54 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B12%5D-200h.png"
              className="home-image55 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooshka-200h.png"
              className="home-image56 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B6%5D-200h.png"
              className="home-image57 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image58 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B27%5D-200h.png"
              className="home-image59 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image60 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B8%5D-200h.png"
              className="home-image61 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image62 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B18%5D-200h.png"
              className="home-image63 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image64 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B2%5D-200h.png"
              className="home-image65 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image66 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B23%5D-200h.png"
              className="home-image67 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image68 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B13%5D-200h.png"
              className="home-image69 scroll-item"
            />
          </div>
        </div>
      </section>
      <section className="home-section05">
        <div className="home-note3">
          <div className="home-image70">
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B19%5D-600h.png"
              className="home-image71"
            />
          </div>
          <div className="home-content04">
            <div className="home-caption3"></div>
            <div className="home-heading06">
              <div className="home-header03">
                <h2 className="section-heading">JungleMap</h2>
              </div>
              <div className="home-accordion">
                <div
                  data-role="accordion-container"
                  className="home-element accordion-element"
                >
                  <div className="home-details">
                    <span className="section-head">Bambooverse begins</span>
                    <span className="home-text18">Dec 22</span>
                    <span data-role="accordion-content" className="home-text19">
                      we will first build a community of around 10k people on
                      both twitter and discord and be giving whitelists to first
                      and foremost the gaming audience of our partner streamer
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="home-icon09"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <span className="section-head">Bambooverse Blooms</span>
                <div
                  data-role="accordion-container"
                  className="home-element1 accordion-element"
                >
                  <div className="home-details01">
                    <span className="home-text20">Q1 2023</span>
                    <span data-role="accordion-content" className="home-text21">
                      we will then add our project into leading nft marketplaces
                      like opensea and gamestop nft as we set up shop
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="home-icon11"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <span className="section-head">Bambooverse Booms</span>
                <div
                  data-role="accordion-container"
                  className="home-element2 accordion-element"
                >
                  <div className="home-details02">
                    <span className="home-text22">Q2 2023</span>
                    <span data-role="accordion-content" className="home-text23">
                      we&apos;ll be building a Panda gaming studio from the
                      funds raised and add more members to the team to build
                      more games and add more skins and events as time passes to
                      build even more quality product and make a name in both
                      web2 and web3 worlds
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="home-icon13"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element3 accordion-element"
                >
                  <div className="home-details03">
                    <span className="home-text24">Funds Split</span>
                    <span data-role="accordion-content" className="home-text25">
                      50% for the project, 10% for the team, 10% for promotion,
                      10% misc , 20% to streamer partner and a 100% reason to
                      remember the name
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon"
                    className="home-icon15"
                  >
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section09">
        <header className="home-header04">
          <header className="home-left">
            <span className="section-head">
              Priced at a Popcorn per pop, a pizza per piece
            </span>
            <h2 className="section-heading">At a Glance</h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph3 section-description">
              We&apos;ll be guiding our fam through the experience of ordering a
              game battle pass via crypto. While f2p at it&apos;s essence, we
              are monetizing by adding special perks, drops and a limited
              edittion world cup mode for those that support the founding of our
              studio
            </p>
          </div>
        </header>
        <main className="home-cards">
          <Card rootClassName="card-root-class-name"></Card>
          <section className="home-card">
            <div className="home-icon17">
              <img
                alt="image"
                src="/playground_assets/group%201314-200h.png"
                className="home-icon18"
              />
            </div>
            <main className="home-content05">
              <h1 className="home-header05">Launch</h1>
              <p className="home-description">TBD</p>
            </main>
          </section>
          <section className="home-card01">
            <div className="home-icon19">
              <img
                alt="image"
                src="/playground_assets/group%201317-200h.png"
                className="home-icon20"
              />
            </div>
            <main className="home-content06">
              <h1 className="home-header06">Blockchain</h1>
              <p className="home-description01">Polygon</p>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section11">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header07">
            <h2 className="section-heading">Blockchain </h2>
            <p className="home-description02 section-description">
              Polyon is our starting choice of sidechain. As we&apos;re only
              using the chain for fund raise and not long term asset holding it
              seems the best decision to hold our Initial sale on a low gas
              platform like platform before pivoting to even better experiences
            </p>
          </div>
          <div className="home-buttons1">
            <div className="home-get-started4 button">
              <span className="home-text26">Opensea</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text27">Minting Demo (youtube)</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section12">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header08">
            <header className="home-left3">
              <h2 className="section-heading home-heading10">About Us</h2>
            </header>
            <div className="home-right1"></div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details04">
                  <div className="home-header09">
                    <label className="home-name">Muller23#1095</label>
                    <div className="home-pricing01">
                      <h1 className="home-price">Project Lead</h1>
                    </div>
                  </div>
                  <p className="home-description03">
                    Electronics Engineer, Digital Nomad, Gamer
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/83-300w.png"
                    className="home-image72"
                  />
                </div>
                <div className="home-buy-details">
                  <a
                    href="https://tracker.gg/valorant/profile/riot/muller23%231095/overview?season=all"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <div className="home-buy button">
                      <span className="home-text28">
                        <span>Tracker GG</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <div className="home-buy01 button">
                      <span className="home-text31">
                        <span>Twitter</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details05">
                  <div className="home-header10">
                    <label className="home-name1">Lupu</label>
                    <div className="home-pricing02">
                      <h1 className="home-price1">Artist</h1>
                    </div>
                  </div>
                  <p className="home-description04">
                    Painter turned digital artist
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/1-300h.png"
                    className="home-image73"
                  />
                </div>
                <div className="home-buy-details1">
                  <a
                    href="https://www.deviantart.com/lupubaciu23"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <div className="home-buy02 button">
                      <span className="home-text34">
                        <span>Deviant Art</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link3"
                  >
                    <div className="home-buy03 button">
                      <span className="home-text37">
                        <span>Discord</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details06">
                  <div className="home-header11">
                    <label className="home-name2">BigBird</label>
                    <div className="home-pricing03">
                      <span className="home-price2">GameDev</span>
                    </div>
                  </div>
                  <p className="home-description05">
                    An educator in the space of web3 and an indie game designer
                    for over 10 years
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/6-300h.png"
                    className="home-image74"
                  />
                </div>
                <div className="home-buy-details2">
                  <a
                    href="https://store.steampowered.com/curator/39218809"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link4"
                  >
                    <div className="home-buy04 button">
                      <span className="home-text40">
                        <span>Steam Store</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://youtube.com/channel/UCXgxW8ppgHI7_zvsS4O0Ltw"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link5"
                  >
                    <div className="home-buy05 button">
                      <span className="home-text43">
                        <span>Youtube</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </main>
            <main className="home-plans1">
              <div className="home-plan3">
                <div className="home-details07">
                  <div className="home-header12">
                    <label className="home-name3">Butch</label>
                    <div className="home-pricing04">
                      <h1 className="home-price3">WebDev</h1>
                    </div>
                  </div>
                  <p className="home-description06">
                    A weekday workhorse and weekend waster
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/93-300w.png"
                    className="home-image75"
                  />
                </div>
                <div className="home-buy-details3">
                  <div className="home-buy06 button">
                    <span className="home-text46">
                      <span>GitHub</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-buy07 button">
                    <span className="home-text49">
                      <span>Previously On</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-plan4">
                <div className="home-details08">
                  <div className="home-header13">
                    <label className="home-name4">Frenchie</label>
                    <div className="home-pricing05">
                      <h1 className="home-price4">Solidity</h1>
                    </div>
                  </div>
                  <p className="home-description07">
                    If Code is law, Frenchie is lawman
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/87-300w.png"
                    className="home-image76"
                  />
                </div>
                <div className="home-buy-details4">
                  <div className="home-buy08 button">
                    <span className="home-text52">
                      <span>Goerli</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-buy09 button">
                    <span className="home-text55">
                      <span>Etherscan</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-plan5">
                <div className="home-details09">
                  <div className="home-header14">
                    <label className="home-name5">****</label>
                    <div className="home-pricing06">
                      <span className="home-price5">Streamer</span>
                    </div>
                  </div>
                  <p className="home-description08">________________</p>
                  <img
                    alt="image"
                    src="/playground_assets/8-300h.png"
                    className="home-image77"
                  />
                </div>
                <div className="home-buy-details5">
                  <div className="home-buy10 button">
                    <span className="home-text58">
                      <span>Twitch</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-buy11 button">
                    <span className="home-text61">
                      <span>Insta</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </main>
            <main className="home-plans2">
              <div className="home-plan6">
                <div className="home-details10">
                  <div className="home-header15">
                    <label className="home-name6">Kannon</label>
                    <div className="home-pricing07">
                      <h1 className="home-price6">MemeTeam</h1>
                    </div>
                  </div>
                  <p className="home-description09">
                    Jpeg collector, digital trash cleaner, moody moderator
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/97-300w.png"
                    className="home-image78"
                  />
                </div>
                <div className="home-buy-details6">
                  <div className="home-buy12 button">
                    <span className="home-text64">
                      <span>Discord</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-plan7">
                <div className="home-details11">
                  <div className="home-header16">
                    <label className="home-name7">Gabriel</label>
                    <div className="home-pricing08">
                      <h1 className="home-price7">MemeTeam</h1>
                    </div>
                  </div>
                  <p className="home-description10">
                    <span>
                      If Neymar has million fans, then I&apos;m one of them.
                    </span>
                    <br></br>
                    <span>If Neymar has one fan, then I&apos;m the one.</span>
                    <br className="home-text70"></br>
                    <span>
                      If Neymar has no fans, that means I don&apos;t exist
                    </span>
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/48-300w.png"
                    className="home-image79"
                  />
                </div>
                <div className="home-buy-details7">
                  <div className="home-buy13 button">
                    <span className="home-text72">Discord</span>
                  </div>
                </div>
              </div>
              <div className="home-plan8">
                <div className="home-details12">
                  <div className="home-header17">
                    <label className="home-name8">WarJammer99</label>
                    <div className="home-pricing09">
                      <span className="home-price8">MemeTeam</span>
                    </div>
                  </div>
                  <p className="home-description11">
                    Peace was never a top10 option
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/27-300w.png"
                    className="home-image80"
                  />
                </div>
                <div className="home-buy-details8">
                  <div className="home-buy14 button">
                    <span className="home-text73">
                      <span>Twitter</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
      </section>
      <section className="home-section13">
        <header className="home-header18">
          <header className="home-left4">
            <span className="section-head">
              Review us or roast us and get featured
            </span>
            <h2 className="home-heading11 section-heading">
              Tweets with Beats
            </h2>
          </header>
          <div className="home-right2"></div>
        </header>
        <main className="home-cards1">
          <div className="home-container4">
            <section className="home-card02">
              <div className="home-stars">
                <svg viewBox="0 0 1024 1024" className="home-icon21">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon23">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon25">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content07">
                <p className="home-quote">&quot;What the fk&quot;</p>
                <div className="home-author">
                  <img
                    alt="image"
                    src="/playground_assets/9-300h.png"
                    className="home-avatar"
                  />
                  <div className="home-details13">
                    <h1 className="home-author01">Skrrrrrrr</h1>
                    <label className="home-position">Twitter</label>
                  </div>
                </div>
              </main>
            </section>
            <section className="home-card03">
              <div className="home-stars1">
                <svg viewBox="0 0 1024 1024" className="home-icon27">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon29">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon31">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon33">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content08">
                <p className="home-quote1">&quot;Cool Stuff&quot;</p>
                <div className="home-author02">
                  <img
                    alt="image"
                    src="/playground_assets/2-300h.png"
                    className="home-avatar1"
                  />
                  <div className="home-details14">
                    <h1 className="home-author03">DubStepForever</h1>
                    <label className="home-position1">IRL</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div className="home-container5">
            <section className="home-card04">
              <div className="home-stars2">
                <svg viewBox="0 0 1024 1024" className="home-icon35">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content09">
                <p className="home-quote2">&quot;Not A MOBA&quot;</p>
                <div className="home-author04">
                  <img
                    alt="image"
                    src="/playground_assets/7-300h.png"
                    className="home-avatar2"
                  />
                  <div className="home-details15">
                    <h1 className="home-author05">MOBAlover69</h1>
                    <label className="home-position2">Discord</label>
                  </div>
                </div>
              </main>
            </section>
            <section className="home-card05">
              <div className="home-stars3">
                <svg viewBox="0 0 1024 1024" className="home-icon37">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon39">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content10">
                <p className="home-quote3">&quot;Do Me&quot;</p>
                <div className="home-author06">
                  <img
                    alt="image"
                    src="/playground_assets/5-300h.png"
                    className="home-avatar3"
                  />
                  <div className="home-details16">
                    <h1 className="home-author07">DMmeGiveaways</h1>
                    <label className="home-position3">Reddit</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div className="home-container6">
            <section className="home-card06">
              <div className="home-stars4">
                <svg viewBox="0 0 1024 1024" className="home-icon41">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon43">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon45">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon47">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon49">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content11">
                <p className="home-quote4">
                  &quot;Better than Mona Lisa if that painting were a game&quot;
                </p>
                <div className="home-author08">
                  <img
                    alt="image"
                    src="/playground_assets/4-300h.png"
                    className="home-avatar4"
                  />
                  <div className="home-details17">
                    <h1 className="home-author09">YoMomma</h1>
                    <label className="home-position4">DMs</label>
                  </div>
                </div>
              </main>
            </section>
            <section className="home-card07">
              <div className="home-stars5">
                <svg viewBox="0 0 1024 1024" className="home-icon51">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon53">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon55">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon57">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon59">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content12">
                <p className="home-quote5">&quot;It;s Okay&quot;</p>
                <div className="home-author10">
                  <img
                    alt="image"
                    src="/playground_assets/10-300h.png"
                    className="home-avatar5"
                  />
                  <div className="home-details18">
                    <h1 className="home-author11">Simona</h1>
                    <label className="home-position5">Insta</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text76">View more</p>
        </div>
      </section>
      <section className="home-section15">
        <header className="home-header19">
          <span className="section-head">Across the interwebz</span>
          <h2 className="home-heading12 section-heading">Featured On</h2>
        </header>
        <main className="home-cards2">
          <section className="home-card08">
            <main className="home-content13">
              <header className="home-header20">
                <h1 className="home-header21">Rarity Tools</h1>
              </header>
              <img
                alt="image"
                src="/playground_assets/1_d1vhtbpalfshxeofveiz5w-200h.png"
                className="home-image81"
              />
              <div className="home-button">
                <a
                  href
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link6"
                >
                  <p className="home-text77">Check It Out-&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card09">
            <main className="home-content14">
              <header className="home-header22">
                <h1 className="home-header23">Tech Crunch</h1>
              </header>
              <img
                alt="image"
                src="/playground_assets/1200px-techcrunch_logo.svg-200h.png"
                className="home-image82"
              />
              <div className="home-button1">
                <a
                  href
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link7"
                >
                  <p className="home-text78">Read -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card10">
            <main className="home-content15">
              <header className="home-header24">
                <h1 className="home-header25">Rarity Sniper</h1>
              </header>
              <img
                alt="image"
                src="/playground_assets/raritysniper-200h.webp"
                className="home-image83"
              />
              <div className="home-button2">
                <a
                  href
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link8"
                >
                  <p className="home-text79">Scroll-&gt;</p>
                </a>
              </div>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section17">
        <header className="home-header26">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading13 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion1">
          <FAQ rootClassName="f-a-q-root-class-name"></FAQ>
        </main>
      </section>
      <section className="home-section19">
        <main className="home-content16">
          <header className="home-header27">
            <h2 className="home-heading14 section-heading">
              Download links (coming soon)
            </h2>
            <div className="home-buttons2">
              <div className="home-i-o-s button">
                <img
                  alt="image"
                  src="/playground_assets/apple-200w.png"
                  className="home-icon61"
                />
                <span className="home-text80">Download for iOS</span>
              </div>
              <div className="home-android button">
                <img
                  alt="image"
                  src="/playground_assets/android-200h.png"
                  className="home-icon62"
                />
                <span className="home-text81">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/playground_assets/bkg%20%5B9%5D-1200w.png"
            className="home-image84"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-buy15 button">
          <span className="home-text82">-&gt;</span>
          <span className="home-text83">Links &amp; Socials</span>
        </div>
        <div className="home-content17">
          <main className="home-main-content">
            <div className="home-content18">
              <header className="home-categories">
                <img
                  alt="image"
                  src="/playground_assets/discord-logo-200h.png"
                  className="home-image85"
                />
                <img
                  alt="image"
                  src="/playground_assets/twitter-logo.svg-200h.png"
                  className="home-image86"
                />
                <img
                  alt="image"
                  src="/playground_assets/ef73d5ccc3ea3321755dc4a656250d307dceede8-200h.png"
                  className="home-image87"
                />
              </header>
            </div>
          </main>
          <section className="home-copyright">
            <span className="home-text84">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
