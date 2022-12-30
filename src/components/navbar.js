import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <img
        alt="Planical7012"
        src={props.BrandingLogo}
        className="navbar-branding-logo"
      />
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <span className="navbar-link nav-link">JungleMap</span>
          <span className="nav-link">F2F Game</span>
          <span className="nav-link">About Us</span>
          <span className="nav-link">FAQs</span>
        </div>
        <div className="get-started navbar-get-started">
          <span className="navbar-text">
            <span>Mint (coming soon)</span>
            <br></br>
          </span>
        </div>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar-image1"
          />
          <div id="close-mobile-menu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links1">
          <a
            href="https://www.pandasfight.club/#JungleMap"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-link4 nav-link"
          >
            JungleMap
          </a>
          <span className="nav-link navbar-link5">F2F</span>
          <span className="nav-link navbar-link6">FAQs</span>
          <span className="nav-link navbar-link7">About Us</span>
        </div>
        <div className="get-started">
          <span className="navbar-text3">Mint</span>
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
  )
}

Navbar.defaultProps = {
  image_alt: 'image',
  image_src1: '/playground_assets/pfc-1500h.png',
  image_src: '/playground_assets/hamburger-200h.png',
  image_alt1: 'image',
  rootClassName: '',
  BrandingLogo: '/playground_assets/pfc-1500h.png',
}

Navbar.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar
