import React from "react";
import { Link } from "react-router-dom";
import Description from "../components/Description";

export default function About({ jobs }) {
  return (
    <div className="main">
      <div className="sidebar">
        <Link to="/" className="back-btn">
          <p> ← </p>
          <p>Back to search</p>
        </Link>
        <h2 className="how-apply">HOw to Apply</h2>
        <p className="how-text">
          Please email a copy of your resume and online portfolio to
          <a href="wes@kasisto.com"> wes@kasisto.com</a> & CC{" "}
          <a href="eric@kasisto.com">eric@kasisto.com</a>
        </p>
      </div>
      <main className="job-info">
        <Description jobs={jobs} />
      </main>
    </div>
  );
}
