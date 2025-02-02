"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onClickLogin: () => void;
  onClickPostProperty?: () => void;
}

export function Header({ onClickLogin, onClickPostProperty }: HeaderProps) {
  const router = useRouter();
  const loginClick = () => {
    onClickLogin();
  };
  const postPropertyClick = () => {
    // onClickPostProperty();
    router.push("/post-property");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image src="/logo.png" alt="La-Wasit Logo" width={32} height={32} /> */}
          <div className="w-16 h-16  flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-600"
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
          </div>
          <span className="text-xl font-bold text-primary">La-Wasit</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Pay Rent</Button>
          <Button onClick={postPropertyClick} variant="ghost">
            Post Property
          </Button>
          <Button onClick={loginClick} variant="outline">
            Sign up
          </Button>
          <Button onClick={loginClick} variant="default">
            Log in
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Pay Rent</DropdownMenuItem>
            <DropdownMenuItem>Post Property</DropdownMenuItem>
            <DropdownMenuItem>Sign up</DropdownMenuItem>
            <DropdownMenuItem>Log in</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
