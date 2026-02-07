import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SliderSection = () => {
  const slides = [
    { image: "/sliderimg1.webp", title: "3-Bedroom Duplex", subtitle: "Lekki, Lagos", description: "Spacious duplex with modern kitchen, 2-car garage, and rooftop lounge.", button: "View Details" },
    { image: "/sliderimg2.webp", title: "Luxury Penthouse", subtitle: "Victoria Island", description: "5-bedroom penthouse with ocean view, private pool, and smart home system.", button: "Discover More" },
    { image: "/sliderimg3.webp", title: "Eco-Friendly Bungalow", subtitle: "Abuja", description: "Solar-powered bungalow with 4 bedrooms, garden space, and rainwater harvesting.", button: "Explore Options" },
    { image: "/sliderimg4.webp", title: "Compact Smart Apartment", subtitle: "Yaba, Lagos", description: "2-bedroom apartment with automated lighting, balcony, and co-working space nearby.", button: "See Details" },
    { image: "/sliderimg5.webp", title: "Family Residence", subtitle: "Ikeja, Lagos", description: "6-bedroom family home with playground, spacious living room, and guest quarters.", button: "View Homes" },
    { image: "/sliderimg6.webp", title: "Urban Loft", subtitle: "Surulere, Lagos", description: "Stylish loft with open-plan design, 3 bedrooms, and proximity to shopping malls.", button: "Learn More" },
    { image: "/sliderimg7.webp", title: "Countryside Villa", subtitle: "Jos Plateau", description: "Peaceful villa with 5 bedrooms, mountain views, and large outdoor patio.", button: "Explore Villas" },
    { image: "/sliderimg8.webp", title: "Beachfront House", subtitle: "Eko Atlantic", description: "4-bedroom beachfront property with infinity pool and direct beach access.", button: "Browse Listings" },
    { image: "/sliderimg9.webp", title: "Mountain Cabin", subtitle: "Obudu Hills", description: "Rustic cabin with 3 bedrooms, fireplace, and panoramic mountain views.", button: "Discover Cabins" },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto py-20 px-4">
      {/* --- REFINED HEADER --- */}
      <div className="mb-16 text-center">
        <span className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
          Featured Listings
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6">
          Latest & Featured <span className="text-yellow-500 underline decoration-2 underline-offset-8">Properties</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed">
          Browse our curated collection of homes designed to fit every lifestyle, 
          from urban lofts to countryside villas.
        </p>
      </div>

      {/* --- REFINED SWIPER --- */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        // Responsive breakpoints
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ 
            clickable: true,
            dynamicBullets: true 
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="pb-16" // Space for pagination dots
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
              
              {/* Image Container with Hover Zoom */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-950 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-sm font-semibold text-yellow-600 mb-1 uppercase tracking-wider">
                  {slide.subtitle}
                </h3>
                <h2 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-yellow-600 transition-colors">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {slide.description}
                </p>
                
                <button className="w-full py-3 border-2 border-blue-950 text-blue-950 font-bold rounded-lg group-hover:bg-blue-950 group-hover:text-white transition-all duration-300 transform active:scale-95">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Bullets to match your theme */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #172554 !important; /* blue-950 */
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </div>
  );
};

export default SliderSection;