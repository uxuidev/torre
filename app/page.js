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

  const colors = [
    "#A8DADC", // Soft teal
    "#F1FAEE", // Gentle off-white
    "#5D81E1", // Deeper blue
    "#6FCF97", // Fresh mint green
    "#F79F98", // Warm coral
    "#D980FA", // Rich lavender
    "#E1C340", // Muted gold
    "#4895EF", // Vivid sky blue
    "#FF6B6B", // Bold red
    "#5E548E", // Deep purple
    "#F4A261", // Earthy orange
    "#39A2DB", // Ocean blue
    "#8D6E63", // Warm taupe
    "#B388FF", // Vibrant violet
    "#43AA8B", // Deep emerald green
  ];

  useEffect(() => {
    fetchSkills();
  }, [])

  console.log(skills);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 chart-container border-end p-5">
          <h1 className="text-center">Pie Chart</h1>
          {skills.length > 0 ? (
            <Piechart lbl={labels} data={skillCount} colours={colors} pieAR={1} title="Skill Distribution" titleColor="black" lblColor="gray" />
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
        <div className="col-12 col-md-6 barchart-container border-start p-5">
          <h1 className="text-center">Bar Chart</h1>
          {skills.length > 0 ? (
            <BarChart lblData={labels} chartData={skillCount} title="Users count with specific skill" />
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
