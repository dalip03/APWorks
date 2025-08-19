"use client";

import React from "react";

interface ProgressItem {
  category: string;
  title: string;
  percent: number;
  daysLeft: number;
  color: string; // Tailwind color class
}

const progressData: ProgressItem[] = [
  {
    category: "Execution PODs",
    title: "Delivery Framework",
    percent: 85,
    daysLeft: 2,
    color: "bg-orange-500",
  },
  {
    category: "AI Advisory",
    title: "AI Stack Strategy",
    percent: 60,
    daysLeft: 5,
    color: "bg-blue-500",
  },
  {
    category: "Fractional CTO",
    title: "Strategic Tech Leadership",
    percent: 70,
    daysLeft: 3,
    color: "bg-teal-500",
  },
  {
    category: "Data Engineering",
    title: "Snowflake Stack",
    percent: 50,
    daysLeft: 6,
    color: "bg-green-500",
  },
];

const ProgressDashboard = () => {
  return (
    <section className="py-20 px-6 bg-[#292947]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-white">In-flight</h2>
          <span className="text-sm text-gray-200">Live progress snapshots</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {progressData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between"
            >
              {/* Category */}
              <div className="text-sm text-gray-400 mb-1">{item.category}</div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>

              {/* Percentage + Days left */}
              <div className="text-sm text-gray-600">
                <span className="font-medium">{item.percent}%</span> ·{" "}
                {item.daysLeft} days left
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
