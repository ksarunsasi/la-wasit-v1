// src/pages/PropertyListing/PropertyListing.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Header from '../../components/Header/Header';

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: #444;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
`;

const ImageUploadContainer = styled.div`
  border: 2px dashed #ddd;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #d61c62;
  }
`;

const Button = styled.button`
  background: #d61c62;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #c01857;
  }
`;

const PropertyListing = () => {
  const [formData, setFormData] = useState({
    propertyType: '',
    listingType: 'sell',
    title: '',
    description: '',
    price: '',
    location: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    furnishing: '',
    parking: '',
    amenities: [],
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic here
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Property listed successfully!');
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>List Your Property</Title>

          <Section>
            <SectionTitle>Basic Information</SectionTitle>
            <FormGroup>
              <Label>Property Type</Label>
              <Select name="propertyType" onChange={handleInputChange}>
                <option value="">Select Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="commercial">Commercial</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Listing Type</Label>
              <Select name="listingType" onChange={handleInputChange}>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Title</Label>
              <Input 
                type="text" 
                name="title" 
                placeholder="e.g., 3 BHK Apartment in Koramangala"
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Description</Label>
              <TextArea 
                name="description"
                placeholder="Describe your property..."
                onChange={handleInputChange}
              />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Location & Price</SectionTitle>
            <FormGroup>
              <Label>Price</Label>
              <Input 
                type="number" 
                name="price"
                placeholder="Enter amount in ₹"
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Location</Label>
              <Input 
                type="text" 
                name="location"
                placeholder="Enter complete address"
                onChange={handleInputChange}
              />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Property Details</SectionTitle>
            <FormGroup>
              <Label>Area (sq.ft)</Label>
              <Input 
                type="number" 
                name="area"
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Bedrooms</Label>
              <Select name="bedrooms" onChange={handleInputChange}>
                <option value="">Select Bedrooms</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4+ BHK</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Furnishing</Label>
              <Select name="furnishing" onChange={handleInputChange}>
                <option value="">Select Furnishing</option>
                <option value="furnished">Furnished</option>
                <option value="semi-furnished">Semi-Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </Select>
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Images</SectionTitle>
            <ImageUploadContainer>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <CloudUploadIcon style={{ fontSize: 48, color: '#d61c62' }} />
                <p>Click to upload images</p>
                <small>You can upload multiple images</small>
              </label>
            </ImageUploadContainer>
          </Section>

          <Button type="submit">List Property</Button>
        </Form>
      </Container>
    </>
  );
};

export default PropertyListing;