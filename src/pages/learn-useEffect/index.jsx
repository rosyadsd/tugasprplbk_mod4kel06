import React, { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import "./index.css";

export default function index() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (count > 0) {
      alert(`component will update & count ${count}`);
    }
  }, [count]);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="Main">
        <h3> USE EFFECT | KEL 06 </h3>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <ol>
          {data.map((member, index) => (
            <li>
              {" "}
              {member.name.first} {member.name.last}{" "}
            </li>
          ))}
        </ol>
        <div style={{ marginBottom: "15px" }}>
          <button onClick={countUp}>Up</button>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <button onClick={countDown}>Down</button>
        </div>
      </div>
    </>
  );
}
