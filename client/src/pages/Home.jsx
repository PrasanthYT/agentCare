import React from "react";
import Agent from "../assets/Agent";

function Home() {
  const responseCount = () => {
    const count = parseInt(localStorage.getItem("responseCount")) || 0;
    return count;
  };
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
            href="https://agent.ai/profile/pleodhxeca294yy9"
            target="_blank"
          >
            Discover More Features
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-blue-600 ps-2">
                Explore Now
              </span>
              <svg
                className="shrink-0 size-4 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>

        {/* Main Title */}
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            AgentCare Your Personalized AI Health Advisor
          </h1>
        </div>

        {/* Description */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600">
            AgentCare is an AI-powered healthcare assistant that helps users
            analyze symptoms, monitor vitals, schedule appointments, and provide
            real-time emergency alerts. Built with advanced Agent.ai features
            like webhooks, Python scripting, and API integration.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8 gap-6 flex justify-center">
          {/* Primary Button */}
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-blue-600 hover:to-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-500 border border-transparent text-white text-sm font-medium rounded-full py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105"
            href="https://agent.ai/profile/pleodhxeca294yy9"
            target="_blank"
          >
            <img
              src="https://agent.ai/agent.ai-gear/logomark.png"
              alt="agent.ai logo"
              className="w-5"
            />
            agentCare @agent.ai
          </a>

          {/* Secondary Button */}
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gray-200 hover:bg-gray-300 focus:outline-none border border-gray-300 text-gray-700 text-sm font-medium rounded-full py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105"
            href="https://github.com/PrasanthYT/agentCare"
            target="_blank"
          >
            <svg
              className="shrink-0 w-4 h-4 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Contribute in GitHub
          </a>
        </div>
      </div>

      {/* Agent Section */}
      <div className="mt-16">
        <h2 className="text-2xl text-center font-semibold text-gray-800">
          Meet Your Virtual Assistant
        </h2>
        <p className="text-lg text-center text-gray-600 mt-4">
          Our intelligent assistant is here to help you with anything, anytime.
          Try it out now. You have made {responseCount()} responses so far.
        </p>
        <Agent />
      </div>
    </div>
  );
}

export default Home;
