
export const Vacancies = ({ jobs }) => {
  return (
    <>
      <div className="bg-white rounded shadow p-2 mt-2">
        <h1 className="text-sm font-bold">Current Vacancies</h1>
        <hr className="text-gray my-4" />
        {Array.isArray(jobs) &&
          jobs.map((job) => (
            <div key={job.id} className="text-xs">
              <div className="">
                <p className="font-bold">{job.title}</p>
                <div className="flex items-center justify-between">
                  <small className="text-primary font-bold flex justify-end">
                    {job.applications.length} application(s)
                  </small>
                  <small className="text-primary font-bold flex justify-end">
                    {job.openings} opening(s)
                  </small>
                </div>
              </div>
              <hr className="text-gray mb-3 mt-1" />
            </div>
          ))}
      </div>
    </>
  );
};
