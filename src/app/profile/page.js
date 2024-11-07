"use client";
import { authContext } from "@/assets/context/use-context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { fetchProfileData } from "../redux/features/profile";
import { useAuth } from "@/assets/hooks/use-auth";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "../components/user-profile";

const Profile = () => {
  const { profileData } = useSelector((store) => store.profile);
  const { user } = useContext(authContext);
  const dispatch = useDispatch();
  const token = useAuth();
  const [showEditComponent, setShowEditComponent] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);


  useEffect(() => {
    if (token && user) {
      dispatch(fetchProfileData(token));
    }
  }, [token]);

  useEffect(() => {
    if(profileData?.profile){
      setIsEditMode(true);
    }else{
      setIsEditMode(false);
    }
  },[profileData])

  return (
    <div className="w-10/12 mx-auto">
      <section className="flex items-center justify-between mb-4">
        <Link href="/dashboard" className="flex items-center gap-2">
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
        </Link>

        {profileData?.profile === null ? (
          <div
          onClick={() => setShowEditComponent(true)}
          className="flex items-center gap-2 bg-primary text-background shadow-2xl rounded px-3 py-2 cursor-pointer"
        >
          <FaUserEdit className="" />
          <p className="text-xs font-bold">Create Profile</p>
        </div>
        ) : (
          <div
            onClick={() => setShowEditComponent(true)}
            className="flex items-center gap-2 bg-primary text-background shadow-xl rounded px-3 py-2 cursor-pointer"
          >
            <FaUserEdit className="" />
            <p className="text-xs font-bold">Edit Profile</p>
          </div>
        )}
      </section>
      <hr className="text-gray mb-4" />
      {showEditComponent ? (
        <EditProfile {...{ setShowEditComponent, profileData,isEditMode }} />
      ) : (
        <>
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
              <p className="text-xs uppercase">Bio</p>
              <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                <span className="text-xs font-thin">role</span>
                <span className="text-sm font-bold">{profileData?.role}</span>
              </div>
              <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                <span className="text-xs font-thin">department</span>
                <span className="text-sm font-bold">
                  {profileData?.profile?.department}
                </span>
              </div>
              <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                <span className="text-xs font-thin">supervisor</span>
                <span className="text-sm font-bold">
                  {profileData?.profile?.supervisor}
                </span>
              </div>
            </div>
            <div className="w-4/12">
              <p className="text-xs uppercase">Employement details</p>
              <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                <span className="text-xs font-thin">bank details</span>
                <span className="text-sm font-bold">
                  {profileData?.profile?.bankAccount}
                </span>
              </div>
              <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                <span className="text-xs font-thin">email</span>
                <span className="text-sm font-bold">{profileData?.email}</span>
              </div>
              <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                <span className="text-xs font-thin">employment status</span>
                <span className="text-sm font-bold">
                  {profileData?.profile?.employmentStatus}
                </span>
              </div>
            </div>
          </section>
          <hr className="text-gray my-4" />
          <section>
            <h1 className="uppercase text-xs">Employee details</h1>
            <section className="flex items-center justify-between gap-4">
              <div className="w-4/12">
                <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                  <span className="text-xs font-thin">firstname</span>
                  <span className="text-sm font-bold">
                    {profileData?.profile?.firstName}
                  </span>
                </div>
                <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                  <span className="text-xs font-thin">lastname</span>
                  <span className="text-sm font-bold">
                    {profileData?.profile?.lastName}
                  </span>
                </div>
              </div>
              <div className="w-4/12">
                <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                  <span className="text-xs font-thin">phonenumber</span>
                  <span className="text-sm font-bold">
                    {profileData?.profile?.phoneNumber}
                  </span>
                </div>
                <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                  <span className="text-xs font-thin">gender</span>
                  <span className="text-sm font-bold">
                    {profileData?.profile?.gender}
                  </span>
                </div>
              </div>
              <div className="w-4/12">
                <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                  <span className="text-xs font-thin">job title</span>
                  <span className="text-sm font-bold">
                    {profileData?.profile?.jobTitle}
                  </span>
                </div>
                <div className="bg-white shadow rounded px-4 py-2 text-sm mt-4 flex flex-col">
                  <span className="text-xs font-thin">employment type</span>
                  <span className="text-sm font-bold">
                    {profileData?.profile?.employmentType}
                  </span>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </div>
  );
};

export default Profile;
