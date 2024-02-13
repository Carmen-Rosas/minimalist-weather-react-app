"use client";
import "./page.css";
import "./components/components.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { MainWeather } from "./components/MainWeather";
import { Search } from "./components/Search";

export default function Home() {
  const [hidden, setHidden] = useState(true);
  const [value, setValue] = useState("");

  const data = useFetch(value, "ES");

  return (
    <div className="pageContainer">
      <div>
        <img className={`decorTop ${hidden ? "hidden" : ""}`} src="/img/decor-top.svg" />
        <img className={`decorTopIni ${hidden ? "" : "hidden"}`} src="/img/decor-top-ini.svg" />
        <div className="centerPage">
          <MainWeather weather={data?.weather} hidden={hidden} setHidden={setHidden} />
          <Search setHidden={setHidden} hidden={hidden} value={value} setValue={setValue} />
        </div>
        <img className={`decorBottom ${hidden ? "hidden" : ""}`} src="/img/decor-bottom.svg" />
        <img className={`decorBottomIni ${hidden ? "" : "hidden"}`} src="/img/decor-bottom-ini.svg" />
      </div>
    </div>
  );
}
{/* <a href="https://www.flaticon.com/free-icons/sunny" title="sunny icons">Sunny icons created by Freepik - Flaticon</a> */ }