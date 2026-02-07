import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const location = useLocation();

  // 1. Input states (Temporary values)
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("Type of House");
  const [bedrooms, setBedrooms] = useState("Bedrooms");

  // 2. Applied Filter state (The values actually used for filtering)
  const [appliedFilters, setAppliedFilters] = useState({
    term: "",
    min: "",
    max: "",
    type: "Type of House",
    beds: "Bedrooms",
  });

  const [expandedProperty, setExpandedProperty] = useState(null);

  // Full Data with added 'beds' property for filtering
  const properties = [
    { id: 1, title: "6 Bedroom Duplex", location: "Lagos", price: "₦150,000,000", image: "/properties1.webp", type: "Duplex", rentable: false, beds: 6 },
    { id: 2, title: "2 Bedroom Flat", location: "Lagos", price: "₦2,500,000 / year", image: "/properties2.webp", type: "Flat", rentable: true, beds: 2 },
    { id: 3, title: "3 Bedroom Apartment", location: "Lagos", price: "₦75,000,000", image: "/properties3.webp", type: "Apartment", rentable: false, beds: 3 },
    { id: 4, title: "4 Bedroom Bungalow", location: "Ogun", price: "₦35,000,000", image: "/properties4.webp", type: "Bungalow", rentable: false, beds: 4 },
    { id: 5, title: "2 Bedroom Flat", location: "Ogun", price: "₦1,200,000 / year", image: "/properties5.webp", type: "Flat", rentable: true, beds: 2 },
    { id: 6, title: "5 Bedroom Duplex", location: "Ogun", price: "₦60,000,000", image: "/properties6.webp", type: "Duplex", rentable: false, beds: 5 },
    { id: 7, title: "3 Bedroom Flat", location: "Osun", price: "₦800,000 / year", image: "/properties7.webp", type: "Flat", rentable: true, beds: 3 },
    { id: 8, title: "4 Bedroom Duplex", location: "Osun", price: "₦45,000,000", image: "/properties8.webp", type: "Duplex", rentable: false, beds: 4 },
    { id: 9, title: "2 Bedroom Bungalow", location: "Osun", price: "₦25,000,000", image: "/properties9.webp", type: "Bungalow", rentable: false, beds: 2 },
    { id: 10, title: "3 Bedroom Apartment", location: "Ondo", price: "₦1,500,000 / year", image: "/properties10.webp", type: "Apartment", rentable: true, beds: 3 },
    { id: 11, title: "5 Bedroom Duplex", location: "Ondo", price: "₦55,000,000", image: "/properties11.webp", type: "Duplex", rentable: false, beds: 5 },
    { id: 12, title: "2 Bedroom Flat", location: "Ondo", price: "₦1,000,000 / year", image: "/properties12.webp", type: "Flat", rentable: true, beds: 2 },
    { id: 13, title: "1 Bedroom Shortlet Apartment", location: "Lagos", price: "₦50,000 / night", image: "/properties13.webp", type: "Shortlet", rentable: true, beds: 1 },
    { id: 14, title: "2 Bedroom Shortlet Apartment", location: "Abuja", price: "₦80,000 / night", image: "/properties14.webp", type: "Shortlet", rentable: true, beds: 2 },
    { id: 15, title: "Luxury Shortlet Duplex", location: "Lekki", price: "₦120,000 / night", image: "/properties15.webp", type: "Shortlet", rentable: true, beds: 4 },
    { id: 16, title: "Studio Shortlet Flat", location: "Ibadan", price: "₦40,000 / night", image: "/properties16.webp", type: "Shortlet", rentable: true, beds: 1 },
    { id: 17, title: "3 Bedroom Shortlet Apartment", location: "Port Harcourt", price: "₦100,000 / night", image: "/properties17.webp", type: "Shortlet", rentable: true, beds: 3 },
    { id: 18, title: "Penthouse Shortlet Suite", location: "Victoria Island", price: "₦150,000 / night", image: "/properties18.webp", type: "Shortlet", rentable: true, beds: 2 },
    { id: 19, title: "Land for Sale - 600sqm", location: "Ogun", price: "₦15,000,000", image: "/properties19.webp", type: "Land", rentable: false, beds: 0 },
    { id: 20, title: "Land for Sale - 1 Acre", location: "Osun", price: "₦40,000,000", image: "/properties20.webp", type: "Land", rentable: false, beds: 0 },
  ];

  // 3. LISTEN FOR HEADER SEARCH
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search");

    if (query !== null) {
      setSearchTerm(query); // Sync the input field
      setAppliedFilters((prev) => ({
        ...prev,
        term: query, // Trigger the search automatically
      }));
    }
  }, [location.search]);

  // Helper to turn "₦150,000" into 150000
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^\d.]/g, "")) || 0;
  };

  // 4. HANDLERS
  const handleSearch = () => {
    setAppliedFilters({
      term: searchTerm,
      min: minPrice,
      max: maxPrice,
      type: propertyType,
      beds: bedrooms,
    });
  };

  const handleClear = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setPropertyType("Type of House");
    setBedrooms("Bedrooms");
    setAppliedFilters({
      term: "",
      min: "",
      max: "",
      type: "Type of House",
      beds: "Bedrooms",
    });
  };

  // 5. FILTERING LOGIC
  const filteredProperties = properties.filter((property) => {
    const propertyPrice = parsePrice(property.price);
    const filterTerm = appliedFilters.term.toLowerCase();
    
    // Text search (Title or Location)
    const matchesText = 
      property.title.toLowerCase().includes(filterTerm) ||
      property.location.toLowerCase().includes(filterTerm);

    // Price search
    const matchesMin = appliedFilters.min === "" || propertyPrice >= parseFloat(appliedFilters.min);
    const matchesMax = appliedFilters.max === "" || propertyPrice <= parseFloat(appliedFilters.max);

    // Type search
    const matchesType = appliedFilters.type === "Type of House" || property.type === appliedFilters.type;

    // Bedroom search
    let matchesBeds = true;
    if (appliedFilters.beds !== "Bedrooms") {
      const bedCount = parseInt(appliedFilters.beds);
      matchesBeds = appliedFilters.beds === "5+ Bedrooms" 
        ? property.beds >= 5 
        : property.beds === bedCount;
    }

    return matchesText && matchesMin && matchesMax && matchesType && matchesBeds;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-yellow-500 min-h-[350px] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Search across our {properties.length} exclusive listings
        </p>

        {/* Search Bar Panel */}
        <div className="bg-white shadow-xl rounded-lg p-5 w-full max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            <input
              type="text"
              placeholder="Location or property..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <input
              type="number"
              placeholder="Min Price (₦)"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-32 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <input
              type="number"
              placeholder="Max Price (₦)"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-32 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <select 
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-40 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option>Type of House</option>
              <option>Duplex</option>
              <option>Flat</option>
              <option>Bungalow</option>
              <option>Apartment</option>
              <option>Shortlet</option>
              <option>Land</option>
            </select>
            <select 
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-40 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              <option>Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5+ Bedrooms">5+ Bedrooms</option>
            </select>

            <button
              onClick={handleSearch}
              className="px-8 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition transform active:scale-95"
            >
              Search
            </button>
            <button
              onClick={handleClear}
              className="px-8 py-2 bg-gray-400 text-white font-bold rounded hover:bg-gray-500 transition"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          {filteredProperties.length} Properties Found
        </h2>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{property.title}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${property.rentable ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {property.rentable ? "FOR RENT" : "FOR SALE"}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{property.location}</p>
                  <p className="text-yellow-600 font-bold text-xl mb-4">{property.price}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-5">
                    <span>🏠 {property.type}</span>
                    {property.beds > 0 && <span>🛏️ {property.beds} Beds</span>}
                  </div>

                  <button
                    onClick={() => setExpandedProperty(expandedProperty === property.id ? null : property.id)}
                    className="w-full border-2 border-blue-900 text-blue-900 font-bold py-2 rounded-lg hover:bg-blue-900 hover:text-white transition"
                  >
                    {expandedProperty === property.id ? "Close Details" : "View Listing"}
                  </button>

                  {expandedProperty === property.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
                      <p className="text-gray-700 text-sm mb-4">
                        Beautiful {property.type} located in the heart of {property.location}. 
                        Perfect for families looking for comfort and security.
                      </p>
                      <div className="flex gap-2">
                        <a href="tel:08027955268" className="flex-1 bg-green-600 text-white text-center py-2 rounded font-bold text-sm">Call Agent</a>
                        <button className="flex-1 bg-blue-600 text-white py-2 rounded font-bold text-sm">Inquiry</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 font-semibold">No properties match your current filters.</p>
            <button onClick={handleClear} className="mt-4 text-blue-600 underline">Reset all filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;