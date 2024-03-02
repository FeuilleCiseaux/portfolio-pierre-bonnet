import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  heading,
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  footer,
  footerLinks,
  footerLinkItem,
  footerLinkText,
  mediaLogo
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/parcours" className={navLinkText}>Parcours</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

      <footer className={footer}>
        <div>
            <ul className={footerLinks}>
              <li className={footerLinkItem}>
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="..\images\LinkedIn_logo.png"
                  className={mediaLogo}
                />
                <a className={footerLinkText} href='https://www.linkedin.com/in/pierre-bonnet-b15b2b22b/'>LinkedIn</a>
              </li>
              <li className={footerLinkItem}>
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="..\images\github_logo.png"
                  className={mediaLogo}
                />
                <a className={footerLinkText} href='https://github.com/FeuilleCiseaux'>Github</a>
              </li>
              <li className={footerLinkItem}>
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="..\images\gmail_logo.png"
                  className={mediaLogo}
                />
                <a className={footerLinkText} href='pierre.bonnet2001@gmail.com'>email</a>
              </li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout