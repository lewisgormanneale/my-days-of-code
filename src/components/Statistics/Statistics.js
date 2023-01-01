import React from "react";
import CodewarsStats from "../CodewarsStats/CodewarsStats";
import "./Statistics.css";
import Footer from "../Footer/Footer";

export default function Statistics() {
  return (
    <div className="statistics-page">
      <div className="statistics-window">
        <h1>Codewars Statistics</h1>
        <CodewarsStats />
        <h1>More Statistics Coming Soon!</h1>
      </div>
      <Footer />
    </div>
  );
}
