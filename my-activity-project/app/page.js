

"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActivityPage = () => {
  const activities = [
    {
      category: "Related Activities",
      items: [
        {
          title: "Learn how to make a good cup of coffee",
          price: "Free",
          location: "Tampines",
          host: "Omar Shaddiq",
          image: "/images/Image.png",
        },
        {
          title: "Learn how to make your own clay jewelry",
          price: "$20",
          location: "Tampines",
          host: "Leila Lim",
          image: "/images/Image.png",
        },
        {
          title: "Learn how to play the guitar!",
          price: "From $20",
          location: "Tampines",
          host: "Kenny Chua",
          image: "/images/Image.png",
        },
        {
          title: "Learn how to roast coffee beans",
          price: "Free",
          location: "Tampines",
          host: "Omar Shaddiq",
          image: "/images/Image.png",
        },
      ],
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div style={{ padding: "60px" }}>
     <div className="flex flex-col lg:flex-row lg:space-x-4">
  {/* Image Gallery Section */}
  <div
    className="lg:w-3/4 p-4"
    style={{ marginTop: "25px" ,marginLeft:"20px",}}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {/* First Column (1 image, no extra space below) */}
      <div className="col-span-1">
        <img
          src="/images/5 1.png"
          alt="Activity 1"
          className="w-full h-full object-cover rounded-lg"
          style={{ height: "424x", maxHeight: "424px" }}
        />
      </div>

      {/* Second Column (2 images stacked with adjusted heights) */}
      <div className="col-span-1 space-y-4">
        <div>
          <img
            src="/images/1 1.png"
            alt="Activity 2"
            className="w-full object-cover rounded-lg"
            style={{ height: "auto", maxHeight: "203px" }}
          />
        </div>
        <div>
          <img
            src="/images/1 1.png"
            alt="Activity 3"
            className="w-full object-cover rounded-lg"
            style={{ height: "auto", maxHeight: "203px" }}
          />
        </div>
      </div>

      {/* Third Column (2 images stacked with adjusted heights) */}
      <div className="col-span-1 space-y-4">
        <div>
          <img
            src="/images/2 1.png"
            alt="Activity 4"
            className="w-full object-cover rounded-lg"
            style={{ height: "auto", maxHeight: "203px" }}
          />
        </div>
        <div>
          <img
            src="/images/2 1.png"
            alt="Activity 5"
            className="w-full object-cover rounded-lg"
            style={{ height: "auto", maxHeight: "203px" }}
          />
        </div>
      </div>
    </div>
  </div>

  {/* Sidebar Section */}
  <div
    className="lg:w-1/4 p-4 bg-gray-300 rounded-lg  mt-10"
    style={{ height: "auto", maxHeight: "400px" }}
  >
    <h2 className="text-xl font-semibold text-center">Who's going?</h2>
    <div className="flex justify-center items-center mt-4">
      <div className="flex space-x-2">
        <span className="h-8 w-8 rounded-full bg-red-500"></span>
        <span className="h-8 w-8 rounded-full bg-red-500"></span>
        <span className="h-8 w-8 rounded-full bg-red-500"></span>
        <span className="h-8 w-8 rounded-full bg-red-500"></span>
        <span className="h-8 w-8 rounded-full bg-red-500"></span>
      </div>
    </div>
    <div className="pt-6 space-y-4">
      {/* Goers and Price Section - Side by Side */}
      <div className="flex space-x-6 justify-between">
        {/* Goers Section */}
        <div>
          <p className="text-sm text-gray-500">Goers</p>
          <h1 className="text-3xl font-semibold">5</h1>
        </div>

        {/* Price Section */}
        <div>
          <p className="text-lg font-bold text-red-500">Price</p>
          <h1 className="text-2xl font-semibold text-black">SGD $30</h1>
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="space-y-2 mt-4">
      <button className="w-full bg-black text-white py-2 rounded-lg">JOIN</button>
      <button className="w-full bg-black text-white py-2 rounded-lg">Chat</button>
      <button className="w-full bg-black text-white py-2 rounded-lg">Tip/Pay</button>
    </div>
  </div>

</div>


      <div className="w-full lg:w-1/2 mx-auto lg:mx-6 p-6 space-y-4" >
  {/* Header */}
  <div className="pt-6">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
      Make Earrings & Necklaces!
    </h1>
    <p className="text-sm text-gray-500">
      with <span className="text-blue-500">@hellobrandonbright</span>
    </p>
  </div>

  {/* Image Gallery */}
  <div className="pt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <p className="font-bold">Activity date & Time</p>
        <p>23/06/2024, 12:00pm</p>
      </div>
      <div>
        <p className="font-bold">Location</p>
        <p className="text-blue-500">Compassvale range road</p>
      </div>
    </div>
  </div>

  {/* Details Section */}
  <div className="pt-4 space-y-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <div>
        <p className="font-bold">Location</p>
        <p className="text-blue-500">Compassvale range road</p>
      </div>
      <div>
        <p className="font-bold">Age Requirement</p>
        <p>12 - 60</p>
      </div>
      <div>
        <p className="font-bold">Duration</p>
        <p>3 hours, 30 mins</p>
      </div>
    </div>
  </div>
  <hr className="border-t-2 border-black" />

  {/* About Section */}
  <div className="p-2 space-y-2" >
    <h2 className="text-lg sm:text-xl font-semibold" style={{margin:"2px",padding:"5px",}}>About the Activity</h2>
    <p style={{margin:"2px",padding:"5px",}}>Body text for describing why this product is simply a must-buy.</p>
    <h2 className="text-lg sm:text-xl font-semibold" style={{margin:"2px",padding:"5px",}}>Highlights</h2>
    <p style={{margin:"2px",padding:"5px",}}>Body text for describing why this product is simply a must-buy.</p>
    <h2 className="text-lg sm:text-xl font-semibold" style={{margin:"2px",padding:"5px",}}>Things to Note</h2>
    <p style={{margin:"2px",padding:"5px",}}>Body text for describing why this product is simply a must-buy.</p>
  </div>
</div>


      {/* Reviews Section */}

      <div className="p-6" style={{ width: "70%", height: "auto" }}>
  <div className="p-6 max-w-4xl space-y-4 ">
    {/* Heading Section */}
    <div className="flex justify-between mb-4 flex-col sm:flex-row">
      <h1 className="text-xl font-semibold">Reviews</h1>
      <h1 className="text-xl font-semibold mt-4 sm:mt-0">Leave a Review</h1>
    </div>

    {/* User Info Section */}
    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 bg-gray-200 rounded-lg p-4 border border-gray-300">
      {/* User Avatar */}
      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 sm:mb-0">
        <span className="text-white text-2xl font-bold">J</span>
      </div>
      
      {/* User Name and Review */}
      <div>
        <p className="font-bold text-lg">Jerry</p>
        <p className="text-gray-600">
          Body text for describing why this product is simply a must-buy.
        </p>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-3 gap-4 mt-2">
          <img
            src="/images/5 1.png"
            alt="Review image 1"
            className="w-full h-full object-cover rounded-lg"
            style={{ height: "123px" }}
          />
          <img
            src="/images/5 1.png"
            alt="Review image 2"
            className="w-full h-full object-cover rounded-lg"
            style={{ height: "123px" }}
          />
          <img
            src="/images/5 1.png"
            alt="Review image 3"
            className="w-full h-full object-cover rounded-lg"
            style={{ height: "123px" }}
          />
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Related Activities */}
      <div className="pt-4" style={{ maxWidth: "1500px" }}>
  {activities.map((category, index) => (
    <div key={index}>
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          marginLeft: "50px",
          marginBottom: "10px",
        }}
      >
        {category.category}
      </h2>

      <Slider {...settings}>
        {category.items.map((item, i) => (
          <div key={i} style={{ marginRight: "10px" }}> {/* Added gap between cards */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                marginLeft: "50px",
                width: "100%",
                maxWidth: "383px",
                height: "auto",
                gap: "5px",
                marginBottom: "20px", // margin between items
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={383}
                height={234}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                <p>{item.price}</p>
                <p>Location: {item.location}</p>
                <p style={{ fontWeight: "bold" }}>{item.host}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  ))}
</div>



<footer
  style={{
    color: "black",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // Ensure that items wrap when screen size is smaller
  }}
>
  {/* Social Media Icons */}
  <div
    style={{
      display: "flex",
      gap: "10px",
      flexWrap: "wrap", // Wrap the social icons when the screen size is smaller
      justifyContent: "center", // Center icons when wrapped
    }}
  >
    <a href="#" style={{ color: "black", fontSize: "20px" }}>
      <FaFacebook />
    </a>
    <a href="#" style={{ color: "black", fontSize: "20px" }}>
      <FaLinkedin />
    </a>
    <a href="#" style={{ color: "black", fontSize: "20px" }}>
      <FaYoutube />
    </a>
    <a href="#" style={{ color: "black", fontSize: "20px" }}>
      <FaInstagram />
    </a>
  </div>

  {/* Terms & Conditions */}
  <div
    style={{
      textAlign: "center", // Center the link on smaller screens
      marginTop: "10px", // Add spacing for mobile
    }}
  >
    <a
      href="#"
      style={{
        color: "gray",
        fontSize: "14px",
        textDecoration: "none",
        transition: "color 0.3s",
      }}
    >
      Terms & Conditions
    </a>
  </div>
</footer>

<style jsx>
  {`
    /* Media Queries for responsiveness */
    @media screen and (max-width: 768px) {
      footer {
        flex-direction: column; /* Stack elements vertically */
        text-align: center; /* Center text on smaller screens */
      }
      .social-icons {
        justify-content: center; /* Center the social media icons */
      }
      .terms {
        margin-top: 10px; /* Add spacing to the Terms link */
      }
    }

    @media screen and (max-width: 480px) {
      footer {
        padding: 10px; /* Add more padding for small screens */
      }
      .social-icons a {
        font-size: 18px; /* Reduce the size of social icons on smaller screens */
      }
      .terms a {
        font-size: 12px; /* Reduce font size for the Terms link */
      }
    }
  `}
</style>

    </div>
  );
};

export default ActivityPage;

