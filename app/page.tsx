"use client";
import "./page.css";
import "./components/components.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { MainWeather } from "./components/MainWeather";
import { Search } from "./components/Search";

export default function Home() {
  const [hidden, setHidden] = useState(true);
  const [lat, setLat] = useState("40.31");
  const [lon, setLon] = useState("-3.70");

  const data = useFetch(lat, lon);

  return (
    <div className="pageContainer">
      <div>
        <img className={`decorTop ${hidden ? "hidden" : ""}`} src="/img/decor-top.svg" />
        <img className={`decorTopIni ${hidden ? "" : "hidden"}`} src="/img/decor-top-ini.svg" />
        <div className="centerPage">
          <MainWeather weather={data?.weather} hidden={hidden} setHidden={setHidden} />
          <Search setHidden={setHidden} hidden={hidden} setLat={setLat} setLon= {setLon} />
        </div>
        <img className={`decorBottom ${hidden ? "hidden" : ""}`} src="/img/decor-bottom.svg" />
        <img className={`decorBottomIni ${hidden ? "" : "hidden"}`} src="/img/decor-bottom-ini.svg" />
        <a hidden href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by Freepik - Flaticon</a>
      </div>
    </div>
  );
}
