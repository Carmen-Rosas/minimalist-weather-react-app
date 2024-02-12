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
        <img className="decor" src="/img/decor-top.svg"/>
        <div>
          <MainWeather weather = {data?.weather}/>
        </div>
        <img className="decor2" src="/img/decor-bottom.svg"/>
      </div>
    </div>
  );
}
{/* <a href="https://www.flaticon.com/free-icons/sunny" title="sunny icons">Sunny icons created by Freepik - Flaticon</a> */}