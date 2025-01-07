// src/components/PropertyCard/PropertyCard.js
import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import BedIcon from '@mui/icons-material/Bed';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  svg {
    color: #d61c62;
  }
`;

const Content = styled.div`
  padding: 15px;
`;

const Price = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #d61c62;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  margin-bottom: 10px;
  
  svg {
    font-size: 18px;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 14px;

  svg {
    font-size: 18px;
  }
`;

const PropertyCard = ({ property }) => {
  const defaultProperty = {
    image: "https://via.placeholder.com/300x200",
    price: "₹45,00,000",
    title: "3 BHK Apartment",
    location: "Koramangala, Bangalore",
    bedrooms: "3",
    area: "1200 sq.ft",
    furnishing: "Semi-furnished",
    type: "Apartment"
  };

  const p = property || defaultProperty;

  return (
    <Card>
      <ImageContainer>
        <PropertyImage src={p.image} alt={p.title} />
        <FavoriteButton>
          <FavoriteIcon />
        </FavoriteButton>
      </ImageContainer>
      <Content>
        <Price>{p.price}</Price>
        <Title>{p.bedrooms} BHK {p.type}</Title>
        <Location>
          <LocationOnIcon />
          {p.location}
        </Location>
        <Details>
          <Detail>
            <BedIcon />
            {p.bedrooms} BHK
          </Detail>
          <Detail>
            <SquareFootIcon />
            {p.area}
          </Detail>
        </Details>
      </Content>
    </Card>
  );
};

export default PropertyCard;