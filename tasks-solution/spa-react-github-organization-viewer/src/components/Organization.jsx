import { useEffect, useState } from "react";
import "./Organization.css";
import Repo from "./Repo.jsx";

function Organization({ orgs, currentOrg, currentOrgData, setCurrentOrg }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchReposDelay = setTimeout(() => {
      fetch(`https://api.github.com/orgs/${currentOrg}/repos`)
        .then((res) => res.json())
        .then((data) => setRepos(data));
    }, 15 * 1000);

    return () => {
      clearTimeout(fetchReposDelay);
      setRepos([]);
    };
  }, [currentOrg]);

  function handleNext() {
    let nextOrg = orgs[orgs.indexOf(currentOrg) + 1];
    if (!nextOrg) {
      nextOrg = orgs[0];
    }
    setCurrentOrg(nextOrg);
  }

  return (
    <div className="org">
      <button onClick={handleNext}>Next</button>

      <h2>{currentOrgData.name}</h2>
      <img src={currentOrgData.avatar_url} alt="" />
      <p>{currentOrgData.description}</p>
      <p>
        {currentOrgData.location} {currentOrgData.followers} followers
      </p>
      <ul>
        {repos?.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
}

export default Organization;
