import { useState } from "react";
import Intro from "../components/Intro"; // Adjust path if needed
import Portfolio from "../components/Portfolio"; // Your main portfolio component

export default function HomeWrapper() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      {!showPortfolio && <Intro onFinish={() => setShowPortfolio(true)} />}
      {showPortfolio && <Portfolio />}
    </>
  );
}
