
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";  
function About() {

  const services = [
    {
      title: "Product Distribution",
      description: "We provide a wide range of premium [products] tailored to meet the needs of our clients.",
      imgSrc: "/about1.png"
    },
    {
      title: "Consulting Services",
      description: "We offer expert consulting to help businesses optimize their operations and maximize efficiency.",
      imgSrc: "/about2.png"
    },
    {
      title: "Sustainability Initiatives",
      description: "We are dedicated to eco-friendly practices, ensuring our products and processes are environmentally responsible.",
      imgSrc: "/about3.png"
    },
    {
      title: "Featured Title",
      description: "Paragraph of text beneath the heading to explain the heading.",
      imgSrc: "/about4.png"
    }
  ];

  const cards = [
    { id: 1, title: "Creative Design", subheadline: "Bringing ideas to life", text: "We transform concepts into visually stunning designs.", img: "/main1.png" },
    { id: 2, title: "Modern Tech", subheadline: "Innovation at its best", text: "Stay ahead with cutting-edge technology solutions.", img: "/main2.png" },
    { id: 3, title: "Future Ready", subheadline: "Solutions for tomorrow", text: "Prepare your business for the future with our expertise.", img: "/main3.png" },
    { id: 4, title: "Smart Solutions", subheadline: "Innovate your future", text: "Smart, efficient, and cost-effective solutions for all.", img: "/main4.png" },
    { id: 5, title: "Creative Vision", subheadline: "Think beyond limits", text: "Unlock your creative potential with our expertise.", img: "/main5.png" },
    { id: 6, title: "Modern Lifestyle", subheadline: "Bringing tech to life", text: "Embrace technology for a seamless living experience.", img: "/main6.png" },
  ];
  
  return (
    <>
    
    <div className="py-3" >
      <img className='img-fluid py-5 px-4 ' src='/mainbg.png' ></img>
    </div>
    <div className="container my-5 w-100">
      <div className="row align-items-center">
        {/* Text Section - Left */}
        <div className="col-md-6 text-md-start text-center">
          <h2 className="fw-bold">About RUX</h2>
          <p className="">RUX is a wholesale company that believes in quality and quantity at an affordable price. Our products are made with the finest ingredients right here in the state of Illinois and work just as great as top leading brands, we sell our products all over the USA. </p>
        <p>RUX is a company with the main goal to produce the best cleaning products with competitive prices, our goal is to provide the best cleaning chemical solutions with the best safety and environmental standards to offer the best products for our customers. We offer wholesale prices for any type of industries restaurants, hospitality, retail stores, warehouses or if you are an independent distributor you can use your own business label contact us for more information and ordering RUX cleaning products.</p>
          <button className="btn btn-sm btn-outline-secondary btn-css rounded-pill mx-1">Learn More</button>
        </div>

        {/* Image Section - Right */}
        <div className="col-md-6">
          <img
            src="https://i.pinimg.com/736x/b0/14/f5/b014f535f40d32ab4c5477d20dfdfced.jpg"
            alt="Illustration"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
        <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">OUR CORE SERVICES INCLUDE</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col">
          <h2 className="pb-2">Our Core Services Include</h2>
          <p className="text-body-secondary">
            From Strategic Consulting to Sustainable Product Distribution – We
            Deliver Tailored Solutions That Drive Results.
          </p>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            {services.map((service, index) => (
              <div key={index} className="col d-flex flex-column gap-2">
                <div className="feature-icon d-flex align-items-center justify-content-center rounded-circle border border-dark" style={{ width: "100px", height: "100px" }}>
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="img-fluid"
                    style={{ maxWidth: "80%", maxHeight: "80%" }}
                  />
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  {service.title}
                </h4>
                <p className="text-body-secondary">{service.description}</p>
              </div>
            ))}  
          </div>  
        </div>  
      </div>    
    </div>    
 
   
      <div className="swiper-container">
      <h2 className="pb-2 border-bottom">What our customers are saying about our products !</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="big-card d-flex align-items-center">
                  <img src={card.img} className="big-card-img ms-3" alt={card.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
    
  )
}

export default About
