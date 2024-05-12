import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          where compassion, expertise, and innovation converge for your well-being. With 11 years of service,
           we prioritize exceptional patient care, cutting-edge treatments, and community engagement.
            Our team of dedicated professionals, from doctors to support staff, ensures your comfort and health at every step.
             Rooted in integrity and empathy, we provide warm, respectful care, guided by the latest medical advancements.
              As an integral part of our community, we foster health education and wellness initiatives.
               Trust us for compassionate, expert healthcare that values every heartbeat. Thank you for choosing us.
                Together, we journey towards your optimal health.
          </p>
          <p>We are all in 2024!</p>

          <p>This is a prototype of our project.</p>
         
          <p>
          We provide the best facilities in town
         
          </p>
         
          <p>Lorem ipsum dolor sit amet!</p>
         
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;