import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" id="id-nav">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item home" title="Linnea Luuppala" activeClassName={`home-active`}>
              Linnea Luuppala
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about" activeClassName={`active`}>
                About
              </Link>
              <Link className="navbar-item" to="/publications" activeClassName={`active`}>
                Publications
              </Link>
              <Link className="navbar-item" to="/cv" activeClassName={`active`}>
                CV
              </Link>
              <Link className="navbar-item" to="/my-phd-project" activeClassName={`active`}>
                My PhD Project
              </Link>
              <Link className="navbar-item" to="/events" activeClassName={`active`}>
                Events
              </Link>
              <Link className="navbar-item" to="/blog" activeClassName={`active`}>
                Blog
              </Link>
              <Link className="navbar-item" to="/contact" activeClassName={`active`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
