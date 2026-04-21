import './style/Order.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';

function Order (){
    return (

<section className='track-sec py-5'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-5 col-md-8 col-12'>
                        <div className='track-card' data-aos="zoom-in">
                            <h2 className='track-title text-center'>Track Your Order</h2>
                            <p className='text-center track-sub'>
                                Enter your details below to check the status of your artifact.
                            </p>
                            
                            <form className='track-form'>
                                <div className='mb-3'>
                                    <label className='form-label'>Order ID</label>
                                    <input type="text" className='form-control' placeholder='order-id' required />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Email Address</label>
                                    <input type="email" className='form-control' placeholder="Enter your email" required />
                                </div>

                                <div className='mb-4'>
                                    <label className='form-label'>Phone Number</label>
                                    <input type="tel" className='form-control' placeholder="Enter your phone number" required />
                                </div>

                                <button type="submit" className='btn track-btn'>
                                    Track Order <i className="bi bi-geo-alt-fill ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Order;