import { useState, useEffect } from "react";
import Organization from "./components/Organization";

function App() {
  const [orgs, setOrgs] = useState([]);
  const [currentOrg, setCurrentOrg] = useState(null);

  const [currentOrgData, setCurrentOrgData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch("orgs.csv");
      const data = await response.text();
      setOrgs(data.split(","));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (orgs.length > 0) {
      setCurrentOrg(orgs[0]);
    }
  }, [orgs]);

  const fetchOrgData = async () => {
    if (currentOrg) {
      try {
        const res = await fetch(`https://api.github.com/orgs/${currentOrg}`);
        const data = await res.json();
        setCurrentOrgData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchOrgData();
  }, [currentOrg]);

  return (
    <>
      {currentOrgData && (
        <Organization
          orgs={orgs}
          currentOrg={currentOrg}
          currentOrgData={currentOrgData}
          setCurrentOrg={setCurrentOrg}
        />
      )}
    </>
  );
}

export default App;
