"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PostPropertyForm() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Post Your Property</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="listingType">Listing Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sell" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., 3 BHK Apartment in Koramangala"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>

          {/* Location & Price */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Location & Price</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter amount in ₹"
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter complete address" />
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Property Details</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="area">Area (sq.ft)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Enter area in square feet"
                />
              </div>

              <div>
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 BHK</SelectItem>
                    <SelectItem value="2">2 BHK</SelectItem>
                    <SelectItem value="3">3 BHK</SelectItem>
                    <SelectItem value="4">4 BHK</SelectItem>
                    <SelectItem value="5">5+ BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="furnishing">Furnishing</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Furnishing" />
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
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Images</h3>
            <div className="border-2 border-dashed rounded-lg p-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <Upload className="h-8 w-8 text-gray-400" />
                <div className="text-center">
                  <Label
                    htmlFor="images"
                    className="text-primary hover:text-primary/90 cursor-pointer"
                  >
                    Click to upload images
                  </Label>
                  <p className="text-sm text-gray-500">
                    You can upload multiple images
                  </p>
                </div>
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              {images.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    {images.length} image(s) selected
                  </p>
                </div>
              )}
            </div>
          </div>

          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
            Post Property
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
