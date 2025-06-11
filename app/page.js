"use client"
//import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Piechart from "./data/visuals/Piechart";
import BarChart from "./data/visuals/Barchart";

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [labels, setLabels] = useState([]);
  const [skillCount, setSkillCount] = useState([]);
  const fetchSkills = async () => {
    try {
      const res = await fetch('/api/fetch/skills');
      const data = await res.json();
      setSkills(data);
      createVals(data);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  const createVals = (data) => {
    let lbls = [];
    let skillCounts = {};

    for (let i = 0; i < data.length; i++) {
      const skillName = data[i].skill; // Fix skill access

      if (!lbls.includes(skillName)) {
        lbls.push(skillName);
      }

      // Count occurrences
      skillCounts[skillName] = (skillCounts[skillName] || 0) + 1;
    }

    // Convert skillCounts object to an array
    let skillData = Object.values(skillCounts);

    // Set state AFTER processing all data
    setLabels(lbls);
    setSkillCount(skillData);
  };


  const getSkillCount = data => {
    let lbls = [];
    for (let i = 0; i < data.length; i++) {
      if (!lbls.includes(data.skill)) {
        lbls.push(data.skill);
      }
    }
    setLabels(lbls);
  }

  // Extract labels and numerical data
  //const labels = skills.map((s) => s.skill); // Skill names
  /* const data = skills.map((s) => {
    // Convert skill levels to numeric values
    const levelMapping = { beginner: 1, intermediate: 2, advanced: 3, expert: 4, master: 5 };
    return levelMapping[s.level] || 0;
  }); */

  const colors = ["#ABF6384", "#CDA2EB", "#99CE56", "#00AF50", "#5527B0", "#FF6999", "#36ABBB", "#FFCAAA", "#4CA229", "#9C2432", "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"];

  const barlabels = ["January", "February", "March", "April", "May", "June", "July"];
  const chartData = [65, 59, 80, 81, 56, 55, 40];

  useEffect(() => {
    fetchSkills();
  }, [])

  console.log(skills);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 chart-container">
          <h1 className="text-center">Pie Chart</h1>
          {skills.length > 0 ? (
            <Piechart lbl={labels} data={skillCount} colours={colors} pieAR={1} title="Skill Distribution" titleColor="black" lblColor="gray" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="col-12 col-md-6 barchart-container">
          <h1 className="text-center">Bar Chart</h1>
          {skills.length > 0 ? (
            <BarChart lblData={labels} chartData={skillCount} title="Users count with specific skill" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
