// src/components/Footer/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 20px;
    font-size: 18px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        color: #ccc;
        text-decoration: none;
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <ul>
            <li><a href="#">About La-Wasit</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>For Buyers/Tenants</h3>
          <ul>
            <li><a href="#">Search Properties</a></li>
            <li><a href="#">Property Alerts</a></li>
            <li><a href="#">Buyer Guide</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>For Owners</h3>
          <ul>
            <li><a href="#">Post Property</a></li>
            <li><a href="#">Owner Guide</a></li>
            <li><a href="#">Owner Dashboard</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Connect With Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;