import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const DropdownFilter = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('All');
  
  const options = [
    "All",
    "Introductory Problems",
    "Sorting and Searching",
    "Dynamic Programming",
    "Graph Algorithms",
    "Range Queries",
    "Tree Algorithms",
    "Mathematics",
    "String Algorithms",
    "Geometry",
    "Advanced Techniques",
    "Additional Problems"
  ];

  const handleChange = value => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <Select
      defaultValue="All"
      style={{ width: 200 }}
      onChange={handleChange}
      value={selectedOption}
    >
      {options.map(option => (
        <Option key={option} value={option}>{option}</Option>
      ))}
    </Select>
  );
};

export default DropdownFilter;
