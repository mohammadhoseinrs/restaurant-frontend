import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/layout/MainLayout";
import React from "react";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center ">
        <div className="bg-white flex flex-col items-center justify-center rounded-xl py-10 md:py-16 w-full -mt-36 z-10 shadow-lg">
          <h2 className="text-orange-500 text-2xl md:text-4xl font-bold tracking-wider">
            Tuck into a takeaway today
          </h2>
          <p className="text-gray-500 my-5">Food is just a click away!</p>
          <div className="flex items-center justify-between border rounded-full px-3 py-1 w-full  md:w-4/5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-orange-500 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <Input
              placeholder="Search by City or Town"
              className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
            <Button className="bg-orange-500 rounded-full px-4 " size="sm">
              Search
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-20">
          <div className="flex-1 mb-10 md:mt-0">
            <img
              src="/assets/landing.png"
              alt="landing"
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center ">
            <h4 className="font-bold text-xl md:text-3xl ">Order Take-away even faster</h4>
            <p className="text-gray-500 text-center text-sm md:text-base my-5">
              Download the MernEats App for faster ordering and personalised
              recommendations
            </p>
            <div>
              <img src="/assets/appDownload.png" alt="app" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
