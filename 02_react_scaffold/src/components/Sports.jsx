import React, { useState } from "react";

const SportsScoringSystem = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerCountry, setNewPlayerCountry] = useState("");
  const [newPlayerScore, setNewPlayerScore] = useState("");

  const addProject = () => {
    if (newProjectName) {
      const newProject = {
        id: Date.now(),
        name: newProjectName,
        players: [],
      };
      setProjects([...projects, newProject]);
      setNewProjectName("");
    }
  };

  const addPlayerToProject = (projectId) => {
    if (newPlayerName && newPlayerCountry && newPlayerScore && projectId) {
      setProjects(
        projects.map((project) =>
          project.id === projectId
            ? {
                ...project,
                players: [
                  ...project.players,
                  {
                    id: Date.now(),
                    name: newPlayerName,
                    country: newPlayerCountry,
                    score: parseInt(newPlayerScore, 10),
                  },
                ].sort((a, b) => b.score - a.score), // 按分数从高到低排序
              }
            : project
        )
      );
      setNewPlayerName("");
      setNewPlayerCountry("");
      setNewPlayerScore("");
    }
  };

  return (
    <div className="container">
      <h2>体育赛事计分系统</h2>
      <div className="project-form">
        <input
          type="text"
          placeholder="项目名称"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button onClick={addProject}>添加项目</button>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.name}</h3>
            <div className="player-form">
              <input
                type="text"
                placeholder="选手姓名"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
              />
              <input
                type="text"
                placeholder="选手国家"
                value={newPlayerCountry}
                onChange={(e) => setNewPlayerCountry(e.target.value)}
              />
              <input
                type="number"
                placeholder="选手分数"
                value={newPlayerScore}
                onChange={(e) => setNewPlayerScore(e.target.value)}
              />
              <button onClick={() => addPlayerToProject(project.id)}>
                添加选手
              </button>
            </div>
            <div className="players">
              {project.players.map((player) => (
                <div className="player" key={player.id}>
                  姓名：
                  <span>{player.name}</span>
                  国家：
                  <span>{player.country}</span>
                  得分：
                  <span>{player.score}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsScoringSystem;
