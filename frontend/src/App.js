import React, { useEffect, useState } from "react";
import axios from "axios";
//comment.

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    };
    fetchData();
  }, []);
  return (
    <main>
      <div className="row center">
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
    </main>
  );
}

export default App;
