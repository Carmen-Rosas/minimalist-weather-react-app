"use client";
import "./page.css";
import "./components/components.css";
import { useState } from "react";
import { useFetch } from "./useFetch";
import { MainWeather } from "./components/MainWeather";

export default function Home() {
  const data = useFetch();
  console.log(data);

  return (
    <div className="pageContainer">
      <div>
        <div>
          <MainWeather weather = {data?.weather}/>
        </div>
      </div>
    </div>
  );
}
{/* <a href="https://www.flaticon.com/free-icons/sunny" title="sunny icons">Sunny icons created by Freepik - Flaticon</a> */}