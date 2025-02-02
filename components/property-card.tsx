"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  bhk: string;
  area: string;
  city: string;
}

export function PropertyCard({
  image,
  price,
  title,
  location,
  bhk,
  area,
  city,
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [src, setSrc] = useState(image); // Primary image URL
  const fallbackSrc = "/nophoto.png"; // Fallback image (hosted locally or from an allowed domain)

  console.log("formattedPrice", price);
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-[4/3]">
        <Image
          src={src || fallbackSrc}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => setSrc(fallbackSrc)}
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-pink-500 text-pink-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="text-2xl font-bold text-pink-600">{price}</div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}, {city}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {bhk} BHK
          </div>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            {area} sq.ft
          </div>
        </div>
      </div>
    </Card>
  );
}
