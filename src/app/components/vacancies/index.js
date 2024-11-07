import React from "react";

export const Vacancies = () => {
  return (
    <>
      <div className="bg-white rounded shadow p-2">
        <h1 className="text-sm font-bold">Current Vacancies</h1>
        <hr className="text-gray my-4" />
        <div className="text-xs">
          <div className="">
            <p className="font-bold">Software Engineer</p>
            <p className="text-primary font-bold flex justify-end">
              3 opening(s)
            </p>
          </div>
          <hr className="text-gray mb-3 mt-1" />
          <div>
            <p>Procurement Officer</p>
            <p className="text-primary font-bold flex justify-end">
              1 opening(s)
            </p>
          </div>
          <hr className="text-gray mb-3 mt-1" />
          <div>
            <p>Accountant</p>
            <p className="text-primary font-bold flex justify-end">
              1 opening(s)
            </p>
          </div>
          <hr className="text-gray mb-3 mt-1" />
          <div>
            <p>Chauffeur</p>
            <p className="text-primary font-bold flex justify-end">2 opening(s)</p>
          </div>
          <hr className="text-gray mb-3 mt-1" />
          <div>
            <p>Quality Assurance</p>
            <p className="text-primary font-bold flex justify-end">1 opening(s)</p>
          </div>
        </div>
      </div>
    </>
  );
};
