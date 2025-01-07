// src/pages/PropertyDetails/PropertyDetails.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  margin-bottom: 30px;
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }

  .secondary-images {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
`;

const PropertyInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

const MainInfo = styled.div``;

const Price = styled.h1`
  font-size: 32px;
  color: #d61c62;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  margin-bottom: 20px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin: 20px 0;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: #666;
  }
`;

const Description = styled.div`
  margin: 20px 0;
  line-height: 1.6;
  color: #444;
`;

const ContactCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 20px;
`;

const ContactButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #d61c62;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &.whatsapp {
    background: #25D366;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const PropertyDetails = () => {
  // Dummy property data
  const property = {
    title: "3 BHK Luxury Apartment",
    price: "₹65,00,000",
    location: "Koramangala, Bangalore",
    bedrooms: 3,
    bathrooms: 2,
    area: "1500 sq.ft",
    parking: "2 Cars",
    furnishing: "Semi-furnished",
    description: "Beautiful 3 BHK apartment in prime location with modern amenities...",
    images: [
      "https://via.placeholder.com/800x400",
      "https://via.placeholder.com/400x195",
      "https://via.placeholder.com/400x195"
    ]
  };

  return (
    <>
      <Header />
      <Container>
        <ImageGallery>
          <img src={property.images[0]} alt="Main" />
          <div className="secondary-images">
            <img src={property.images[1]} alt="Secondary 1" />
            <img src={property.images[2]} alt="Secondary 2" />
          </div>
        </ImageGallery>

        <PropertyInfo>
          <MainInfo>
            <Price>{property.price}</Price>
            <Title>{property.title}</Title>
            <Location>
              <LocationOnIcon />
              {property.location}
            </Location>

            <Features>
              <Feature>
                <BedIcon />
                {property.bedrooms} Bedrooms
              </Feature>
              <Feature>
                <SquareFootIcon />
                {property.area}
              </Feature>
              <Feature>
                <LocalParkingIcon />
                {property.parking}
              </Feature>
            </Features>

            <Description>
              <h3>Description</h3>
              <p>{property.description}</p>
            </Description>
          </MainInfo>

          <ContactCard>
            <ContactButton>
              Contact Owner
            </ContactButton>
            <ContactButton className="whatsapp">
              <WhatsAppIcon />
              WhatsApp
            </ContactButton>
            <ActionButtons>
              <ActionButton>
                <FavoriteIcon />
                Save
              </ActionButton>
              <ActionButton>
                <ShareIcon />
                Share
              </ActionButton>
            </ActionButtons>
          </ContactCard>
        </PropertyInfo>
      </Container>
    </>
  );
};

export default PropertyDetails;