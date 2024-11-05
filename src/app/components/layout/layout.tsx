"use client";
import React from "react";
import MenuChildren from "./menu-children";

const Sidebar = () => {
  return (
    <section className="bg-white shadow h-screen">
      <div className="h-[10vh] flex items-center justify-center">
        <h1 className="text-primary">Logo</h1>
      </div>
      <div className="space-y-10 text-background my-4 px-6 py-8">
        <MenuChildren />
      </div>
    </section>
  );
};

export default Sidebar;