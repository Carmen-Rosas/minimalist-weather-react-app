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
    <main>
      <div>
        <div>
          <MainWeather weather = {data?.weather}/>
        </div>
      </div>
    </main>
  );
}
