"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { set } from "mongoose";
import { get } from "@/api/BaseApi";
import Constant from "@/common/constant";

interface HeroSearchProps {
  onSearchClick: (item: string) => void;
}

export function HeroSearch({ onSearchClick }: HeroSearchProps) {
  const [activeTab, setActiveTab] = useState("buy");
  const [isCommercial, setIsCommercial] = useState(false);
  const [query, setQuery] = useState(""); // User's search query
  const [locationData, setLocationData] = useState([]); // Fetched data from API
  const [filteredData, setFilteredData] = useState([]); // Filtered results
  const [showDropdown, setShowDropdown] = useState(false); // Show/hide dropdown
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    async function fetchLocationData() {
      try {
        setLoading(true);
        const locationResp = await get(
          Constant.BASE_URL,
          Constant.ENDPOINT_LOCATION
        );

        console.log("location:", locationResp[0]?.locations);
        setLocationData(locationResp[0]?.locations);
        setShowDropdown(true);
        // setFilteredData(locationResp[0]?.locations); // Initialize with all data
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLocationData();
  }, []);

  // Filter items based on search query
  useEffect(() => {
    const filtered = locationData.filter((item) =>
      item?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  }, [query, locationData]);

  const handleSelectItem = (item) => {
    setQuery(item); // Set selected item in the input
    setShowDropdown(false); // Close dropdown
  };

  return (
    <div className="relative min-h-[500px] w-full bg-gradient-to-r from-rose-400 to-rose-500">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Find Your Perfect Home Without Any Broker
          </h1>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex gap-2 mb-6">
              <Button
                variant={activeTab === "buy" ? "default" : "ghost"}
                onClick={() => {
                  setIsCommercial(false);
                  setActiveTab("buy");
                }}
                className="flex-1 sm:flex-none"
              >
                Buy
              </Button>
              <Button
                variant={activeTab === "rent" ? "default" : "ghost"}
                onClick={() => {
                  setIsCommercial(false);
                  setActiveTab("rent");
                }}
                className="flex-1 sm:flex-none"
              >
                Rent
              </Button>
              <Button
                variant={activeTab === "commercial" ? "default" : "ghost"}
                onClick={() => {
                  setIsCommercial(true);
                  setActiveTab("commercial");
                }}
                className="flex-1 sm:flex-none"
              >
                Commercial
              </Button>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by location..."
                  className="w-full pl-10"
                />
                {showDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full max-h-52 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {
                      loading ? (
                        <p className="p-2 text-gray-500">Loading...</p>
                      ) : query.length > 0 ? (
                        filteredData.map((item) => (
                          <div
                            key={item}
                            onClick={() => handleSelectItem(item)}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                          >
                            {item}
                          </div>
                        ))
                      ) : null
                      // (
                      //   <p className="p-2 text-gray-500">No results found</p>
                      // )
                    }
                  </div>
                )}
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>

              {!isCommercial ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="plot">Plot</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="BHK" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 BHK</SelectItem>
                      <SelectItem value="2">2 BHK</SelectItem>
                      <SelectItem value="3">3 BHK</SelectItem>
                      <SelectItem value="4">4+ BHK</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Furnishing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="furnished">Furnished</SelectItem>
                      <SelectItem value="semi-furnished">
                        Semi-Furnished
                      </SelectItem>
                      <SelectItem value="unfurnished">Unfurnished</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : null}

              <Button
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                onClick={() => {
                  onSearchClick(query); // Call the search function
                }}
              >
                <Search className="mr-2 h-4 w-4" />
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
