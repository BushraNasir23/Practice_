"use client";
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const activities = [
    {
      category: "Creative Workshops!",
      items: [
        { title: "Learn how to make a good cup of coffee", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make your own clay jewelry", price: "$20", location: "Tampines", host: "Leila Lim", image: "/images/Image.png" },
        { title: "Learn how to play the guitar!", price: "From $20", location: "Tampines", host: "Kenny Chua", image: "/images/Image.png" },
        { title: "Learn how to roast coffee beans", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make a good cup of coffee", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make your own clay jewelry", price: "$20", location: "Tampines", host: "Leila Lim", image: "/images/Image.png" },
    ]
      ,
    },
    {
      category: "Sports",
      items: [
        { title: "Learn how to make a good cup of coffee", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make your own clay jewelry", price: "$20", location: "Tampines", host: "Leila Lim", image: "/images/Image.png" },
        { title: "Learn how to play the guitar!", price: "$20", location: "Tampines", host: "Kenny Chua", image: "/images/Image.png" },
        { title: "Learn how to roast coffee beans", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make a good cup of coffee", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make your own clay jewelry", price: "$20", location: "Tampines", host: "Leila Lim", image: "/images/Image.png" },
    
    ],
    },
    {
      category: "Wellness",
      items: [
        { title: "Learn how to make a good cup of coffee", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make your own clay jewelry", price: "$20", location: "Tampines", host: "Leila Lim", image: "/images/Image.png" },
        { title: "Learn how to play the guitar!", price: "$20", location: "Tampines", host: "Kenny Chua", image: "/images/Image.png" },
        { title: "Learn how to make a good cup of coffee", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
        { title: "Learn how to make your own clay jewelry", price: "$20", location: "Tampines", host: "Leila Lim", image: "/images/Image.png" },
        { title: "Learn how to roast coffee beans", price: "Free", location: "Tampines", host: "Omar Shaddiq", image: "/images/Image.png" },
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

//   return (
// //     <div style={{ padding: "20px" }}>
// //       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
// //         <button>Type of activity →</button>
// //         <button>Country →</button>
// //         <button>Location →</button>
// //       </div>
// //       {activities.map((category, index) => (
// //         <div key={index}>
// //           <h2>{category.category}</h2>
// //           <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
// //             {category.items.map((item, i) => (
// //               <div
// //                 key={i}
// //                 style={{
// //                   border: "1px solid #ddd",
// //                   borderRadius: "8px",
// //                   overflow: "hidden",
// //                   width: "250px",
// //                 }}
// //               >
// //                 <Image
// //                   src={item.image}
// //                   alt={item.title}
// //                   width={250}
// //                   height={150}
// //                   style={{ objectFit: "cover" }}
// //                 />
// //                 <div style={{ padding: "10px" }}>
// //                   <h3>{item.title}</h3>
// //                   <p>{item.price}</p>
// //                   <p>Location: {item.location}</p>
// //                   <p>{item.host}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //       <footer
// //   style={{
// //     // backgroundColor: "black",
// //     color: "black",
// //     padding: "20px",
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   }}
// // >
// //   {/* Social Media Icons */}
// //   <div style={{ display: "flex", gap: "10px" }}>
// //     <a href="#" style={{ color: "black", fontSize: "20px" }}>
// //       <FaFacebook />
// //     </a>
// //     <a href="#" style={{ color: "black", fontSize: "20px" }}>
// //       <FaLinkedin />
// //     </a>
// //     <a href="#" style={{ color: "black", fontSize: "20px" }}>
// //       <FaYoutube />
// //     </a>
// //     <a href="#" style={{ color: "black", fontSize: "20px" }}>
// //       <FaInstagram />
// //     </a>
// //   </div>

// //   {/* Terms & Conditions */}
// //   <div>
// //     <a
// //       href="#"
// //       style={{
// //         color: "gray",
// //         fontSize: "14px",
// //         textDecoration: "none",
// //         transition: "color 0.3s",
// //       }}
// //       // onMouseEnter={(e) => (e.target.style.color = "white")}
// //       // onMouseLeave={(e) => (e.target = "gray")}
// //     >
// //       Terms & Conditions
// //     </a>
// //   </div>
// // </footer>

// //     </div>


// <div style={{ padding: "20px" }}>
//   <div style={{ display: "flex", gap: "10px", marginBottom: "20px" ,justifyContent: "center" }}>
//     <button>Type of activity →</button>
//     <button>Country →</button>
//     <button>Location →</button>
//   </div>
//   {activities.map((category, index) => (
//     <div key={index}>
//       <h2
//         style={{
//             fontWeight:
//               category.category === "Creative Workshops!" ||
//               category.category === "Sports" ||
//               category.category === "Wellness"
//                 ? "bold"
//                 : "normal",
//             fontSize:
//               category.category === "Creative Workshops!" ||
//               category.category === "Sports" ||
//               category.category === "Wellness"
//                 ? "24px"
//                 : "18px",

//             marginLeft: "50px",
//             marginBottom:"10px",
//           }}
//       >
//         {category.category}
//       </h2>
//       <Slider {...settings}>
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,marginLeft: "50px"}}>
//         {category.items.map((item, i) => (
//           <div
//             key={i}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               overflow: "hidden",
//               width: "250px",
//             }}
//           >
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={250}
//               height={150}
//               style={{ objectFit: "cover" }}
//             />
//             <div style={{ padding: "10px" }}>
//               <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
//               <p>{item.price}</p>
//               <p>Location: {item.location}</p>
//               <p style={{ fontWeight: "bold" }}>{item.host}</p>
//             </div>
//           </div>
//         ))}
       
//       </div>
//     </div>
//   ))}
//   <footer
//     style={{
//       color: "black",
//       padding: "20px",
//       marginLeft:"40px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     }}
//   >
//     {/* Social Media Icons */}
//     <div style={{ display: "flex", gap: "10px" }}>
//       <a href="#" style={{ color: "black", fontSize: "20px" }}>
//         <FaFacebook />
//       </a>
//       <a href="#" style={{ color: "black", fontSize: "20px" }}>
//         <FaLinkedin />
//       </a>
//       <a href="#" style={{ color: "black", fontSize: "20px" }}>
//         <FaYoutube />
//       </a>
//       <a href="#" style={{ color: "black", fontSize: "20px" }}>
//         <FaInstagram />
//       </a>
//     </div>

//     {/* Terms & Conditions */}
//     <div>
//       <a
//         href="#"
//         style={{
//           color: "gray",
//           fontSize: "14px",
//           textDecoration: "none",
//           transition: "color 0.3s",
//         }}
//       >
//         Terms & Conditions
//       </a>
//     </div>
//   </footer>
// </div>

//   );
// }

return (
  <div style={{ padding: "60px" }}>
    <div style={{ display: "flex",flexWrap:"wrap", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
      <button style={{ borderRadius: "10px", backgroundColor:"white",color:"black"}}>Type of activity →</button>
      <button style={{ borderRadius: "10px", backgroundColor:"white",color:"black"}}>Country →</button>
      <button style={{ borderRadius: "10px", backgroundColor:"white",color:"black"}}>Location →</button>
    </div>
    <div className="pt-6" style={{ maxWidth: "1500px" }}>
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
}

