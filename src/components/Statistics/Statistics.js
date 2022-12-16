import React from "react";
import CodewarsStats from "../CodewarsStats/CodewarsStats";
import "./Statistics.css";
import Footer from "../Footer/Footer";

export default function Statistics() {
  return (
    <div className="statistics-page">
      <div className="statistics-window">
        <CodewarsStats />
      </div>
      <Footer />
    </div>
  );
}
