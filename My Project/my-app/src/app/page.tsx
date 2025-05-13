import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";
import { JSX } from "react/jsx-runtime";

export default function Desktop(): JSX.Element {
  // Navigation items
  const navItems = [
    { title: "Home", active: true },
    { title: "About", active: false },
    { title: "Features", active: false },
  ];

  // Content sections
  const sections = [
    {
      id: "about",
      title: "About eBarangay",
      content:
        "eBarangay is a digital platform that simplifies interactions between local governments and residents. With a goal to enhance community engagement, this platform integrates essential barangay services into a single online system, reducing the time and effort required for residents to access services and stay informed.",
    },
    {
      id: "partner",
      title: "A Partner for the People",
      content:
        "At the heart of every government initiative is the people's welfare. With eBarangay, services are aligned with the essential needs of the community, offering avenues for residents to voice their concerns and engage with local governance. This platform promotes inclusivity and empowerment, ensuring that no resident is left behind.",
    },
    {
      id: "hub",
      title: "A One-Stop Hub for Community Services",
      content:
        "Through eBarangay, residents can easily access a range of barangay services and information from a single digital platform. By integrating services from local government units (LGUs) and barangay offices, the platform exemplifies the shift towards a fully digitized government system, enhancing accessibility and convenience for every resident.",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between px-6 py-4 mt-[39px] mx-auto max-w-[1162px]">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#FF6B00]">eBARANGAY</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-[45px]">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    className={`font-extrabold text-2xl ${item.active ? "text-black" : "text-black"}`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        {/* Hero Section */}
        <section className="relative w-full h-[908px] mt-[70px]">
          <div className="absolute w-full h-full top-0 left-0 bg-[url('/5235-1.png')] bg-cover bg-no-repeat" />

          <div className="relative z-10 max-w-[1200px] mx-auto pt-[118px] px-4">
            <div className="max-w-[751px] ml-[119px]">
              <h1 className="font-bold text-[57px] text-black leading-tight">
                Welcome to eBarangay!
              </h1>
              <p className="text-2xl mt-6 text-black">
                Access government services quickly and easily with just a few
                clicks, making your experience more convenient and connected.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mt-10">
                <Button className="w-[147px] h-[58px] bg-[#ffae00] text-black rounded-lg text-[26px] font-bold">
                  Login
                </Button>
                <Button className="w-[147px] h-[54px] bg-[#4960fa] text-black rounded-lg text-[26px] font-bold border border-solid">
                  Signup
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4">
          <Card className="max-w-[1085px] mx-auto border-none shadow-none">
            <CardContent className="flex flex-col items-center p-0">
              <h2 className="text-[43px] font-extrabold text-black text-center mb-10">
                {sections[0].title}
              </h2>
              <p className="text-2xl text-center max-w-[662px] mb-10">
                {sections[0].content}
              </p>
              <div className="w-full h-[558px] bg-[url('/hero-banner.jpg')] bg-contain bg-center bg-no-repeat" />
            </CardContent>
          </Card>
        </section>

        {/* Partner Section */}
        <section className="relative w-full">
          <div className="absolute w-full h-[609px] top-0 left-0 bg-[url('/58274-1.png')] bg-cover bg-no-repeat" />

          <div className="relative z-10 max-w-[1200px] mx-auto py-16 px-4">
            <Card className="max-w-[984px] mx-auto ml-[119px] border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <h2 className="text-[32px] font-extrabold text-black mb-6">
                  {sections[1].title}
                </h2>
                <p className="text-2xl text-black mt-6">
                  {sections[1].content}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hub Section */}
        <section className="py-16 px-4 mb-16">
          <Card className="max-w-[1124px] mx-auto border-none shadow-none">
            <CardContent className="p-0">
              <h2 className="text-[32px] font-extrabold text-black text-right mb-6">
                {sections[2].title}
              </h2>
              <p className="text-2xl text-black text-right mt-6">
                {sections[2].content}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}