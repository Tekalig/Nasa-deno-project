import React from "react";
import { Routes, Route } from "react-router-dom";

import usePlanets from "../hooks/usePlanets.ts";
import useLaunches from "../hooks/useLaunches.ts";

import Centered from "../components/Centered.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import Launch from "./Launch.tsx";
import History from "./History.tsx";
import Upcoming from "./Upcoming.tsx";

const AppLayout: React.FC = () => {
  const {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  } = useLaunches();

  const planets = usePlanets();
  
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Header />
      <Centered className="m-2">
          <Routes>
            <Route path="/" element={
              <Launch 
                entered={true}
                planets={planets}
                submitLaunch={submitLaunch}
                isPendingLaunch={isPendingLaunch} />
            } />
            <Route path="/launch" element={
              <Launch
                entered={true}
                planets={planets}
                submitLaunch={submitLaunch}
                isPendingLaunch={isPendingLaunch} />
            } />
            <Route path="/upcoming" element={
              <Upcoming
                entered={true}
                launches={launches}
                abortLaunch={abortLaunch} />
            } />
            <Route path="/history" element={
              <History launches={launches} entered={true} />
            } />
          </Routes>
      </Centered>
      <Footer />
    </div>
  );
};

export default AppLayout;
