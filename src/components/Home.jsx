// import React, { useState, useEffect, useRef } from "react";
// import { FaWhatsapp } from "react-icons/fa";

// // WhatsApp Order Modal Component
// function WhatsAppOrderModal({ product, isOpen, onClose, userInfo, setUserInfo }) {
//   const ADMIN_PHONE = "919030577270"; // replace with your WhatsApp number

//   if (!isOpen) return null;

//   const handleChange = (e) =>
//     setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

//   const handleSendWhatsApp = () => {
//     const pageUrl = window.location.href;

//     const priceText =
//       product.price === "N/A" || product.price === "  N/A"
//         ? "Please share the price and available customization options for this product."
//         : `₹${product.price}`;

//     const message = `🛍️ *THE PAINTED DREAM ORDER INQUIRY* 🛍️

// Hello! 👋 I would like to order this product from *THE PAINTED DREAM* website:

// 👤 *Name:* ${userInfo.name || "Not provided"}
// 📞 *Phone:* ${userInfo.phone || "Not provided"}

// 🖼️ *Product:* ${product.name}
// 💰 *Price:* ${priceText}
// 📄 *Details:* ${product.details}

// 🖼️ *Image Link:* ${product.image}
// 🌐 *Page:* ${pageUrl}

// Please let me know the next steps.`;

//     const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
//     const whatsappURL = isMobile
//       ? `whatsapp://send?phone=${ADMIN_PHONE}&text=${encodeURIComponent(
//           message
//         )}`
//       : `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;

//     window.open(whatsappURL, "_blank");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 sm:w-96 relative">
//         <button
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="text-xl font-bold mb-4">Your Details</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={userInfo.name}
//           onChange={handleChange}
//           className="border rounded px-4 py-2 w-full mb-3"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Your Phone (optional)"
//           value={userInfo.phone}
//           onChange={handleChange}
//           className="border rounded px-4 py-2 w-full mb-4"
//         />
//         <button
//           onClick={handleSendWhatsApp}
//           className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//         >
//           <FaWhatsapp size={18} />
//           Send Order on WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// }

// // Main Home Component
// export default function Home() {
//   const carouselImages = [
//     "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999063/MAIN_rns2jm.jpg",
//     "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0002_ophrkn.jpg",
//     "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0004_t0sfko.jpg",
//     "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0003_dgrnuj.jpg",
//   ];

//   const trendingProducts = [
    
//      {
//       id: 1,
//       name: "Mandala Art Key Chains",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0019_mecorg.jpg",
//       price: 60,
//       details: "Each keychain costs 60/- rupees and Contact me for more quantity",
//       category: "Key Chains",
//     },
//     {
//       id: 2,
//       name: "Key chains",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0012_elwxfj.jpg",
//       price: 59,
//       details: "Each keychain costs 59/- rupees and Contact me for more quantity",
//       category: "Key Chains",
//     },
//     {
//       id: 3,
//       name: "Key Chains",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0009_t228dq.jpg",
//       price: 59,
//       details: "Each keychain costs 59/- rupees and Contact me for more quantity",
//       category: "Key Chains",
//     },
//     {
//       id: 4,
//       name: "Key Chains",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0011_rfp8ge.jpg",
//       price: 59,
//       details: "Each keychain costs 59/- rupees and Contact me for more quantity",
//       category: "Key Chains",
//     },
//     {
//       id: 5,
//       name: "Key Chains",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0010_b9vvgj.jpg",
//       price: 59,
//       details: "Each keychain costs 59/- rupees and Contact me for more quantity",
//       category: "Key Chains",
//     },
//     {
//       id: 6,
//       name: "VINTAGE FRAMES",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0005_dkcc1h.jpg",
//       price: "N/A",
//       details: "CONTACT US for prize details and customization",
//       category: "Frames",
//     },
//     {
//       id: 7,
//       name: "3D MOON",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
//       price: 500,
//       details:
//         "3d moon 6inch Wooden wall Moon light lamp Hand crafted 3d moon design",
//       category: "Trending",
//     },
//     {
//       id: 8,
//       name: "3D MOON",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
//       price: 1000,
//       details:
//         "3d moon 12inch Wooden wall Moon light lamp Hand crafted 3d moon design",
//       category: "Trending",
//     },
//     {
//       id: 9,
//       name: "3D MOON",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
//       price: 1250,
//       details:
//         "3d moon 15inch Wooden wall Moon light lamp Hand crafted 3d moon design",
//       category: "Trending",
//     },
//     {
//       id: 10,
//       name: "ROUND FRAME",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758912402/WhatsApp_Image_2025-09-26_at_23.59.31_453b090c_ytawq1.jpg",
//       price: "N/A",
//       details: "CONTACT US for prize details and customization",
//       category: "Trending",
//     },
//    {
//     id: 11,
//     name: "Square Frame 2",
//     image: "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758912388/WhatsApp_Image_2025-09-26_at_23.59.30_2d1e6a96_gfuosd.jpg",
//     price: "N/A",
//     details:  "CONTACT US for prize details and customization",
//     category:"Trending",
//   },
//     {
//       id: 12,
//       name: "SQUARE FRAME",
//       image:
//         "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1759010363/WhatsApp_Image_2025-09-26_at_23.59.29_f3fb1a24_glh5iu_e31bec.jpg",
//       price: "N/A",
//       details: "CONTACT US for prize details and customization",
//       category: "Trending",
//     },
//   ];

//   // Carousel state
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideInterval = useRef(null);

//   useEffect(() => {
//     slideInterval.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(slideInterval.current);
//   }, []);

//   const prevSlide = () =>
//     setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
//   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselImages.length);

//   // Modal & User info state
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [userInfo, setUserInfo] = useState(() => {
//     const saved = localStorage.getItem("whatsappUserInfo");
//     return saved ? JSON.parse(saved) : { name: "", phone: "" };
//   });

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//     localStorage.setItem("whatsappUserInfo", JSON.stringify(userInfo));
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto space-y-12">
//       {/* Carousel */}
//       <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
//         <div
//           className="flex transition-transform duration-700 ease-in-out h-full"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {carouselImages.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`slide-${idx}`}
//               className="w-full flex-shrink-0 h-full object-cover"
//             />
//           ))}
//         </div>
//         {/* Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70"
//         >
//           &#10095;
//         </button>
//       </div>

//       {/* Trending Products */}
//       <h1 className="text-3xl font-bold text-center">Trending Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {trendingProducts.map((p) => (
//           <div
//             key={p.id}
//             className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
//           >
//             <img
//               src={p.image}
//               alt={p.name}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h2 className="text-lg font-semibold mt-3">{p.name}</h2>
//             <p className="text-gray-700">{p.details}</p>
//             <p className="text-green-700 font-bold mt-1">
//               {p.price === "N/A" ? "Contact for Price" : `₹${p.price}`}
//             </p>
//             <button
//               onClick={() => openModal(p)}
//               className="mt-auto flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//             >
//               <FaWhatsapp size={18} />
//               Order on WhatsApp
//             </button>
//           </div>
//         ))}
//       </div>

//       {selectedProduct && (
//         <WhatsAppOrderModal
//           product={selectedProduct}
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           userInfo={userInfo}
//           setUserInfo={setUserInfo}
//         />
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

// WhatsApp Order Modal Component
function WhatsAppOrderModal({ product, isOpen, onClose, userInfo, setUserInfo }) {
  const ADMIN_PHONE = "919030577270"; // replace with your WhatsApp number

  if (!isOpen) return null;

  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSendWhatsApp = () => {
    const pageUrl = window.location.href;

    const priceText =
      product.price === "N/A" || product.price === "  N/A"
        ? "Please share the price and available customization options for this product."
        : `₹${product.price}`;

    const message = `🛍️ *THE PAINTED DREAM ORDER INQUIRY* 🛍️

Hello! 👋 I would like to order this product from *THE PAINTED DREAM* website:

👤 *Name:* ${userInfo.name || "Not provided"}
📞 *Phone:* ${userInfo.phone || "Not provided"}

🖼️ *Product:* ${product.name}
💰 *Price:* ${priceText}
📄 *Details:* ${product.details}

🖼️ *Image Link:* ${product.image}
🌐 *Page:* ${pageUrl}

Please let me know the next steps.`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${ADMIN_PHONE}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 sm:w-96 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Your Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={userInfo.name}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full mb-3"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone (optional)"
          value={userInfo.phone}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full mb-4"
        />
        <button
          onClick={handleSendWhatsApp}
          className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          <FaWhatsapp size={18} />
          Send Order on WhatsApp
        </button>
      </div>
    </div>
  );
}

// Main Home Component
export default function Home() {
  const carouselImages = [
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999063/MAIN_rns2jm.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0002_ophrkn.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0004_t0sfko.jpg",
    "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/0003_dgrnuj.jpg",
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Mandala Art Key Chains",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0019_mecorg.jpg",
      price: 60,
      details: "Each keychain costs 60/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 2,
      name: "Key chains",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0012_elwxfj.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 3,
      name: "Key Chains",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999062/IMG-20250926-WA0009_t228dq.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 4,
      name: "Key Chains",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0011_rfp8ge.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 5,
      name: "Key Chains",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0010_b9vvgj.jpg",
      price: 59,
      details: "Each keychain costs 59/- rupees and Contact me for more quantity",
      category: "Key Chains",
    },
    {
      id: 6,
      name: "VINTAGE FRAMES",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999061/IMG-20250926-WA0005_dkcc1h.jpg",
      price: "N/A",
      details: "CONTACT US for prize details and customization",
      category: "Frames",
    },
    {
      id: 7,
      name: "3D MOON",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
      price: 500,
      details:
        "3d moon 6inch Wooden wall Moon light lamp Hand crafted 3d moon design",
      category: "Trending",
    },
    {
      id: 8,
      name: "3D MOON",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
      price: 1000,
      details:
        "3d moon 12inch Wooden wall Moon light lamp Hand crafted 3d moon design",
      category: "Trending",
    },
    {
      id: 9,
      name: "3D MOON",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758999060/IMG-20250926-WA0007_u1kj34.jpg",
      price: 1250,
      details:
        "3d moon 15inch Wooden wall Moon light lamp Hand crafted 3d moon design",
      category: "Trending",
    },
    {
      id: 10,
      name: "ROUND FRAME",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758912402/WhatsApp_Image_2025-09-26_at_23.59.31_453b090c_ytawq1.jpg",
      price: "N/A",
      details: "CONTACT US for prize details and customization",
      category: "Trending",
    },
    {
      id: 11,
      name: "Square Frame 2",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1758912388/WhatsApp_Image_2025-09-26_at_23.59.30_2d1e6a96_gfuosd.jpg",
      price: "N/A",
      details: "CONTACT US for prize details and customization",
      category: "Trending",
    },
    {
      id: 12,
      name: "SQUARE FRAME",
      image:
        "https://res.cloudinary.com/dmyu5kjzs/image/upload/v1759010363/WhatsApp_Image_2025-09-26_at_23.59.29_f3fb1a24_glh5iu_e31bec.jpg",
      price: "N/A",
      details: "CONTACT US for prize details and customization",
      category: "Trending",
    },
  ];

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselImages.length);

  // Modal & User info state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem("whatsappUserInfo");
    return saved ? JSON.parse(saved) : { name: "", phone: "" };
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    localStorage.setItem("whatsappUserInfo", JSON.stringify(userInfo));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      {/* Carousel */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="w-full flex-shrink-0 h-full object-cover"
            />
          ))}
        </div>
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70"
        >
          &#10095;
        </button>
      </div>

      {/* Trending Products */}
      <h1 className="text-3xl font-bold text-center">Trending Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trendingProducts.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setEnlargedImage(p.image)}
            />
            <h2 className="text-lg font-semibold mt-3">{p.name}</h2>
            <p className="text-gray-700">{p.details}</p>
            <p className="text-green-700 font-bold mt-1">
              {p.price === "N/A" ? "Contact for Price" : `₹${p.price}`}
            </p>
            <button
              onClick={() => openModal(p)}
              className="mt-auto flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              <FaWhatsapp size={18} />
              Order on WhatsApp
            </button>
          </div>
        ))}
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60]"
          onClick={() => setEnlargedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg"
              onClick={() => setEnlargedImage(null)}
            >
              ×
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged Product"
              className="w-full h-auto rounded-xl shadow-lg object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

      {selectedProduct && (
        <WhatsAppOrderModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      )}
    </div>
  );
}
