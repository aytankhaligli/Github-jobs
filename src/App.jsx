import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import JobCard from "./components/JobCard";
import Dashboard from "./routes/Dashboard";
import AboutPage from "./routes/AboutPage";

function App() {
  const [jobData, setJobData] = useState("");
  const [page, setPage] = useState(1);
  const [viewData, setViewData] = useState("");
  const [inputData, setInputData] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://apis.camillerakoto.fr/fakejobs/jobs");
        const data = await res.json();
        setJobData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, []);

  let pages = [];
  if (viewData?.length < 5) {
    pages.push(1);
  } else {
    for (let i = 1; i <= jobData.length / 5; i++) {
      pages.push(i);
    }
  }

  useEffect(() => {
    let filterData;
    if (isFullTime && !inputCity) {
      filterData = jobData.filter((job) => job.fulltime === "true");
    } else if (!isFullTime && !!inputCity) {
      filterData = jobData.filter(
        (job) => job.city.toLowerCase() === inputCity.toLowerCase()
      );
    } else if (isFullTime && !!inputCity) {
      filterData = jobData.filter((job) => {
        return (
          job.fulltime === "true" &&
          job.city.toLowerCase() === inputCity.toLowerCase()
        );
      });
    } else {
      filterData = jobData.slice(5 * page - 5, 5 * page);
    }
    console.log(filterData);
    setViewData(filterData);
  }, [page, jobData, isFullTime, inputCity]);

  const jobElement =
    viewData &&
    viewData.map((job) => (
      <JobCard
        key={job.id}
        id={job.id}
        name={job.name}
        title={job.title}
        fullTime={job.fulltime}
        city={job.city}
        date={job.date}
        logo={job.logo}
      />
    ));

  const pageElement = pages.map((pg) => {
    const active = {
      backgroundColor: "#1E86FF",
      color: "white",
      border: "none",
    };
    return (
      <div
        className="page-number"
        key={pg}
        style={pg === page ? active : { backgroundColor: "" }}
        onClick={() => setPage(pg)}
      >
        {pg}
      </div>
    );
  });

  function searchJob() {
    const searchResult = jobData.filter(
      (job) =>
        job.name.toLowerCase() === inputData.toLowerCase() ||
        job.title.toLowerCase() === inputData.toLowerCase()
    );
    setViewData(searchResult);
  }

  return (
    <div className="App">
      <h1 className="header">
        <strong className="strong-head">Github</strong> Jobs
      </h1>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              jobElement={jobElement}
              pageElement={pageElement}
              inputData={inputData}
              setInputData={setInputData}
              searchJob={searchJob}
              isFullTime={isFullTime}
              setIsFullTime={setIsFullTime}
              inputCity={inputCity}
              setInputCity={setInputCity}
            />
          }
        />
        <Route path="/:id" element={<AboutPage jobs={jobData} />} />
      </Routes>
      <footer className="footer">
        created by <strong className="dev-name">aytankhaligli</strong> -
        devChallenges.io
      </footer>
    </div>
  );
}

export default App;
