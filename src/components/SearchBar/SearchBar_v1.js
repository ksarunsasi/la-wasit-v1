// src/components/SearchBar/SearchBar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SearchTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 8px 20px;
  border: none;
  background: ${props => props.active ? '#d61c62' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
`;

const SearchBox = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const Filter = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  flex: 1;
  min-width: 120px;
`;

const SearchButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #d61c62;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SearchBar = ({ properties, onSearch }) => {
  const [searchType, setSearchType] = useState('buy');
  const [searchInput, setSearchInput] = useState('');
  const [filters, setFilters] = useState({
    propertyType: '',
    bedrooms: '',
    furnishing: ''
  });

  // Get unique locations from properties for suggestions
  const locations = [...new Set(properties.map(p => p.location))];

  const handleSearch = () => {
    const searchCriteria = {
      type: searchType,
      location: searchInput,
      ...filters
    };
    onSearch(searchCriteria);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  console.log('SearchBar.js: properties:', searchInput);
  return (
    <SearchContainer>
      <SearchTabs>
        <Tab 
          active={searchType === 'buy'} 
          onClick={() => setSearchType('buy')}
        >
          Buy
        </Tab>
        <Tab 
          active={searchType === 'rent'} 
          onClick={() => setSearchType('rent')}
        >
          Rent
        </Tab>
        <Tab 
          active={searchType === 'commercial'} 
          onClick={() => setSearchType('commercial')}
        >
          Commercial
        </Tab>
      </SearchTabs>

      <SearchBox>
        <IconWrapper>
          <LocationOnIcon />
        </IconWrapper>
        <SearchInput
          type="text"
          placeholder="Search by location..."
          value={searchInput}
          onChange={handleInputChange}
          list="locations"
        />
        <datalist id="locations">
          {locations.map((location, index) => (
            <option key={index} value={location} />
          ))}
        </datalist>
      </SearchBox>

      <FiltersContainer>
        <Filter
          name="propertyType"
          value={filters.propertyType}
          onChange={handleFilterChange}
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
        </Filter>

        <Filter
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
        >
          <option value="">BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </Filter>

        <Filter
          name="furnishing"
          value={filters.furnishing}
          onChange={handleFilterChange}
        >
          <option value="">Furnishing</option>
          <option value="furnished">Furnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </Filter>
      </FiltersContainer>

      <SearchButton onClick={handleSearch}>
        <SearchIcon />
        Search Properties
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;