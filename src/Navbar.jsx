import { useState } from "react"
import { links, social } from "./data"
import logo from "./logo.svg"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true)
  const toggleLink = () => {
    setShowLinks(pre => !pre)
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} />
          <button className="nav-toggle" onClick={toggleLink}>
            <FaBars />
          </button>
        </div>

        <div className={`links-container ${showLinks ? "show-container" : ""}`}>
          <ul className="nav-links">
            {links.map(link => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(socialLink => {
            const { id, url, icon } = socialLink
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
