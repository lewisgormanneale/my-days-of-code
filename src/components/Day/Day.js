import React, { useState, useRef, useCallback } from "react";
import { supabase } from "../../supabase.js";
import ReactQuill from "react-quill";
import { toPng } from "html-to-image";
import "./Day.css";
import CodewarsDay from "../CodewarsDay/CodewarsDay.js";

function Day({ currentDay, updates, setUpdates, codewarsData }) {
  const currentDate = currentDay.date.slice(0, 10);
  const ref = useRef(null);
  const [deleteButtonMessage, setDeleteButtonMessage] = useState("Delete Day");

  function confirmDelete(e) {
    if (deleteButtonMessage === "Delete Day") {
      setDeleteButtonMessage("Confirm Delete");
    } else if (deleteButtonMessage === "Confirm Delete") {
      deleteDay(e);
    }
  }

  async function deleteDay(e) {
    e.preventDefault();
    let { data, error } = await supabase
      .from("days")
      .delete()
      .eq("id", currentDay.id);
    if (error) {
      console.log(error);
    }
    setUpdates([...updates, data]);
  }

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `my-day-of-code-${currentDay.day}.png`;
        link.href = dataUrl;
        console.log(dataUrl);
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref, currentDay.day]);

  return (
    <div className="day">
      <div ref={ref} className="screenshot-container">
        <div className="day-header">
          <p>Day #{currentDay.day}</p>
          <img
            src="images/single-day-logo.png"
            alt="logo"
            className="day-logo"
          ></img>
          <p>{currentDate}</p>
        </div>
        <ReactQuill value={currentDay.post} readOnly="true" theme="bubble" />
        <div className="hashtags-and-stats">
          <p>#100DaysOfCode</p>
          <div className="day-stats">
            <CodewarsDay
              currentDate={currentDate}
              codewarsData={codewarsData}
            />
          </div>
          <p>#MyDaysOfCode</p>
        </div>
      </div>
      <div className="day-options">
        <div className="edit-and-delete-day">
          <button className="delete-button" onClick={confirmDelete}>
            {deleteButtonMessage}
          </button>
        </div>
        <div className="share-day">
          <button className="share-button" onClick={onButtonClick}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day;
