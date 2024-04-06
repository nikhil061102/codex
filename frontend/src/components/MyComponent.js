import { MathJax } from 'better-react-mathjax';
import React from 'react';

const MyComponent = () => {
  const config = {
    loader: { load: ["input/asciimath"] }
};
  return (
    
    <div>
      <h1>Displaying LaTeX in React</h1>
      <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
      <MathJax>{"`frac(10)(4x) approx 2^(12)`"}</MathJax>
    </div>
  );
};

export default MyComponent;
