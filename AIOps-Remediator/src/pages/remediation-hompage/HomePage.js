import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch_GET from "../../services/http/Get";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoading, error, data, getData } = useFetch_GET();
  console.log(data);
  const navigateTo = (url) => {
    navigate(url);
  };

  useEffect(() => {
    getData("/audit-status");
  }, []);

  return (
    <div className="dashboard-container">
      <section className="section-home">
        <h1 className="home-header">Remediation Dashboard</h1>
        <div className="open-problems">
          <div className="problem-count">
            <div className="count-details">
              <p className="count-number">
                <strong>Open Problems</strong>
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ margin: "1rem" }}>{data?.count}</h1>{" "}
                <i class="fa fa-exclamation" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          {/* <i class="fa fa-long-arrow-right" aria-hidden="true"></i> */}
        </div>
      </section>
      <section className="section-home">
        <div className="manage-header">
          <h2>Manage</h2>
        </div>
        <div className="manage-options">
          <div
            className="option"
            onClick={() => {
              navigateTo("/new-rule");
            }}
          >
            <div className="option-text">
              <i class="fa fa-plus-square" aria-hidden="true"></i>
              <p className="option-title">Create Self-healing Rule</p>
              <p className="option-description">
                Define rules to identify problems
              </p>
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              navigateTo("/recommendation");
            }}
          >
            <div className="option-text">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <p className="option-title">Manage Self-healing Rules</p>
              <p className="option-description">View and manage rules</p>
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              navigateTo("/new-problem");
            }}
          >
            <div className="option-text">
              <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              <p className="option-title">
                Create Self-healing Rule (Assisted)
              </p>
              <p className="option-description">View New Problems</p>
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              navigateTo("/audit");
            }}
          >
            <div className="option-text">
              <i class="fa fa-table" aria-hidden="true"></i>
              <p className="option-title">Remediation Audit Records</p>
              <p className="option-description">
                View all remediations history
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-home"
       
      >
        <h2>Recent Incidents</h2>
        {data?.activity?.map((data, index) => (
          <div className="activity" key={index}  onClick={() => {
            navigateTo(`/${data?.pid}/${data?.executedProblemId}`);
          }}>
            <div className="activity-details">
              <p className="activity-title">
                {data?.problemTitle} for {data?.serviceName}
              </p>
              <p className="activity-description">
                Remidiator took <b>{data?.actionType.toLowerCase()}</b> action
                and currunt status is {data?.status}{" "}
              </p>
            </div>
            <p className="activity-time">{data?.ProblemDetectedAt}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
