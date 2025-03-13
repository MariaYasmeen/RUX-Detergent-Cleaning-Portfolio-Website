import React from 'react';

function DNetwork() {
  const imageSources = [
    "https://i.pinimg.com/736x/75/74/3e/75743e0a3e54e1934864cb29e27b8cd3.jpg",
    "https://i.pinimg.com/736x/12/51/8e/12518e8510491973baf9c758b7d920c7.jpg",
    "https://i.pinimg.com/736x/ac/ff/ff/acffff17e6e6e0fdd56dd83ca8b6eb44.jpg",
    "https://i.pinimg.com/736x/21/02/4c/21024c2dfe13f7a057dd0539f4faded7.jpg"
  ];

  return (
    <>
  <div
  className="px-4 my-5 text-center"
  style={{
    backgroundImage: "url('/bgimg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div className="container ">
    <h1 className="display-6 fw-bold">Join Our Dealers Network</h1>
    <div className="col-lg-9 mx-auto">
      <p className="lead mb-1">
        Are you passionate about delivering high-quality products to your
        customers? Do you want to be part of a trusted network that values
        excellence, innovation, and customer satisfaction? Join our Dealers
        Network today and become a key player in bringing premium products to
        markets worldwide!
      </p>
    </div>
  </div>
</div>

<div className="px-5 py-4" id="custom-cards">
  <h2 className="pb-2">Why Join Us?</h2>

  <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 py-4">
    {[1, 2, 3, 4].map((num, index) => (
      <div className="col" key={index}>
        <div
          className="card card-cover h-100 overflow-hidden text-bg-dark rounded-3 shadow-sm"
          style={{ backgroundImage: `url('${imageSources[index]}')`, minHeight: "250px" }}
        >
          <div className="d-flex flex-column h-100 p-4 text-shadow-1">
            
            {/* SVG Icons for Each Card */}
            {num === 1 && (
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path fill="white" d="M17 11H7C6.45 11 6 11.45 6 12V18C6 18.55 6.45 19 7 19H17C17.55 19 18 18.55 18 18V12C18 11.45 17.55 11 17 11ZM12 16C11.45 16 11 15.55 11 15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16ZM15 11V8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8V11H7V8C7 5.24 9.24 3 12 3C14.76 3 17 5.24 17 8V11H15Z" />
              </svg>
            )}
            {num === 2 && (
              <svg  width="60" height="60" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="black"/>
              <path fill="white" d="M15 7V6H9V7L7 9V11H17V9L15 7ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13ZM12 19C9.79 19 8 17.21 8 15C8 12.79 9.79 11 12 11C14.21 11 16 12.79 16 15C16 17.21 14.21 19 12 19Z"/>
            </svg>
            
            )}
            {num === 3 && (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="black"/>
            <path fill="white" d="M19 5H14L7 9H5C4.45 9 4 9.45 4 10V14C4 14.55 4.45 15 5 15H7L14 19H19C19.55 19 20 18.55 20 18V6C20 5.45 19.55 5 19 5ZM12 14H10V10H12V14ZM16 14H14V10H16V14Z"/>
          </svg>
           )}
            {num === 4 && (
           <svg  width="60" height="60"  viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
           <circle cx="12" cy="12" r="12" fill="black"/>
           <path fill="white" d="M17 3H7V5H17V3ZM19 5H5C4.45 5 4 5.45 4 6V11C4 13.21 5.79 15 8 15H9V17H8V19H16V17H15V15H16C18.21 15 20 13.21 20 11V6C20 5.45 19.55 5 19 5ZM6 11V7H8V13C6.9 13 6 12.1 6 11ZM18 11C18 12.1 17.1 13 16 13V7H18V11Z"/>
         </svg>
          )}

            <h5 className="mt-auto fw-bold">
              {num === 1 && "Exclusive Access to Premium Products"}
              {num === 2 && "Competitive Pricing and Margins"}
              {num === 3 && "Marketing and Sales Support"}
              {num === 4 && "Strong Brand Reputation"}
            </h5>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-2">
                <small>
                  {num === 1
                    ? "Gain access to our wide range of high-quality, innovative products that are in demand across various industries."
                    : num === 2
                    ? "Enjoy competitive pricing structures and attractive profit margins designed to help your business thrive."
                    : num === 3
                    ? "Benefit from our comprehensive marketing materials, training programs, and sales tools to help you succeed."
                    : "Partner with a brand known for its reliability, quality, and commitment to excellence."}
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



  <div class="row g-5">
    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>

 {/* start form ode fo9rm here */}
      
    
      <nav class="blog-pagination" aria-label="Pagination">
        <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
        <a class="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
      </nav>

    </div>

    <div class="col-md-4">
      <div class="position-sticky" style={{top: "2rem"}}>
        <div class="p-4 mb-3 bg-body-tertiary rounded">
           <article class="blog-post">
        <h4 class="display-7 link-body-emphasis mb-1">Who Can Join?</h4>
        <div class=" px-1" id="featured-3">
    
        <div class="d-flex flex-column flex-md-row   align-items-center ">
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Have a proven track record in sales and distribution.</h6>
          </div>
        <small class="opacity-50 text-nowrap">now</small>
      </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Share our commitment to quality and customer satisfaction.</h6>
         </div>
        <small class="opacity-50 text-nowrap">3d</small>
      </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Are eager to grow their business with a trusted partner.</h6>
         </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Operate in regions where we are looking to expand our presence.

.</h6>
         </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </a>
  </div>
</div>

  </div>
        <hr />
        </article>
        </div>


       
         </div>
    </div>
  </div>


    </>
  );
}

export default DNetwork;
