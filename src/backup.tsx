import React, { useState } from 'react';
// import { render } from 'react-dom';
// import { Heart } from 'lucide-react';

const NobrokerClone = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, location: 'Bangalore', type: 'Apartment', budget: '10,000 - 20,000' },
    { id: 2, location: 'Mumbai', type: 'House', budget: '20,000 - 50,000' },
    { id: 3, location: 'Delhi', type: 'Villa', budget: '50,000 - 1,00,000' },
    { id: 4, location: 'Hyderabad', type: 'Plot', budget: 'Above 1,00,000' },
    { id: 5, location: 'Chennai', type: 'Apartment', budget: '10,000 - 20,000' },
    { id: 6, location: 'Bangalore', type: 'House', budget: '20,000 - 50,000' },
  ]);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai'];
  const types = ['Apartment', 'House', 'Villa', 'Plot'];
  const budgets = ['10,000 - 20,000', '20,000 - 50,000', '50,000 - 1,00,000', 'Above 1,00,000'];

  const handleSearch = () => {
    const filtered = properties.filter((property) => {
      return (
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.budget.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredProperties(filtered);
  };

  const handleFilter = () => {
    const filtered = properties.filter((property) => {
      return (
        (selectedLocation === '' || property.location === selectedLocation) &&
        (selectedType === '' || property.type === selectedType) &&
        (selectedBudget === '' || property.budget === selectedBudget)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8 lg:p-12 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">NoBroker Clone</h1>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md">
          Post Your Property
        </button>
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for properties"
          className="w-full md:w-1/2 p-4 pl-10 text-lg text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full md:w-1/4 p-4 pl-10 text-lg text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full md:w-1/4 p-4 pl-10 text-lg text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
          className="w-full md:w-1/4 p-4 pl-10 text-lg text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Budget</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
        <button
          onClick={handleFilter}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          Filter
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-blue-600">Property {property.id}</h2>
              <Heart className="text-red-500 text-2xl" />
            </div>
            <div className="flex flex-wrap justify-center mb-8">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
            </div>
            <div className="flex flex-wrap justify-center mb-8">
              <p className="text-lg text-gray-700">Location: {property.location}</p>
              <p className="text-lg text-gray-700">Type: {property.type}</p>
              <p className="text-lg text-gray-700">Budget: {property.budget}</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NobrokerClone;