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
}) {
  return (
    <>
      <Searchbar
        inputData={inputData}
        setInputData={setInputData}
        searchJob={searchJob}
      />
      <main className="main">
        <Sidebar />
        <div className="jobs">
          {jobElement}
          <div className="pagination">
            <div className="page-number">
              <img src={arrowBack} alt="arrow-back icon" />
            </div>
            {pageElement}
            <div className="page-number">
              <img src={arrowForward} alt="arrow-forward icon" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
