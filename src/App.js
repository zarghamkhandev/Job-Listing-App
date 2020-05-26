import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filteredJobs = jobs.filter(({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }
    return filters.every((filter) => tags.includes(filter));
  });

  const filterJobsHandler = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  const filterRemoveHandler = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const clearFilterHandler = () => {
    setFilters([]);
  };
  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="./images/bg-header-desktop.svg" alt="background" />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="bg-white flex p-6 my-6 mx-10 shadow-md rounded">
            {filters.map((filter) => (
              <span
                onClick={() => filterRemoveHandler(filter)}
                className="text-teal-500  bg-teal-100 font-bold mr-4 mb-4 p-2 rounded-lg cursor-pointer cursor-pointer lg:mb-0"
              >
                x {filter}
              </span>
            ))}
            <button
              className="font-bold text-gray-600 ml-auto"
              onClick={clearFilterHandler}
            >
              Clear
            </button>
          </div>
        )}

        {jobs.length === 0 ? (
          <p>Jobs are being fetched</p>
        ) : (
          filteredJobs.map((job) => {
            return (
              <JobBoardComponent
                job={job}
                key={job.id}
                filterJobsHandler={filterJobsHandler}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
