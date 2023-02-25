import React from "react";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

import arrowBack from "../assets/images/arrow_back.svg";
import arrowForward from "../assets/images/arrow_forward.svg";

export default function Dashboard({
  jobElement,
  pageElement,
  inputData,
  setInputData,
  searchJob,
  isFullTime,
  setInputCity,
  setIsFullTime,
  inputCity,
}) {
  // console.log(jobElement);
  return (
    <>
      <Searchbar
        inputData={inputData}
        setInputData={setInputData}
        searchJob={searchJob}
      />
      <main className="main">
        <Sidebar
          isFullTime={isFullTime}
          setIsFullTime={setIsFullTime}
          inputCity={inputCity}
          setInputCity={setInputCity}
        />
        <div className="jobs">
          {jobElement}
          {jobElement?.length ? (
            <div className="pagination">
              <div className="page-number">
                <img src={arrowBack} alt="arrow-back icon" />
              </div>
              {pageElement}
              <div className="page-number">
                <img src={arrowForward} alt="arrow-forward icon" />
              </div>
            </div>
          ) : (
            <div className="no-match">Don't have any match!</div>
          )}
        </div>
      </main>
    </>
  );
}
