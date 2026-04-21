import './style/Nav.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';


function Nav () {
    return (

        <section className='nav-sec'>
            <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Heritage Artifacts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Our Products</Link>
        </li>
        <li class="nav-item">
          <NavHashLink className="nav-link" to="/product#gift">Gifts</NavHashLink>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/about">About-Us</Link>
        </li>
        <li class="nav-item">
          <NavHashLink className="nav-link" to="/about#cont">Get In Touch</NavHashLink>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/order">Track Order</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn-nav" type="submit">Search</button>
      </form>
      <div class="nav-item">
          <Link className="nav-link" to="/"><i class="bi bi-cart4"></i></Link>
        </div>
        <li class="nav-item">
          <button className='log-nav'><Link className="nav-link" to="/login">Login<i class="bi bi-person-fill-add"></i></Link></button>
        </li>
    </div>
  </div>
</nav>
        </section>
       

    )
}

export default Nav;