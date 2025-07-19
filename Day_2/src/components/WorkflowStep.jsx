import React from "react";

const WorkflowStep = ({ step, title, emoji }) => {
  return (
    <div className="text-center animate-slide-up delay-100">
      <div className="text-5xl mb-3">{emoji}</div>
      <div className="text-lg font-bold mb-1">Step {step}</div>
      <div className="text-gray-700">{title}</div>
    </div>
  );
};

export default WorkflowStep;
