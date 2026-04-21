import './style/Login.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';

function Login() {
    return (

   <section className="login-sec py-5">
            <div className="container">
                <h2 className='section-title'>Join Our Artifacts</h2>
                <div className="row g-5 justify-content-center">
                    
                    <div className="col-md-5" data-aos="fade-right">
                        <div className="auth-card">
                            <h2 className="auth-title">Welcome Back</h2>
                            <p className="auth-subtitle">Login</p>
                            <form className="auth-form">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Full Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email Address" required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <button className="auth-btn">Login</button>
                            </form>
                            <p className="auth-switch">Don't have an account? <Link to="#">Sign In</Link></p>
                        </div>
                    </div>

                    <div className="col-md-5" data-aos="fade-left">
                        <div className="auth-card">
                            <h2 className="auth-title">New Journey</h2>
                            <p className="auth-subtitle">Create your account</p>
                            <form className="auth-form">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Full Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email Address" required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Create Password" required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" required />
                                </div>
                                <button className="auth-btn">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <Link className="back-home" to="/"><i className="bi bi-arrow-left"></i> Back to Home</Link>
                </div>
            </div>
        </section>


    )
}

export default Login;