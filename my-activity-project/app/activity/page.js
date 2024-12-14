

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
          image: "/images/5 1.png",
        },
        {
          title: "Learn how to make your own clay jewelry",
          price: "$20",
          location: "Tampines",
          host: "Leila Lim",
          image: "/images/5 1.png",
        },
        {
          title: "Learn how to play the guitar!",
          price: "From $20",
          location: "Tampines",
          host: "Kenny Chua",
          image: "/images/5 1.png",
        },
        {
          title: "Learn how to roast coffee beans",
          price: "Free",
          location: "Tampines",
          host: "Omar Shaddiq",
          image: "/images/5 1.png",
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
      <div className=" flex flex-col lg:flex-row">
        {/* img Gallery Section */}
        <div className="lg:w-3/4 p-4" style={{ width:"857px",height: "424px",top:"151px", margin:"25px", }} >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {/* First Column (1 img, no extra space below) */}
            <div className="col-span-1">
              <img
                src="/images/5 1.png"
                alt="Activity 1"
                className="w-full h-full object-cover rounded-lg"
                style={{ height: "424px",width:"100%" }} /* Adjust the height */
              />
            </div>

            {/* Second Column (2 imagesstacked with adjusted heights) */}
            <div className="col-span-1 space-y-2">
              <div>
                <img
                  src="/images/1 1.png"
                  alt="Activity 2"
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    height: "203px",
                    width:"100%",
                  }} /* Adjust height to match first column */
                />
              </div>
              <div>
                <img
                  src="/images/1 1.png"
                  alt="Activity 3"
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    height: "203px",
                    width:"100%",
                  }} /* Adjust height to match first column */
                />
              </div>
            </div>

            {/* Third Column (2 imagesstacked with adjusted heights) */}
            <div className="col-span-1 space-y-2">
              <div>
                <img
                  src="/images/2 1.png"
                  alt="Activity 4"
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    height: "203px",
                    width:"100%",
                  }} /* Adjust height to match first column */
                />
              </div>
              <div>
                <img
                  src="/images/2 1.png"
                  alt="Activity 5"
                  className="w-full object-cover rounded-lg"
                  style={{
                    height: "203px",
                    width:"100%",
                  }} /* Adjust height to match first column */
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="lg:w-1/4 p-4 bg-gray-300 rounded-lg shadow-md mt-2 lg:mt-0" style={{
                    height: "391px",
                    width:"420px",
                    marginTop:"45px",
                  }}>
          <h2 className="text-xl font-semibold text-center">{"Who's going?"}</h2>
          <div className="flex justify-center items-center mt-2 mx-15">
            <div className="flex space-x-2  mx-10">
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
            <button className="w-full bg-black text-white py-2 rounded-lg">
              JOIN
            </button>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Chat
            </button>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Tip/Pay
            </button>
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

  {/* img Gallery */}
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

      <div className="p-6" style={{ width: "768px",
height: "323px",


}}>
     
       
        <div className="p-6 max-w-4xl  space-y-4">
          
        <div className="flex justify-between  mb-4">
     
     <h1 className="text-xl font-semibold">Reviews</h1>
     <h1 className="text-xl font-semibold">
       Leave a Review
     </h1>
      </div>
          {/* User Info */}
          <div className="flex  space-x-4 bg-gray-200 rounded-lg" style={{ width:"764",height:"254px",border:"1px solid #ddd",}}>
            {/* User Avatar */}
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center" style={{margin:"25px",padding:"10px",}}>
              <span className="text-white text-2xl font-bold" >J</span>
            </div>
            {/* User Name and Review */}
            <div style={{margin:"25px",}}>
              <p className="font-bold text-lg">Jerry</p>
              <p className="text-gray-600">
                Body text for describing why this product is simply a must-buy.
              </p>
              <div className="grid grid-cols-3 gap-4">
            <img
              src="/images/5 1.png"
              alt="Review img 1"
              className="w-full h-full object-cover rounded-lg"
              style={{ width:"123px",height:"123px",margin:"5px"}}
            />
            <img
              src="/images/5 1.png"
              alt="Review img 2"
              className="w-full h-full object-cover rounded-lg"
              style={{ width:"123px",height:"123px",margin:"5px"}}
            />
            <img
              src="/images/5 1.png"
              alt="Review img 3"
              className="w-full h-full object-cover rounded-lg"
              style={{ width:"123px",height:"123px",margin:"5px"}}
            />
          </div>
            </div>
          </div>

          {/* img Gallery */}
        
        </div>
      </div>

      {/* Related Activities */}
      <div className="pt-6" style={{ widows:"10px",}}>
       
        {activities.map((category, index) => (
          <div key={index}>
            <h2 style={{
            fontWeight: "bold",
            fontSize: "24px",
            marginLeft: "50px",
            marginBottom: "10px",
          }}>{category.category}</h2>

            <Slider {...settings}>
          {category.items.map((item, i) => (
            <div key={i}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginLeft: "50px",
                  width:"383px",
                  height:"377px",
                  gap:"5px",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={383}
                  height={234}
                  style={{ objectFit: "cover" }}
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
          // backgroundColor: "black",
          color: "black",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Social Media Icons */}
        <div style={{ display: "flex", gap: "10px" }}>
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
        <div>
          <a
            href="#"
            style={{
              color: "gray",
              fontSize: "14px",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            // onMouseEnter={(e) => (e.target.style.color = "white")}
            // onMouseLeave={(e) => (e.target = "gray")}
          >
            Terms & Conditions
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ActivityPage;



















