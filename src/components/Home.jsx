import React, { useState } from "react";
import Map from "./Map";
import { markers } from "../data.js"; // 임의 마커 불러오기

const Home = () => {
  const [filter, setFilter] = useState("all");

  // 데이터 확인 (콘솔에 출력)
  console.log("markers 데이터: ", markers);

  // 데이터 필터링
  const filteredMarkers = markers.filter(
    (marker) => filter === "all" || marker.type === filter
  );

  return (
    <div>
      <h1>정릉3동 한 눈에 보기</h1>
      <div>
        <button onClick={() => setFilter("all")}>전체 보기</button>
        <button onClick={() => setFilter("hospital")}>병원 모아보기</button>
        <button onClick={() => setFilter("shelter")}>대피소 모아보기</button>
        <button onClick={() => setFilter("restaurant")}>음식점 모아보기</button>
        <button onClick={() => setFilter("facility")}>편의시설 모아보기</button>
        <button onClick={() => setFilter("explore")}>정릉동 돌아보기</button>
      </div>
      <Map markers={filteredMarkers} />
    </div>
  );
};

export default Home;
