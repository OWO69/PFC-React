import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import FAQ from '../components/f-a-q'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PFC</title>
        <meta property="og:title" content="PFC" />
      </Helmet>
      <nav className="home-navbar">
        <a href="#top" className="home-link">
          <img
            src="/playground_assets/pfc-200h.png"
            className="home-branding-logo"
          />
        </a>
        <div className="home-nav-content">
          <div className="home-nav-links">
            <a href="#JungleMap" className="home-link01 nav-link">
              JungleMap
            </a>
            <a href="#Pew Pew" className="home-link02 nav-link">
              F2F Game
            </a>
            <a href="#About Us" className="home-link03 nav-link">
              About Us
            </a>
            <a href="#FAQs" className="home-link04 nav-link">
              FAQs
            </a>
          </div>
          <div className="get-started home-get-started">
            <span className="home-text">
              <span>Mint (coming soon)</span>
              <br></br>
            </span>
          </div>
          <div id="open-mobile-menu" className="home-hamburger get-started">
            <img
              alt="image"
              src="/playground_assets/hamburger-200h.png"
              className="home-image"
            />
          </div>
        </div>
        <div id="mobile-menu" className="home-mobile-menu">
          <div className="home-branding">
            <div className="home-container01"></div>
            <div id="close-mobile-menu" className="home-container02">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="home-nav-links1">
            <a href="#JungleMap" className="home-link05 nav-link">
              JungleMap
            </a>
            <a href="#Pew Pew" className="home-link06 nav-link">
              <span>F2F Game</span>
              <br></br>
            </a>
            <a href="#About Us" className="home-link07 nav-link">
              About Us
            </a>
            <a href="#FAQs" className="home-link08 nav-link">
              FAQs
            </a>
          </div>
          <div className="get-started">
            <span className="home-text005">Mint</span>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
          ></DangerousHTML>
        </div>
      </nav>
      <section id="top" className="home-section">
        <div className="home-gallery gallery">
          <div className="home-container03 scrollbar">
            <img
              alt="image"
              src="/playground_assets/7-600h.png"
              className="home-image001 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/8-300h.png"
              className="home-image002 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/6-300h.png"
              className="home-image003 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/5-300h.png"
              className="home-image004 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/4-300h.png"
              className="home-image005 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/3-300h.png"
              className="home-image006 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/9-300h.png"
              className="home-image007 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/2-300h.png"
              className="home-image008 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/11-300h.png"
              className="home-image009 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/1-300h.png"
              className="home-image010 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/10-300h.png"
              className="home-image011 scroll-item"
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
                <a
                  href="https://discord.gg/gV2P4JxjFd"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link09"
                >
                  <div className="home-get-started2 button">
                    <span className="home-text006">Join the waitlist</span>
                  </div>
                </a>
                <a
                  href="https://discord.gg/gV2P4JxjFd"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link10"
                >
                  <div className="home-get-started3 button">
                    <span className="home-text007">
                      Join the waitlist (but in grey)
                    </span>
                  </div>
                </a>
              </div>
            </main>
          </div>
          <div className="home-image012">
            <img
              alt="image"
              src="/playground_assets/faceon__1_-removebg-preview-900h.png"
              className="home-image013"
            />
          </div>
          <div className="home-image014">
            <img
              alt="image"
              src="/playground_assets/faceon__1_-removebg-preview-900h.png"
              className="home-image015"
            />
          </div>
        </div>
      </section>
      <section className="home-section01">
        <header className="home-header01">
          <h2 className="home-text008">
            What&apos;s cooking in the Panda kitchen?
          </h2>
          <span className="home-text009">Panda stuff</span>
        </header>
        <section className="home-note">
          <div className="home-image016">
            <iframe
              src="https://www.youtube.com/embed/CqMpy1PIxNE"
              className="home-iframe"
            ></iframe>
          </div>
          <div className="home-content01">
            <div className="home-main1">
              <div className="home-caption1">
                <span className="home-section02 section-head">Sneak peek</span>
              </div>
              <div className="home-heading01">
                <h2 className="section-heading">First Looks</h2>
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
            <a
              href="https://discord.gg/gV2P4JxjFd"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <div className="home-get-started4 button">
                <span className="home-text010">Join Discord</span>
              </div>
            </a>
          </div>
        </section>
        <section className="home-note1">
          <div className="home-image017">
            <img
              alt="image"
              src="/playground_assets/bkg%20%5B8%5D-1200w.png"
              className="home-image018"
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
                    <div className="home-icon02">
                      <svg viewBox="0 0 1024 1024" className="home-icon03">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                    </div>
                    <p className="home-label">Battle Pass</p>
                  </div>
                  <div className="home-mark1">
                    <div className="home-icon05">
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                    </div>
                    <p className="home-label1">OG Skin Drops</p>
                  </div>
                  <div className="home-mark2">
                    <div className="home-icon08">
                      <svg viewBox="0 0 1024 1024" className="home-icon09">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                    </div>
                    <p className="home-label2">Limited edition streamer Drip</p>
                  </div>
                </div>
              </main>
            </main>
            <a
              href="https://discord.gg/gV2P4JxjFd"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              <div className="home-get-started5 button">
                <span className="home-text011">
                  Did I tell you about our lord and savior black&amp;whitelist
                </span>
              </div>
            </a>
          </div>
        </section>
        <div className="home-gallery1 gallery">
          <div className="home-container04 scrollbar">
            <img
              alt="image"
              src="/playground_assets/valorant-600h.png"
              className="home-image019 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2017-10-02-18-10-11-600h.png"
              className="home-image020 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/25e2140d-0e11-446f-8379-c83b8afce590-700h.jpg"
              className="home-image021 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/ss_120f1a89fe4ccccb3e835314665945f4f7ced658.1920x1080-600h.jpg"
              className="home-image022 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screen%20shot%202018-01-05%20at%2012.22.24%20pm-600h.png"
              className="home-image023 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/qf91enynlq3hlgtkmbon-600h.png"
              className="home-image024 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/image-600h.png"
              className="home-image025 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/dota-allstars-version-v6-78b-600h.jpg"
              className="home-image026 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bwa093n7r8581-600h.jpg"
              className="home-image027 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/fall-guys-gedraenge-screenshot-600h.jpg"
              className="home-image028 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/fall-guys-gedraenge-screenshot-600h.jpg"
              className="home-image029 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/fall-guys-gedraenge-screenshot-600h.jpg"
              className="home-image030 scroll-item"
            />
          </div>
        </div>
        <section className="home-note2">
          <div className="home-content03">
            <div className="home-main3">
              <div className="home-caption3"></div>
              <div className="home-heading05">
                <h2 className="section-heading">What&apos;s in a Game?</h2>
                <p className="section-description">
                  <span>
                    What makes us forget the sun and skies and get hooked on the
                    lies.
                  </span>
                  <br></br>
                  <span>
                    Is it the cosmetics collection that hurls a breath of dragon
                    fire, or is it the race till last tier. Is it the explosions
                    or the quest for domination. Is it the flex and the city or
                    a parkouring car hitting a football. Is it a spiritual panda
                    on journey to conquest the . What is it that sets the heart
                    racing and yearning for adventure and excitement in these 0s
                    and 1s
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-gallery2 gallery">
          <div className="home-container05 scrollbar">
            <img
              alt="image"
              src="/playground_assets/screen%20shot%202017-09-19%20at%204.01.23%20pm-600h.png"
              className="home-image031 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2017-09-30-20-00-10-600h.png"
              className="home-image032 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-04-01-11-31-35-876_com.ea.gp.fifamobile-600h.png"
              className="home-image033 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-04-01-08-48-35-116_com.ea.gp.fifamobile-600h.png"
              className="home-image034 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-06-02-18-44-35-600h.png"
              className="home-image035 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-05-20-16-48-56-814_com.eamobile.nbajam_row_wf-600h.png"
              className="home-image036 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-01-02_23-52-4375-600h.png"
              className="home-image037 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-04-11-19-48-42-209_com.netease.g104na.gb-600h.jpg"
              className="home-image038 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-04-12-09-50-23-529_com.ninemgames.football-600h.jpg"
              className="home-image039 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-04-11-14-56-16-300_com.tencent.ig-600h.jpg"
              className="home-image040 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-04-11-14-56-16-300_com.tencent.ig-600h.jpg"
              className="home-image041 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-04-11-14-56-16-300_com.tencent.ig-600h.jpg"
              className="home-image042 scroll-item"
            />
          </div>
        </div>
        <section className="home-note3">
          <div className="home-content04">
            <div className="home-main4">
              <div className="home-caption4"></div>
              <div className="home-heading07">
                <h2 className="section-heading">Where to?</h2>
                <p className="section-description">
                  From the flash yetiis to the IOs to the ios to the mobile and
                  consoles.  from the symbians to the symbiotes, is the medium
                  the message or the message a hand of god crossplatforming as a
                  dancing deadpool on a zombie beach and a too cool for pool
                  sexy shark. Guess the humankind is doomed to make every device
                  a gaming device be it a AI fridge or a toy tesla that runs
                  exclusively on tropical treetops
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-gallery3 gallery">
          <div className="home-container06 scrollbar">
            <img
              alt="image"
              src="/playground_assets/screenshot_20220312-175758-600h.png"
              className="home-image043 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-04-15-22-27-17-907_com.distinctivegames.hockey2019-600h.jpg"
              className="home-image044 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-06-27-21-32-26-598_com.netmarble.mherosgb-600h.jpg"
              className="home-image045 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/poker-1000w.png"
              className="home-image046 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/img-20220618-wa0002-600h.jpg"
              className="home-image047 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/img_9923-600h.jpg"
              className="home-image048 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-03-28-20-45-55-488_com.baklabs.taxi.two-600h.png"
              className="home-image049 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/7-600h.png"
              className="home-image050 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/efootball-600h.jpeg"
              className="home-image051 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/ec71cbda-4ef5-4e9a-9a30-0ea78a92a93b-600h.jpg"
              className="home-image052 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/ec71cbda-4ef5-4e9a-9a30-0ea78a92a93b-600h.jpg"
              className="home-image053 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/ec71cbda-4ef5-4e9a-9a30-0ea78a92a93b-600h.jpg"
              className="home-image054 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/ec71cbda-4ef5-4e9a-9a30-0ea78a92a93b-600h.jpg"
              className="home-image055 scroll-item"
            />
          </div>
        </div>
        <section className="home-note4">
          <div className="home-content05">
            <div className="home-main5">
              <div className="home-caption5"></div>
              <div className="home-heading09">
                <h2 className="section-heading">Where&apos;s the fun?</h2>
                <p className="section-description">
                  Is it the half time own goals, nutmegging a goalie, being a
                  cashcow of a cabbie, or riding with your homies, or is it
                  stampeding your poking laughter or stomping the corner
                  curlers, is it strategizing civilizations or 442 formations.
                  Or is it the ride and coasting your time while you reach your
                  destination. We often set the goals as much as the games
                  objectives enhancing the human experience through what is
                  basically an extension of emotions &amp; imagination
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-gallery4 gallery">
          <div className="home-container07 scrollbar">
            <img
              alt="image"
              src="/playground_assets/maxresdefault%20%5B28%5D-700h.jpg"
              className="home-image056 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-10-06-20-08-29-528_com.netease.g104na.gb-600h.jpg"
              className="home-image057 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/unnamed%20%5B2%5D-600h.png"
              className="home-image058 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_20220206-173206-600h.png"
              className="home-image059 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2020-04-19-15-17-34-953_com.netease.g104na.gb-600h.jpg"
              className="home-image060 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-03-01-15-26-47-334_com.ea.gp.fifamobile-600h.png"
              className="home-image061 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-02-13-14-11-09-947_com.ea.gp.fifamobile-600h.png"
              className="home-image062 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2018-09-27-10-00-47-600h.png"
              className="home-image063 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/screenshot_2019-02-26-21-29-06-392_com.ea.gp.fifamobile-600h.png"
              className="home-image064 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/20191214_133825789-600h.jpeg"
              className="home-image065 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/20191214_133825789-600h.jpeg"
              className="home-image066 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/20191214_133825789-600h.jpeg"
              className="home-image067 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/20191214_133825789-600h.jpeg"
              className="home-image068 scroll-item"
            />
          </div>
        </div>
        <section className="home-note5">
          <div className="home-content06">
            <div className="home-main6">
              <div className="home-caption6"></div>
              <div className="home-heading11">
                <h2 className="section-heading">Small Studio, Big Ambitions</h2>
                <p className="section-description">
                  We noobs and wannabe pros at PFC are here to build games on
                  our experience of what constitutes the most thrilling,
                  exciting, fun experience 
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="Pew Pew" className="home-section04">
        <h2 className="home-text016">
          <span>PEW PEW POW POW</span>
          <br></br>
        </h2>
        <div className="home-features">
          <header className="feature feature-active home-feature">
            <h3 className="home-text019">Bambooska</h3>
            <p className="home-text020">ERC 1155s</p>
          </header>
          <header className="feature home-feature1">
            <h3 className="home-text021">Babubshka</h3>
            <p className="home-text022">Limited Edition</p>
          </header>
          <header className="feature home-feature2">
            <h3 className="home-text023">Streamer Snipers</h3>
            <p className="home-text024">Ultra Rare Pro Max 1off Editions</p>
          </header>
        </div>
        <div className="home-note6">
          <div className="home-content07">
            <main className="home-main7">
              <h2 className="home-heading13">Tradable GunSkins</h2>
              <p className="home-paragraph6">
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
              <p className="home-text027">Learn more -&gt;</p>
            </div>
          </div>
          <div className="home-image069">
            <img
              alt="image"
              src="/playground_assets/wrappedzooka%20%5B1%5D-1200w.png"
              className="home-image070"
            />
          </div>
        </div>
        <div className="home-gallery5 gallery">
          <div className="home-container08 scrollbar">
            <img
              alt="image"
              src="/playground_assets/bambooka-200h.png"
              className="home-image071 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B11%5D-200h.png"
              className="home-image072 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/shotgun-200h.png"
              className="home-image073 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B1%5D-200h.png"
              className="home-image074 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/binigun-200h.png"
              className="home-image075 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B10%5D-200h.png"
              className="home-image076 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bk47-200h.png"
              className="home-image077 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B12%5D-200h.png"
              className="home-image078 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooshka-200h.png"
              className="home-image079 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B4%5D-200h.png"
              className="home-image080 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image081 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B9%5D-200h.png"
              className="home-image082 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooka-200h.png"
              className="home-image083 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B31%5D-200h.png"
              className="home-image084 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/shotgun-200h.png"
              className="home-image085 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B22%5D-200h.png"
              className="home-image086 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/binigun-200h.png"
              className="home-image087 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B32%5D-200h.png"
              className="home-image088 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bk47-200h.png"
              className="home-image089 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B37%5D-200h.png"
              className="home-image090 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooshka-200h.png"
              className="home-image091 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B7%5D-200h.png"
              className="home-image092 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image093 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B12%5D-200h.png"
              className="home-image094 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/bambooshka-200h.png"
              className="home-image095 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B6%5D-200h.png"
              className="home-image096 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image097 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B27%5D-200h.png"
              className="home-image098 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image099 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B8%5D-200h.png"
              className="home-image100 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image101 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B18%5D-200h.png"
              className="home-image102 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image103 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pow%20%5B2%5D-200h.png"
              className="home-image104 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image105 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B23%5D-200h.png"
              className="home-image106 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/wrappedzooka-200h.png"
              className="home-image107 scroll-item"
            />
            <img
              alt="image"
              src="/playground_assets/pew%20%5B13%5D-200h.png"
              className="home-image108 scroll-item"
            />
          </div>
        </div>
      </section>
      <section id="JungleMap" className="home-section05">
        <div className="home-image109">
          <img
            alt="image"
            src="/playground_assets/bkg%20%5B19%5D-1500w.png"
            className="home-image110"
          />
        </div>
        <div className="home-content08">
          <div className="home-caption7"></div>
          <div className="home-heading14">
            <div className="home-header03">
              <h2 className="section-heading">JungleMap🎄</h2>
            </div>
            <div className="home-accordion">
              <div
                data-role="accordion-container"
                className="home-element accordion-element"
              >
                <div className="home-details">
                  <span className="section-head">Bambooverse begins</span>
                  <span className="home-text028">Jan 23</span>
                  <span data-role="accordion-content" className="home-text029">
                    we will first build a community of around 10k people on both
                    twitter and discord and be giving whitelists to first and
                    foremost the gaming audience of our partner streamer
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
              <span className="section-head">Bambooverse Blooms</span>
              <div
                data-role="accordion-container"
                className="home-element1 accordion-element"
              >
                <div className="home-details01">
                  <span className="home-text030">Q1 2023</span>
                  <span data-role="accordion-content" className="home-text031">
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
                  className="home-icon13"
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
                  <span className="home-text032">Q2 2023</span>
                  <span data-role="accordion-content" className="home-text033">
                    we&apos;ll be building a Panda gaming studio from the funds
                    raised and add more members to the team to build more games
                    and add more skins and events as time passes to build even
                    more quality product and make a name in both web2 and web3
                    worlds
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
              <div
                data-role="accordion-container"
                className="home-element3 accordion-element"
              >
                <div className="home-details03">
                  <span className="home-text034">Funds Split</span>
                  <span data-role="accordion-content" className="home-text035">
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
                  className="home-icon17"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="JungleMap" className="home-section09">
        <div className="home-image111">
          <img
            alt="image"
            src="/playground_assets/bkg%20%5B18%5D-1500w.png"
            className="home-image112"
          />
        </div>
        <div className="home-content09">
          <div className="home-caption8"></div>
          <div className="home-heading16">
            <div className="home-header04">
              <h2 className="section-heading">Alpha Pass🧧</h2>
            </div>
            <div className="home-accordion1">
              <div
                data-role="accordion-container"
                className="home-element4 accordion-element"
              >
                <div className="home-details04">
                  <span className="home-section10 section-head">
                    Single Holder
                  </span>
                  <span className="home-text036">UNO Panda</span>
                  <span data-role="accordion-content" className="home-text037">
                    <span>📺Adfree experience forever</span>
                    <br></br>
                    <br></br>
                    <span>🪙</span>
                    <span>
                      Airdrops, 1 limited launch edition bazooka skin, 2 rare
                      random weapon skins, 1 armory update accessories
                    </span>
                    <br className="home-text043"></br>
                    <br></br>
                    <span>🪓</span>
                    <span>Battle pass (q2) to PFC</span>
                    <br className="home-text047"></br>
                    <br></br>
                    <span>⚽</span>
                    <span>
                      World Cup mode and exclusive holder only lobbies
                    </span>
                    <br className="home-text051"></br>
                    <br></br>
                    <span>🥷</span>
                    <span>
                      Future mobi games skins and accessories
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className="home-icon19"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <span className="home-section11 section-head">panda express</span>
              <div
                data-role="accordion-container"
                className="home-element5 accordion-element"
              >
                <div className="home-details05">
                  <span className="home-text055">2-9 Pandas</span>
                  <span data-role="accordion-content" className="home-text056">
                    <span>⛩️Early access to upcoming games</span>
                    <br className="home-text058"></br>
                    <br></br>
                    <span>🎁</span>
                    <span>
                      Raffles and giveaways of one off designs
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className="home-icon21"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <span className="home-section12 section-head">whale</span>
              <div
                data-role="accordion-container"
                className="home-element6 accordion-element"
              >
                <div className="home-details06">
                  <span className="home-text062">10+ Pandas</span>
                  <span data-role="accordion-content" className="home-text063">
                    <span>💝Pre launch exclusive in game items</span>
                    <br className="home-text065"></br>
                    <br></br>
                    <span>🎀</span>
                    <span>Rare items in Collabs with other communities</span>
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className="home-icon23"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className="home-element7 accordion-element"
              >
                <div className="home-details07">
                  <span className="home-section13 section-head">
                    panda presidente
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text069">69 Pandas</span>
                  <span data-role="accordion-content" className="home-text070">
                    <span>
                      🪅President Pass- add assets &amp; ideas ranging from
                      mechanics to maps and Easter eggs
                    </span>
                    <br></br>
                    <br></br>
                    <span>🪄</span>
                    <span>
                      Order 42- executive access to command game designer to
                      design assets
                    </span>
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className="home-icon25"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section14">
        <header className="home-header05">
          <header className="home-left">
            <span className="section-head">
              Priced at a Popcorn per pop, a pizza per piece
            </span>
            <h2 className="section-heading">At a Glance</h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph7 section-description">
              We&apos;ll be guiding our fam through the experience of ordering a
              game battle pass via crypto. While f2p at it&apos;s essence, we
              are monetizing by adding special perks, drops and a limited
              edittion world cup mode for those that support the founding of our
              studio
            </p>
          </div>
        </header>
        <main className="home-cards">
          <section className="home-card">
            <div className="home-icon27">
              <img
                alt="image"
                src="/playground_assets/group%201316-1200w.png"
                className="home-icon28"
              />
            </div>
            <main className="home-content10">
              <h1 className="home-header06">Price</h1>
              <p className="home-description">0.0069 ETH (~$10)</p>
            </main>
          </section>
          <section className="home-card01">
            <div className="home-icon29">
              <img
                alt="image"
                src="/playground_assets/group%201314-200h.png"
                className="home-icon30"
              />
            </div>
            <main className="home-content11">
              <h1 className="home-header07">Launch</h1>
              <p className="home-description01">TBD</p>
            </main>
          </section>
          <section className="home-card02">
            <div className="home-icon31">
              <img
                alt="image"
                src="/playground_assets/group%201317-1200w.png"
                className="home-icon32"
              />
            </div>
            <main className="home-content12">
              <h1 className="home-header08">Blockchain</h1>
              <p className="home-description02">Polygon</p>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section16">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header09">
            <h2 className="section-heading">Blockchain </h2>
            <p className="home-description03 section-description">
              Polyon is our starting choice of sidechain. As we&apos;re only
              using the chain for fund raise and not long term asset holding it
              seems the best decision to hold our Initial sale on a low gas
              platform like platform before pivoting to even better experiences
            </p>
          </div>
          <div className="home-buttons1">
            <a
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
            >
              <div className="home-get-started6 button">
                <span className="home-text076">Opensea</span>
              </div>
            </a>
            <a
              href="https://youtu.be/yTkgsTmDzLQ"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link14"
            >
              <div className="home-book-demo button">
                <span className="home-text077">Minting Demo (youtube)</span>
              </div>
            </a>
          </div>
        </main>
      </section>
      <section className="home-section17">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main id="About Us" className="home-pricing">
          <header className="home-header10">
            <header className="home-left3">
              <h2 className="section-heading home-heading20">About Us</h2>
            </header>
            <div className="home-right1"></div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details08">
                  <div className="home-header11">
                    <label className="home-name">Muller23#1095</label>
                    <div className="home-pricing01">
                      <h1 className="home-price">Project Lead</h1>
                    </div>
                  </div>
                  <p className="home-description04">
                    Electronics Engineer, Digital Nomad, Gamer
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/muller23-300w.gif"
                    className="home-image113"
                  />
                </div>
                <div className="home-buy-details">
                  <a
                    href="https://tracker.gg/valorant/profile/riot/muller23%231095/overview?season=all"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link15"
                  >
                    <div className="home-buy button">
                      <span className="home-text078">
                        <span>Tracker GG</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/gV2P4JxjFd"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link16"
                  >
                    <div className="home-buy01 button">
                      <span className="home-text081">
                        <span>Discord</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details09">
                  <div className="home-header12">
                    <label className="home-name1">Lupu</label>
                    <div className="home-pricing02">
                      <h1 className="home-price1">Artist</h1>
                    </div>
                  </div>
                  <p className="home-description05">
                    Painter turned digital artist
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/lupu-300w.gif"
                    className="home-image114"
                  />
                </div>
                <div className="home-buy-details1">
                  <a
                    href="https://www.deviantart.com/lupubaciu23"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link17"
                  >
                    <div className="home-buy02 button">
                      <span className="home-text084">
                        <span>Deviant Art</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/abhFFXxXrX"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link18"
                  >
                    <div className="home-buy03 button">
                      <span className="home-text087">
                        <span>Discord</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details10">
                  <div className="home-header13">
                    <label className="home-name2">BigBird</label>
                    <div className="home-pricing03">
                      <span className="home-price2">GameDev</span>
                    </div>
                  </div>
                  <p className="home-description06">
                    An educator in the space of web3 and an indie game designer
                    for over 10 years
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/bigbird-300w.gif"
                    className="home-image115"
                  />
                </div>
                <div className="home-buy-details2">
                  <a
                    href="https://store.steampowered.com/curator/39218809"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link19"
                  >
                    <div className="home-buy04 button">
                      <span className="home-text090">
                        <span>Steam Store</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://youtube.com/channel/UCXgxW8ppgHI7_zvsS4O0Ltw"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link20"
                  >
                    <div className="home-buy05 button">
                      <span className="home-text093">
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
                <div className="home-details11">
                  <div className="home-header14">
                    <label className="home-name3">Butch</label>
                    <div className="home-pricing04">
                      <h1 className="home-price3">WebDev</h1>
                    </div>
                  </div>
                  <p className="home-description07">
                    A weekday workhorse and weekend waster
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/butch-300w.gif"
                    className="home-image116"
                  />
                </div>
                <div className="home-buy-details3">
                  <a
                    href="https://github.com/OWO69"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21"
                  >
                    <div className="home-buy06 button">
                      <span className="home-text096">
                        <span>GitHub</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://www.layer1loopy.club/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link22"
                  >
                    <div className="home-buy07 button">
                      <span className="home-text099">
                        <span>Previously On</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan4">
                <div className="home-details12">
                  <div className="home-header15">
                    <label className="home-name4">LimoWerner</label>
                    <div className="home-pricing05">
                      <h1 className="home-price4">Solidity</h1>
                    </div>
                  </div>
                  <p className="home-description08">
                    If Code is law, Limo is lawman
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/limowerner-300w.gif"
                    className="home-image117"
                  />
                </div>
                <div className="home-buy-details4">
                  <a
                    href="https://goerli.etherscan.io/address/0xFdfF7121cFb3B889afe92865F36CA7a5A7e23221"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link23"
                  >
                    <div className="home-buy08 button">
                      <span className="home-text102">
                        <span>Goerli</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://mumbai.polygonscan.com/address/0xFdfF7121cFb3B889afe92865F36CA7a5A7e23221"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link24"
                  >
                    <div className="home-buy09 button">
                      <span className="home-text105">
                        <span>Polygonscan</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan5">
                <div className="home-details13">
                  <div className="home-header16">
                    <label className="home-name5">****</label>
                    <div className="home-pricing06">
                      <span className="home-price5">Streamer</span>
                    </div>
                  </div>
                  <p className="home-description09">________________</p>
                  <img
                    alt="image"
                    src="/playground_assets/streamer-300w.gif"
                    className="home-image118"
                  />
                </div>
                <div className="home-buy-details5">
                  <div className="home-buy10 button">
                    <span className="home-text108">
                      <span>Twitch</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-buy11 button">
                    <span className="home-text111">
                      <span>Insta</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </main>
            <main className="home-plans2">
              <div className="home-plan6">
                <div className="home-details14">
                  <div className="home-header17">
                    <label className="home-name6">Purrsian</label>
                    <div className="home-pricing07">
                      <h1 className="home-price6">MemeTeam</h1>
                    </div>
                  </div>
                  <p className="home-description10">
                    Jpeg collector, digital trash cleaner, moody moderator
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/purrsian-300w.gif"
                    className="home-image119"
                  />
                </div>
                <div className="home-buy-details6">
                  <a
                    href="https://discord.gg/J7xQm2NyQC"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link25"
                  >
                    <div className="home-buy12 button">
                      <span className="home-text114">
                        <span>Discord</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan7">
                <div className="home-details15">
                  <div className="home-header18">
                    <label className="home-name7">bonappetitjovi</label>
                    <div className="home-pricing08">
                      <h1 className="home-price7">MemeTeam</h1>
                    </div>
                  </div>
                  <p className="home-description11">
                    <span>
                      If Neymar has million fans, then I&apos;m one of them.
                    </span>
                    <br></br>
                    <span>If Neymar has one fan, then I&apos;m the one.</span>
                    <br className="home-text120"></br>
                    <span>
                      If Neymar has no fans, that means I don&apos;t exist
                    </span>
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/bonappetitjovi-300w.gif"
                    className="home-image120"
                  />
                </div>
                <div className="home-buy-details7">
                  <a
                    href="https://discord.gg/NQjph5e7aS"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link26"
                  >
                    <div className="home-buy13 button">
                      <span className="home-text122">Discord</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-plan8">
                <div className="home-details16">
                  <div className="home-header19">
                    <label className="home-name8">MrCoolio</label>
                    <div className="home-pricing09">
                      <span className="home-price8">MemeTeam</span>
                    </div>
                  </div>
                  <p className="home-description12">
                    Peace was never a top10 option
                  </p>
                  <img
                    alt="image"
                    src="/playground_assets/mrcoolio-300w.gif"
                    className="home-image121"
                  />
                </div>
                <div className="home-buy-details8">
                  <a
                    href="https://twitter.com/pandasfightclub"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link27"
                  >
                    <div className="home-buy14 button">
                      <span className="home-text123">
                        <span>Twitter</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </main>
      </section>
      <section className="home-section18">
        <header className="home-header20">
          <header className="home-left4">
            <span className="section-head">
              Review us or roast us and get featured
            </span>
            <h2 className="home-heading21 section-heading">
              Tweets with Beats
            </h2>
          </header>
          <div className="home-right2"></div>
        </header>
        <main className="home-cards1">
          <div className="home-container09">
            <section className="home-card03">
              <div className="home-stars">
                <svg viewBox="0 0 1024 1024" className="home-icon33">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon35">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon37">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content13">
                <p className="home-quote">&quot;What the fk&quot;</p>
                <div className="home-author">
                  <img
                    alt="image"
                    src="/playground_assets/9-300h.png"
                    className="home-avatar"
                  />
                  <div className="home-details17">
                    <h1 className="home-author01">Skrrrrrrr</h1>
                    <label className="home-position">Twitter</label>
                  </div>
                </div>
              </main>
            </section>
            <section className="home-card04">
              <div className="home-stars1">
                <svg viewBox="0 0 1024 1024" className="home-icon39">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon41">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon43">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon45">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content14">
                <p className="home-quote1">&quot;Cool Stuff&quot;</p>
                <div className="home-author02">
                  <img
                    alt="image"
                    src="/playground_assets/2-300h.png"
                    className="home-avatar1"
                  />
                  <div className="home-details18">
                    <h1 className="home-author03">DubStepForever</h1>
                    <label className="home-position1">IRL</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div className="home-container10">
            <section className="home-card05">
              <div className="home-stars2">
                <svg viewBox="0 0 1024 1024" className="home-icon47">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content15">
                <p className="home-quote2">&quot;Not A MOBA&quot;</p>
                <div className="home-author04">
                  <img
                    alt="image"
                    src="/playground_assets/7-600h.png"
                    className="home-avatar2"
                  />
                  <div className="home-details19">
                    <h1 className="home-author05">MOBAlover69</h1>
                    <label className="home-position2">Discord</label>
                  </div>
                </div>
              </main>
            </section>
            <section className="home-card06">
              <div className="home-stars3">
                <svg viewBox="0 0 1024 1024" className="home-icon49">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon51">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content16">
                <p className="home-quote3">&quot;Do Me&quot;</p>
                <div className="home-author06">
                  <img
                    alt="image"
                    src="/playground_assets/5-300h.png"
                    className="home-avatar3"
                  />
                  <div className="home-details20">
                    <h1 className="home-author07">DMmeGiveaways</h1>
                    <label className="home-position3">Reddit</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div className="home-container11">
            <section className="home-card07">
              <div className="home-stars4">
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
                <svg viewBox="0 0 1024 1024" className="home-icon61">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content17">
                <p className="home-quote4">
                  &quot;Better than Mona Lisa if that painting were a game&quot;
                </p>
                <div className="home-author08">
                  <img
                    alt="image"
                    src="/playground_assets/4-300h.png"
                    className="home-avatar4"
                  />
                  <div className="home-details21">
                    <h1 className="home-author09">YoMomma</h1>
                    <label className="home-position4">DMs</label>
                  </div>
                </div>
              </main>
            </section>
            <section className="home-card08">
              <div className="home-stars5">
                <svg viewBox="0 0 1024 1024" className="home-icon63">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon65">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon67">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon69">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon71">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className="home-content18">
                <p className="home-quote5">&quot;It;s Okay&quot;</p>
                <div className="home-author10">
                  <img
                    alt="image"
                    src="/playground_assets/10-300h.png"
                    className="home-avatar5"
                  />
                  <div className="home-details22">
                    <h1 className="home-author11">Simona</h1>
                    <label className="home-position5">Insta</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text126">View more</p>
        </div>
      </section>
      <section className="home-section20">
        <header className="home-header21">
          <span className="section-head">Across the interwebz</span>
          <h2 className="home-heading22 section-heading">Featured On</h2>
        </header>
        <main className="home-cards2">
          <section className="home-card09">
            <main className="home-content19">
              <header className="home-header22">
                <h1 className="home-header23">Rarity Tools</h1>
              </header>
              <img
                alt="image"
                src="/playground_assets/1_d1vhtbpalfshxeofveiz5w-200h.png"
                className="home-image122"
              />
              <div className="home-button">
                <a
                  href
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link28"
                >
                  <p className="home-text127">Check It Out-&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card10">
            <main className="home-content20">
              <header className="home-header24">
                <h1 className="home-header25">Tech Crunch</h1>
              </header>
              <img
                alt="image"
                src="/playground_assets/1200px-techcrunch_logo.svg-200h.png"
                className="home-image123"
              />
              <div className="home-button1">
                <a
                  href
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link29"
                >
                  <p className="home-text128">Read -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card11">
            <main className="home-content21">
              <header className="home-header26">
                <h1 className="home-header27">Rarity Sniper</h1>
              </header>
              <img
                alt="image"
                src="/playground_assets/raritysniper-200h.webp"
                className="home-image124"
              />
              <div className="home-button2">
                <a
                  href
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link30"
                >
                  <p className="home-text129">Scroll-&gt;</p>
                </a>
              </div>
            </main>
          </section>
        </main>
      </section>
      <section id="FAQs" className="home-section22">
        <header className="home-header28">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading23 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion2">
          <FAQ rootClassName="f-a-q-root-class-name"></FAQ>
        </main>
      </section>
      <section id="Downloads" className="home-section24">
        <main className="home-content22">
          <header className="home-header29">
            <h2 className="home-heading24 section-heading">
              Download links (coming soon)
            </h2>
            <div className="home-buttons2">
              <div className="home-i-o-s button">
                <img
                  alt="image"
                  src="/playground_assets/apple-200w.png"
                  className="home-icon73"
                />
                <span className="home-text130">Download for iOS</span>
              </div>
              <a
                href="https://drive.google.com/file/d/1m0__KYJk7SZaUAQ1F5IHjDryIc3TciU6/view"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link31"
              >
                <div className="home-android button">
                  <img
                    alt="image"
                    src="/playground_assets/android-200h.png"
                    className="home-icon74"
                  />
                  <span className="home-text131">Download for Android</span>
                </div>
              </a>
            </div>
          </header>
          <img
            alt="image"
            src="/playground_assets/bkg%20%5B9%5D-1200w.png"
            className="home-image125"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-buy15 button">
          <span className="home-text132">-&gt;</span>
          <span className="home-text133">Links &amp; Socials</span>
        </div>
        <div className="home-content23">
          <main className="home-main-content">
            <div className="home-content24">
              <header className="home-categories">
                <a
                  href="https://discord.gg/gV2P4JxjFd"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link32"
                >
                  <img
                    alt="image"
                    src="/playground_assets/discord-logo-200h.png"
                    className="home-image126"
                  />
                </a>
                <a
                  href="https://twitter.com/pandasfightclub"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link33"
                >
                  <img
                    alt="image"
                    src="/playground_assets/twitter-logo.svg-200h.png"
                    className="home-image127"
                  />
                </a>
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link34"
                >
                  <img
                    alt="image"
                    src="/playground_assets/ef73d5ccc3ea3321755dc4a656250d307dceede8-200h.png"
                    className="home-image128"
                  />
                </a>
              </header>
            </div>
          </main>
          <section className="home-copyright">
            <span className="home-text134">
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
