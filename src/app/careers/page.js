import React from "react";
import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import ApplyJobModal from "./apply-job-modal";

const Careers = () => {
  return (
    <div className="bg-background h-screen">
      <div className="bg-primary text-background p-4">
        <h1 className="text-xl">Find your dream job today</h1>
        <small>Looking for jobs? Browse our latest job openings to view</small>
      </div>
      <section className="w-11/12 mx-auto flex gap-2 py-8 overflow-y-auto">
        <div className="w-4/12 space-y-3">
          <section className="w-full bg-white shadow rounded-lg p-4 cursor-pointer">
            <div>
              <h1 className="font-bold text-primary">Product Designer</h1>
              <p className="text-xs mt-2">
                Design and iterate intuitive digital products that delight our
                users
              </p>
              <div className=" border-b border-dashed border-gray my-2"></div>
              <footer className="flex items-center justify-between text-xs">
                <div>
                  <small className="font-bold">23 Applicants</small>
                </div>
                <div className="flex items-center gap-1">
                  <small className="font-bold">Company Verified</small>
                  <MdVerified className="text-primary" />
                </div>
              </footer>
            </div>
          </section>
          <section className="w-full bg-white shadow rounded-lg p-4 cursor-pointer">
            <div>
              <h1 className="font-bold text-primary">Senior Devops Engineer</h1>
              <p className="text-xs mt-2">
                Design and iterate intuitive digital products that delight our
                users
              </p>
              <div className=" border-b border-dashed border-gray my-2"></div>
              <footer className="flex items-center justify-between text-xs">
                <div>
                  <small className="font-bold">23 Applicants</small>
                </div>
                <div className="flex items-center gap-1">
                  <small className="font-bold">Company Verified</small>
                  <MdVerified className="text-primary" />
                </div>
              </footer>
            </div>
          </section>
          <section className="w-full bg-white shadow rounded-lg p-4 cursor-pointer">
            <div>
              <h1 className="font-bold text-primary">Accountant</h1>
              <p className="text-xs mt-2">
                Design and iterate intuitive digital products that delight our
                users
              </p>
              <div className=" border-b border-dashed border-gray my-2"></div>
              <footer className="flex items-center justify-between text-xs">
                <div>
                  <small className="font-bold">23 Applicants</small>
                </div>
                <div className="flex items-center gap-1">
                  <small className="font-bold">Company Verified</small>
                  <MdVerified className="text-primary" />
                </div>
              </footer>
            </div>
          </section>
        </div>
        <div className="w-8/12 bg-white shadow rounded p-4 h-[60vh]">
          <section className="w-full">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-primary">Product Designer</h1>
                <p className="text-xs">
                  Design and iterate intuitive digital products that delight our
                  users
                </p>
              </div>
              <div>
                <ApplyJobModal />
              </div>
            </div>
            <hr className="text-gray my-4" />
            <div>
              <h1 className="font-bold mb-2 text-primary">Job Overview</h1>
              <p className="text-xs leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, molestiae iusto? Similique, unde? Qui sint culpa
                consequuntur eligendi tenetur molestiae eaque quisquam beatae
                quae a assumenda quod corrupti fugiat voluptatem repellendus
                veritatis quam perferendis, omnis fuga animi. Animi, temporibus
                officia?
              </p>
              <h1 className="font-bold my-4 text-primary">What You Will Do</h1>
              <section className="space-y-2">
                <div className="flex items-center gap-2">
                  <GoDotFill className="text-primary" />
                  <small>
                    Sitemap Analytics Sitemap Analytics Sitemap Analytics
                  </small>
                </div>
                <div className="flex items-center gap-2">
                  <GoDotFill className="text-primary" />
                  <small>
                    Sitemap Analytics Sitemap Analytics Sitemap Analytics
                  </small>
                </div>
                <div className="flex items-center gap-2">
                  <GoDotFill className="text-primary" />
                  <small>
                    Sitemap Analytics Sitemap Analytics Sitemap Analytics
                  </small>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Careers;
