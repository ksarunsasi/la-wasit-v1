// src/pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../contexts/AuthContext';


const HeroSection = styled.div`
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url('/hero-background.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const Feature = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;

  img {
    width: 60px;
    margin-bottom: 15px;
  }

  h3 {
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
`;


const Home = () => {

      // Main properties state that will be passed to SearchBar
      const [properties, setProperties] = useState([]);
      const [filteredProperties, setFilteredProperties] = useState([]);
      const [isSearching, setIsSearching] = useState(false);

  // Dummy property data
  useEffect(() => {
        // Load initial properties
        const loadedProperties = [
            {   id: 1, 
                image: "https://via.placeholder.com/300x200", 
                price: "₹45,00,000", title: "2 BHK Apartment",
                location: "Koramangala, Bangalore",
                bedrooms: "3",
                area: "1200 sq.ft",
                furnishing: "Semi-furnished",
                type: 'Apartment'
            },
            {   id: 2, 
                image: "https://via.placeholder.com/300x200", 
                price: "₹60,00,000", title: "3 BHK Apartment",
                location: "Shivaji Nagar, Bangalore",
                bedrooms: "2",
                area: "2400 sq.ft",
                furnishing: "Semi-furnished",
                type: 'House'
            },
            {   id: 3, 
                image: "https://via.placeholder.com/300x200", 
                price: "₹80,00,000", title: "3 BHK Apartment",
                location: "India Gate, Mumbai",
                bedrooms: "3",
                area: "2400 sq.ft",
                furnishing: "Semi-furnished",
                type: 'Villa'
            },
            {   id: 4, 
                image: "https://via.placeholder.com/300x200", 
                price: "₹70,00,000", title: "3 BHK Apartment",
                location: "Parliment, Delhi",
                bedrooms: "2",
                area: "2400 sq.ft",
                furnishing: "Semi-furnished",
                type: 'Villa'
            },
            {   id: 5, 
                image: "https://via.placeholder.com/300x200", 
                price: "₹50,00,000", title: "3 BHK Apartment",
                location: "Neelankarai, Chennai",
                bedrooms: "3",
                area: "3000 sq.ft",
                furnishing: "Full-furnished",
                type: 'Villa'
            },
            {   id: 6, 
                image: "https://via.placeholder.com/300x200", 
                price: "₹30,00,000", title: "3 BHK Apartment",
                location: "Pallavakkam, Chennai",
                bedrooms: "2",
                area: "1000 sq.ft",
                furnishing: "Full-furnished",
                type: 'House'
            }    
          ];
      

        setProperties(loadedProperties);
        setFilteredProperties(loadedProperties);
      }, []);


      const handleSearch = (searchCriteria) => {
        let filtered = [...properties];
    
        // Filter by property type
        if (searchCriteria.propertyType) {
          filtered = filtered.filter(property =>
            property.propertyType === searchCriteria.propertyType
          );
        }
    
        // Filter by location
        if (searchCriteria.location) {
          filtered = filtered.filter(property =>
            property.location.toLowerCase().includes(searchCriteria.location.toLowerCase())
          );
        }
    
        // Filter by listing type (buy/rent/commercial)
        if (searchCriteria.type) {
          filtered = filtered.filter(property =>
            property.listingType === searchCriteria.type
          );
        }
    
        // Filter by bedrooms
        if (searchCriteria.bedrooms) {
          filtered = filtered.filter(property =>
            property.bedrooms === searchCriteria.bedrooms
          );
        }
    
        // Update filtered properties
        setFilteredProperties(filtered);
      };
    
      return (
        <>
          <Header />
          
          <HeroSection>
            <HeroTitle>
              Find Your Perfect Home Without Any Broker
            </HeroTitle>
            <SearchBar 
              properties={properties} 
              onSearch={handleSearch}
            />
          </HeroSection>
    
          <Section>
            <SectionTitle>
              {filteredProperties.length > 0 
                ? `${filteredProperties.length} Properties Found` 
                : 'No Properties Found'}
            </SectionTitle>
    
            {filteredProperties.length > 0 ? (
              <PropertiesGrid>
                {filteredProperties.map(property => (
                  <PropertyCard 
                    key={property.id}
                    property={property}
                  />
                ))}
              </PropertiesGrid>
            ) : (
              <NoResults>
                No properties found matching your criteria. Try adjusting your filters.
              </NoResults>
            )}
          </Section>

      <Section>
        <SectionTitle>Why Choose La-Wasit?</SectionTitle>
        <Features>
          <Feature>
            <img src="/icons/savings.png" alt="Save Money" />
            <h3>Zero Brokerage</h3>
            <p>Save thousands in brokerage fees</p>
          </Feature>
          <Feature>
            <img src="/icons/verified.png" alt="Verified" />
            <h3>Verified Properties</h3>
            <p>All listings are thoroughly verified</p>
          </Feature>
          <Feature>
            <img src="/icons/support.png" alt="Support" />
            <h3>24/7 Support</h3>
            <p>Get assistance whenever you need</p>
          </Feature>
        </Features>
      </Section>

      <section>
        {/* <SectionTitle>Touch with us</SectionTitle> */}
        <Footer />
       </section>
    </>
  );
};

export default Home;