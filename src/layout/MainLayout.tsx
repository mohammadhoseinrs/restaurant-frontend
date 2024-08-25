import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto px-2.5 py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
