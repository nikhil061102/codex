import React, { useEffect, useState } from "react";
import DropdownFilter from "./components/DropdownFilter";

const MainPage = () => {
  const questions = [
    { title: "Weird Algorithm", category: "Introductory Problems", link: "www.google.com" },
    { title: "Missing Number", category: "Introductory Problems", link: "www.google.com" },
    { title: "Repetitions", category: "Introductory Problems", link: "www.google.com" },
    { title: "Increasing Array", category: "Introductory Problems", link: "www.google.com" },
    { title: "Permutations", category: "Introductory Problems", link: "www.google.com" },
    { title: "Number Spiral", category: "Introductory Problems", link: "www.google.com" },
    { title: "Two Knights", category: "Introductory Problems", link: "www.google.com" },
    { title: "Two Sets", category: "Introductory Problems", link: "www.google.com" },
    { title: "Distinct Numbers", category: "Sorting and Searching", link: "www.google.com" },
    { title: "Apartments", category: "Sorting and Searching", link: "www.google.com" },
    { title: "Ferris Wheel", category: "Sorting and Searching", link: "www.google.com" },
    { title: "Concert Tickets", category: "Sorting and Searching", link: "www.google.com" },
    { title: "Dice Combinations", category: "Dynamic Programming", link: "www.google.com" },
    { title: "Minimizing Coins", category: "Dynamic Programming", link: "www.google.com" },
    { title: "Coin Combinations I", category: "Dynamic Programming", link: "www.google.com" },
    { title: "Coin Combinations II", category: "Dynamic Programming", link: "www.google.com" },
    { title: "Counting Rooms", category: "Graph Algorithms", link: "www.google.com" },
    { title: "Labyrinth", category: "Graph Algorithms", link: "www.google.com" },
    { title: "Building Roads", category: "Graph Algorithms", link: "www.google.com" },
    { title: "Message Route", category: "Graph Algorithms", link: "www.google.com" },
    { title: "Static Range Sum Queries", category: "Range Queries", link: "www.google.com" },
    { title: "Static Range Minimum Queries", category: "Range Queries", link: "www.google.com" },
    { title: "Dynamic Range Sum Queries", category: "Range Queries", link: "www.google.com" },
    { title: "Subordinates", category: "Tree Algorithms", link: "www.google.com" },
    { title: "Tree Matching", category: "Tree Algorithms", link: "www.google.com" },
    { title: "Tree Diameter", category: "Tree Algorithms", link: "www.google.com" },
    { title: "Tree Distances I", category: "Tree Algorithms", link: "www.google.com" },
    { title: "Josephus Queries", category: "Mathematics", link: "www.google.com" },
    { title: "Exponentiation", category: "Mathematics", link: "www.google.com" },
    { title: "Exponentiation II", category: "Mathematics", link: "www.google.com" },
    { title: "Counting Divisors", category: "Mathematics", link: "www.google.com" },
    { title: "Word Combinations", category: "String Algorithms", link: "www.google.com" },
    { title: "String Matching", category: "String Algorithms", link: "www.google.com" },
    { title: "Finding Borders", category: "String Algorithms", link: "www.google.com" },
    { title: "Finding Periods", category: "String Algorithms", link: "www.google.com" },
    { title: "Point Location Test", category: "Geometry", link: "www.google.com" },
    { title: "Line Segment Intersection", category: "Geometry", link: "www.google.com" },
    { title: "Polygon Area", category: "Geometry", link: "www.google.com" },
    { title: "Shortest Subsequence", category: "Additional Problems", link: "www.google.com" },
    { title: "Counting Bits", category: "Additional Problems", link: "www.google.com" },
    { title: "Swap Game", category: "Additional Problems", link: "www.google.com" },
    { title: "Prüfer Code", category: "Additional Problems", link: "www.google.com" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filtered, setFiltered] = useState(questions);

  useEffect(() => {
    if(selectedCategory === "All") setFiltered(questions);
    else{setFiltered(questions.filter((question) => question.category === selectedCategory));}
  }, [selectedCategory, questions]);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Add your filtering logic here based on the selected category
    console.log("Selected Category:", category);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DropdownFilter onSelect={handleCategorySelect} />
      <h1>{selectedCategory.toUpperCase()} PROBLEM SET</h1>
      {filtered.map((question, index) => (
        <a href={`/${question.link}`}><h3 key={index}>{question.title}</h3></a>
      ))}
    </div>
  );
};

export default MainPage;
