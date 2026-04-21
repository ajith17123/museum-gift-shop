import './style/About.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';

function About() {
    return (

    <>
            {/* About Section */}

            <section className="about-sec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center" data-aos="fade-up">
                            <h2 className="section-title">About Our Heritage</h2>
                            <p className="about-para">
                                Heritage Artifacts is dedicated to preserving the timeless beauty of ancient craftsmanship. 
                                We curate a unique collection of authentic artifacts and rare masterpieces that tell the 
                                stories of ancient civilizations, bringing history directly into your modern home.
                            </p>
                            <p className="about-para">
                                Every piece in our gallery is hand-selected for its historical significance and artistic 
                                integrity. Our mission is to bridge the gap between the glorious past and the present, 
                                ensuring that the legacy of our ancestors continues to inspire future generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}

            <section className="contact-sec py-5" id="cont">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Get In Touch</h2>
                    <div className="row g-4">
                     
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="contact-card p-4">
                                <form className="contact-form">
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" placeholder="Your Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-control" rows="5" placeholder="How Can We Help?" required></textarea>
                                    </div>
                                    <button type="submit" className="auth-btn">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6" data-aos="fade-left">
                            <div className="map-container h-100">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.490852!3d12.9538477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfad3685100e2b!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713635000000!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, borderRadius: '15px', minHeight: '400px' }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About;