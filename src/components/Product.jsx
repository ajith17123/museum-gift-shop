import './style/Product.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import prod1 from '../assets/Images/m1.jpg';
import prod2 from '../assets/Images/m2.jpg';
import prod3 from '../assets/Images/m3.jpg';
import prod4 from '../assets/Images/m4.jpg';
import prod5 from '../assets/Images/m5.jpg';
import prod6 from '../assets/Images/m6.png';
import gift1 from '../assets/Images/g1.jpg';
import gift2 from '../assets/Images/g2.webp';
import gift3 from '../assets/Images/g3.jpg';

function Product () {
    return (

<>

   {/* {ProductSection} */}
   
    <section className='prod-sec py-5'>
         <div className='container'>
           <h2 className='section-title'>Our Special Products</h2>
              <div className='row g-4'>
                    
               <div className='col-md-4 col-12' data-aos="fade-up">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={prod1} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Maharaja Of Jodhpur Guns</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>4500</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
               <div className='col-md-4 col-12'data-aos="fade-up" data-aos-delay="200">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={prod2} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Umaid Bhavan Palace</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>590</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
               <div className='col-md-4 col-12' data-aos="fade-up" data-aos-delay="400">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={prod3} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Elephant Shaped Notepads</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>780</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
              </div>

              <div className='row g-4 py-5'>
                    
               <div className='col-md-4 col-12' data-aos="fade-up">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={prod4} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Elephant In Rajasthani Dress</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>2090</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
               <div className='col-md-4 col-12'data-aos="fade-up" data-aos-delay="200">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={prod5} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Cuff Antique Design with Precious Stone</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>1750</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
               <div className='col-md-4 col-12' data-aos="fade-up" data-aos-delay="400">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={prod6} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Peacock Feather Notebook</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>950</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
              </div>

         </div>
    </section>

    {/* {Gift Section} */}

     <section className='gift-sec py-5' id='gift'>
         <div className='container'>
           <h2 className='section-title'>Our Gifts</h2>
              <div className='row g-4'>
                    
               <div className='col-md-4 col-12' data-aos="fade-up">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={gift1} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Crystal Touch Lamp</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>1999</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
               <div className='col-md-4 col-12'data-aos="fade-up" data-aos-delay="200">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={gift2} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>BigSmall Magsip Bottle</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>999</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
               <div className='col-md-4 col-12' data-aos="fade-up" data-aos-delay="400">
                    <div className='card'>
                        <div className='card-img'>
                             <img src={gift3} alt="gift" />
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Nap Ninja Neck Pillow</h5>
                            <span className='prod-price'><i class="bi bi-currency-rupee"></i>1999</span>
                        </div>
                        <button className='prod-buy'>Add to Cart</button>
                    </div>
               </div>
   
              </div>

         </div>
    </section>

</>

    )
}

export default Product;