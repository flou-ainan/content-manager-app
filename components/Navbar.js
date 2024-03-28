import Link from "next/link"
export default function Navbar(props){

    return(
        <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <h1>Content Manager APP</h1>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <input className="input is-rounded" type="email" placeholder="Search" />
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <Link 
                className="navbar-item is-active is-size-5 has-text-weight-semibold"
                href="/"
              >
                Home
              </Link>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Examples
              </a>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a>
              <Link
                className="navbar-item is-size-5 has-text-weight-semibold"
                href="/about" 
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}