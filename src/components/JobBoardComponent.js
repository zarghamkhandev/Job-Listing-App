import React from "react";

const JobBoardComponent = (props) => {
  const tags = [props.job.role, props.job.level];
  if (props.job.languages) {
    tags.push(...props.job.languages);
  }
  if (props.job.tools) {
    tags.push(...props.job.tools);
  }
  return (
    <div className="flex flex-col bg-white p-4 m-2 shadow-lg rounded-lg relative my-16 mx-10 lg:flex-row lg:my-4">
      {props.job.featured ? (
        <div className="bg-gray-900 w-2 h-full top-0 left-0 absolute rounded-tl-lg rounded-bl-lg"></div>
      ) : (
        <div className="bg-white w-2 h-full top-0 left-0 absolute rounded-tl-lg rounded-bl-lg"></div>
      )}
      <div>
        <img
          className="w-20 h-20 -mt-12 lg:mt-0 "
          src={props.job.logo}
          alt={props.job.company}
        ></img>
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <h3 className="font-bold text-teal-500">
          {props.job.company}
          {props.job.new && (
            <span className="bg-teal-500 text-teal-100 m-2 font-bold py-1 px-2 rounded-full text-sm">
              NEW
            </span>
          )}
          {props.job.featured && (
            <span className="bg-gray-800 text-white m-2 font-bold py-1 px-2 rounded-full text-sm">
              FEATURED
            </span>
          )}
        </h3>

        <h2 className="font-bold text-xl">{props.job.position}</h2>
        <p className="text-gray-700">
          {props.job.postedAt} · {props.job.contract} · {props.job.location}
        </p>
      </div>
      <div className="flex items-center mt-4 ml-4 pt-4 border-t-2 border-gray-500 border-solid flex-wrap lg:ml-auto lg:border-t-0 lg:mt-0 lg:pt-0">
        {tags.map((tag) => {
          return (
            <span
              onClick={() => props.filterJobsHandler(tag)}
              className="text-teal-500  bg-teal-100 font-bold mr-4 mb-4 p-2 rounded-lg cursor-pointer lg:mb-0"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default JobBoardComponent;
