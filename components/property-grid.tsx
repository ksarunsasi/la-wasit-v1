import { use, useEffect, useState } from "react";
import { PropertyCard } from "./property-card";
import { get } from "@/api/BaseApi";
import Constant from "@/common/constant";

interface Property {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  city: string;
  bedrooms: string;
  area: string;
}

interface PropertyGridProps {
  searchedLocation: string;
}
export function PropertyGrid({ searchedLocation = "" }: PropertyGridProps) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const propertyListResp = await get(
          Constant.BASE_URL,
          Constant.ENDPOINT_PROPERTIES
        );

        console.log("Properties:", propertyListResp);
        setProperties(propertyListResp);
      } catch (error) {
        setProperties([]);
        console.error("Error fetching properties:", error);
      } finally {
        // setLoading(false);
      }
    }
    fetchProperties();
  }, [searchedLocation]);

  const propertyCount = properties?.length || 0;
  return propertyCount > 0 ? (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {propertyCount + " Properties Found"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property: Property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            price={property.price}
            title={property.title}
            location={property.location}
            city={property.city}
            bhk={property.bedrooms}
            area={property.area}
          />
        ))}
      </div>
    </div>
  ) : null;
}
