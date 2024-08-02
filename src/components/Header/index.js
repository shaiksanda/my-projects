import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">S</p>
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/shaik-sandani-basha-85a44724b/">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/shaiksanda">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
