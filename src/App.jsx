import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import JobCard from "./components/JobCard";
import Dashboard from "./routes/Dashboard";
import AboutPage from "./routes/AboutPage";

function App() {
  const [jobData, setJobData] = useState("");
  const [page, setPage] = useState(1);
  const [viewData, setViewData] = useState([]);
  const [inputData, setInputData] = useState("");

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
  for (let i = 1; i <= jobData.length / 5; i++) {
    pages.push(i);
  }

  // console.log(viewData);
  useEffect(() => {
    setViewData(jobData.slice(5 * page - 5, 5 * page));
  }, [page, jobData]);

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
      (job) => job.name === inputData || job.title === inputData
    );
    setViewData(searchResult);
    console.log(searchResult);
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
