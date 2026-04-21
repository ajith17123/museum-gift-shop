import './style/Footer.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';


function Footer () {
    return (

        <footer className='foot-sec py-5'>
            <div className='container'>
                <div className='row g-4'>
                  
                    <div className='col-lg-3 col-md-6'>
                        <h4 className='foot-title'>Heritage Artifacts</h4>
                        <p className='foot-para'>Bringing the soul of ancient history and timeless elegance to your modern living spaces.</p>
                        <div className='social-icons'>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6'>
                        <h5 className='foot-sub-title'>Shop</h5>
                        <ul className='foot-links list-unstyled'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><NavHashLink to="/about#cont">Contact</NavHashLink></li>
                            <li><Link to="/">Login</Link></li>
                        </ul>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <h5 className='foot-sub-title'>Quick Links</h5>
                        <ul className='foot-links list-unstyled'>
                            <li><Link to="/">Help Center</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <h5 className='foot-sub-title'>Stay Updated</h5>
                        <p className='foot-para'>Subscribe for latest arrivals and museum-quality updates.</p>
                        <div className='input-group mt-3'>
                            <input type="email" className='form-control' placeholder="Email address" />
                            <button className='btn btn-sub'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr className='mt-5' style={{borderColor: '#D4AF37'}} />
                <div className='text-center'>
                    <p className='copy-text'>&copy; Heritage Artifacts. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
