"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { UserContext } from "@/userProvider";

const TestPage = () => {
  const [time, setTime] = useState(20 * 60); // 20 minutes in seconds
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDetails, setUserDetails] = useState({ email: "", phone: "", name: "" });
  const [finalScore, setFinalScore] = useState(null);
  const [showResultForm, setShowResultForm] = useState(false);
  const router = useRouter();
  const { user } = useContext(UserContext);

  const testQuestions = [
    {
      questionID: 1,
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      questionID: 2,
      question: "What is 2 + 2?",
      answer: "4",
      options: ["3", "4", "5", "6"],
    },
    {
      questionID: 3,
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
    },
    {
      questionID: 4,
      question: "What is the largest ocean on Earth?",
      answer: "Pacific Ocean",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
    },
    {
      questionID: 5,
      question: 'Who wrote "To Kill a Mockingbird"?',
      answer: "Harper Lee",
      options: [
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
      ],
    },
  ];

  const calculateScore = () => {
    return testQuestions.reduce((score, question) => {
      if (responses[question.questionID] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const generateRedemptionCode = async () => {
    const code = `REDEEM-${Math.random().toString(36).substr(2, 9)}`;
    await setDoc(doc(db, "redemptionCodes", code), {
      redeemed: false,
    });
    return code;
  };

  const handleSubmit = async () => {
    if (Object.keys(responses).length < testQuestions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const score = calculateScore();
    const redemptionCode = await generateRedemptionCode();

    setFinalScore(score);
    setIsSubmitting(true);
    setShowResultForm(true);

    if (user) {
      // Save user responses and score to Firestore
      await setDoc(doc(db, "users", user.uid), {
        responses,
        score,
        redemptionCode,
        timestamp: new Date(),
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (userDetails.email && userDetails.phone && userDetails.name) {
      await setDoc(doc(db, "userDetails", user.uid), {
        ...userDetails,
        finalScore,
        timestamp: new Date(),
      });

      router.push("/testcompletion");
    } else {
      alert("Please fill out all fields.");
    }
  };

  useEffect(() => {
    if (time === 0 && !isSubmitting) {
      handleSubmit(); // Automatically submit when time is up
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, isSubmitting]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleOptionChange = (questionID, selectedOption) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionID]: selectedOption,
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, testQuestions.length - 1));
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full border border-gray-200">
        {!showResultForm ? (
          <>
            <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Test</h1>
            
            {/* Timer */}
            <div className="bg-gray-200 p-4 rounded-lg mb-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">Time Remaining</h2>
              <p className="text-xl font-bold text-blue-600">{formatTime(time)}</p>
            </div>

            {/* Question Navigation */}
            <div className="flex justify-between mb-8">
              {currentQuestionIndex > 0 && (
                <button 
                  onClick={prevQuestion} 
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                >
                  Previous
                </button>
              )}
              {currentQuestionIndex < testQuestions.length - 1 && (
                <button 
                  onClick={nextQuestion} 
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              )}
            </div>

            {/* Current Question */}
            <div className="mb-8">
              {testQuestions.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mb-4">{testQuestions[currentQuestionIndex].question}</h3>
                  <ul className="space-y-2">
                    {testQuestions[currentQuestionIndex].options.map((option, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name={`question${testQuestions[currentQuestionIndex].questionID}`}
                          value={option}
                          checked={responses[testQuestions[currentQuestionIndex].questionID] === option}
                          onChange={() => handleOptionChange(testQuestions[currentQuestionIndex].questionID, option)}
                          className="form-radio h-5 w-5 text-blue-500"
                        />
                        <label className="text-gray-700">{option}</label>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Submit Button */}
            {currentQuestionIndex === testQuestions.length - 1 && (
              <button 
                onClick={handleSubmit} 
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-colors"
              >
                Submit
              </button>
            )}
          </>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full border border-gray-200">

            <p className="text-xl font-semibold text-center mb-4">Get your Result</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={userDetails.phone}
                  onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition-colors"
              >
                View Full Result
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
