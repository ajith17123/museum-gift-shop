import '../components/style/Home.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import Hero1 from '../assets/Images/1.jpg';
import Hero2 from '../assets/Images/2.jpg';
import Hero3 from '../assets/Images/3.jpg';
import Hero4 from '../assets/Images/4.jpg';
import Hero5 from '../assets/Images/5.jpg';
import prod1 from '../assets/Images/Cat Cushion.jpg';
import prod2 from '../assets/Images/table runner.jpg';
import prod3 from '../assets/Images/umberlla.jpg';

function Home() {
    return (
      
     <>

        {/* // {HeroSection} */}

  <section className='hero-section'>
       <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Hero1} className="d-block w-100" alt="artifact"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Hero2} className="d-block w-100" alt="artifact"/>
    </div>
    <div className="carousel-item">
      <img src={Hero3} className="d-block w-100" alt="artifact"/>
    </div>
    <div className="carousel-item">
      <img src={Hero4} className="d-block w-100" alt="artifact"/>
    </div>
    <div className="carousel-item">
      <img src={Hero5} className="d-block w-100" alt="artifact"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </section>      

 {/* {Herotext section} */}

 <section className='hero-sec py-5'>
     <div className='container hero-container'>
        <h1 className='hero-head' data-aos="fade-up">Timeless Treasures, <br/> Brought to Your Home.</h1>
        <p className='hero-para' data-aos="fade-up" data-aos-delay="200">
            Explore our curated collection of authentic artifacts and rare masterpieces 
            that tell the stories of ancient civilizations.
        </p>
        <div className='hero-btns' data-aos="fade-up" data-aos-delay="400">
            <button className='hero-but primary-but'>Explore Collection</button>
        </div>
     </div>
 </section>

 {/* {ProductSection} */}

 <section className='prod-sec py-5'>
      <div className='container'>
        <h2 className='section-title'>Our Products</h2>
           <div className='row g-4'>
                 
            <div className='col-md-4 col-12' data-aos="fade-up">
                 <div className='card'>
                     <div className='card-img'>
                          <img src={prod1} alt="gift" />
                     </div>
                     <div className='card-body'>
                         <h5 className='card-title'>Jamini Cat Shaped Cushion</h5>
                         <span className='prod-price'><i class="bi bi-currency-rupee"></i>1399</span>
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
                         <h5 className='card-title'>Jamini Egypt 4 Seater Table Runner</h5>
                         <span className='prod-price'><i class="bi bi-currency-rupee"></i>1250</span>
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
                         <h5 className='card-title'>Kothalo Print Umberlla L</h5>
                         <span className='prod-price'><i class="bi bi-currency-rupee"></i>800</span>
                     </div>
                     <button className='prod-buy'>Add to Cart</button>
                 </div>
            </div>

           </div>
      </div>
 </section>

 {/* {AboutSection} */}

 <section className='about-sec'>
       <div className='container'>
             <div className='text-center'>
                  <h2 className='section-title' data-aos="fade-up">Who We Are</h2>
                  <p className='about-para' data-aos="fade-up" data-aos-delay="200">
                    "At Heritage Artifacts, we believe that every piece of history carries a soul. 
                Our journey began with a passion for preserving the exquisite craftsmanship 
                of ancient civilizations. From rare sculptures to timeless home decor, we curate 
                each artifact to bring a touch of history, elegance, and culture into your modern living spaces. 
                We are more than just a gallery; we are the bridge between the glorious past and your home."
                  </p>
             </div>
       </div>
 </section>


</>
    )
}

export default Home;