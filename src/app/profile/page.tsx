"use client";
import { authContext } from "@/assets/context/use-context";
import Image from "next/image";
import React, { useContext } from "react";
import { BsCardImage } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

const Profile = () => {
  const { user } = useContext(authContext);
  return (
    <div className="w-10/12 mx-auto">
      <section className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div>
            <IoIosArrowRoundBack />
          </div>
          <div>
            <img
              className="h-10 w-10 rounded-full object-cover shadow-xl"
              src="https://images.pexels.com/photos/4925896/pexels-photo-4925896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div>
            <p className="text-xl font-bold ">{user?.username}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white shadow-2xl rounded px-3 py-2 cursor-pointer">
          <FaUserEdit className="" />
          <p className="text-xs font-bold">Edit Profile</p>
        </div>
      </section>
      <hr className="text-gray mb-4" />
      <section className="flex justify-between gap-4">
        <div className="w-4/12">
          <p className="text-xs uppercase">Profile image</p>
          <img
            className="rounded h-56 mt-4 object-cover shadow-2xl"
            src="https://images.pexels.com/photos/4925896/pexels-photo-4925896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="flex items-center justify-center cursor-pointer gap-2 mt-2">
            <BsCardImage className="text-link" />
            <p className="text-link font-bold text-xs text-center">
              change profile image
            </p>
          </div>
        </div>
        <div className="w-4/12">
          <p className="text-xs uppercase">Role</p>
          <p className="bg-white shadow-2xl rounded-lg px-4 py-2 text-xs mt-4">Employee</p>
          <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
            <span className="text-xs font-thin">hr</span>
            <span className="text-sm font-bold">Roselyda Ayoo</span>
          </div>
          <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
            <span className="text-xs font-thin">lead</span>
            <span className="text-sm font-bold">Jared Oyugi</span>
          </div>
        </div>
        <div className="w-4/12">
          <p className="text-xs uppercase">Onboarding</p>
          <p className="bg-white shadow-2xl rounded-lg px-4 py-2 text-xs mt-4">Active</p>
        </div>
      </section>
      <hr className="text-gray my-4" />
      <section>
        <h1 className="uppercase text-xs">Employee details</h1>
        <section className="flex items-center justify-between gap-4">
          <div className="w-4/12">
            <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
              <span className="text-xs font-thin">firstname</span>
              <span className="text-sm font-bold">Jared Oyugi</span>
            </div>
            <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
              <span className="text-xs font-thin">lastname</span>
              <span className="text-sm font-bold">Jared Oyugi</span>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
              <span className="text-xs font-thin">firstname</span>
              <span className="text-sm font-bold">Jared Oyugi</span>
            </div>
            <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
              <span className="text-xs font-thin">lastname</span>
              <span className="text-sm font-bold">Jared Oyugi</span>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
              <span className="text-xs font-thin">firstname</span>
              <span className="text-sm font-bold">Jared Oyugi</span>
            </div>
            <div className="bg-white shadow-2xl rounded-lg px-4 py-2 text-sm mt-4 flex flex-col">
              <span className="text-xs font-thin">lastname</span>
              <span className="text-sm font-bold">Jared Oyugi</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Profile;
