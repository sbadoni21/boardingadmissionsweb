import React from "react";

export default function QuestionPalatte({
  testQuestions,
  responses,
  statusCounts,
  handleQuestionNavigation,
  setCurrentQuestionIndex,
}) {
  return (
    <div className="space-y-2 ">
      <p className="font-semibold text-background05">Question Palate</p>
      <div className="grid grid-cols-7 gap-2 ">
        {testQuestions.map((question, index) => {
          const currentQuestionID = question.id;
          let statusClass = "";

          if (responses[currentQuestionID]) {
            statusClass = statusCounts.markedForReview.includes(
              currentQuestionID
            )
              ? "bg-[#FCA311] text-white"
              : "bg-[#4BB53A] text-white";
          } else if (statusCounts.markedForReview.includes(currentQuestionID)) {
            statusClass = "bg-[#E99202] text-white";
          } else {
            statusClass = "border border-background05 text-background05";
          }

          return (
            <button
              key={index}
              className={`w-10 h-10 font-semibold flex justify-center items-center rounded-full ${statusClass}`}
              onClick={() => handleQuestionNavigation(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}