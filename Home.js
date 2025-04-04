import React, { useState, useEffect } from "react";
import Map from "./Map"; // 지도 컴포넌트 가져오기
import { markers } from "../data"; 

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    // Kakao Maps SDK 로드 상태 확인 및 로딩 종료
    const checkLoad = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(checkLoad); 
        setIsLoading(false);
      }
    }, 100); // 100ms 간격으로 확인
  }, []);

  const [filter, setFilter] = useState("all"); // 필터 상태 추가

  // 필터링
  const filteredMarkers = markers.filter(
    (marker) => filter === "all" || marker.type === filter
  );

  return (
    <div>
      <h1>정릉동 한 눈에 보기</h1>
      <div>
        {/* 필터 버튼 */}
        <button onClick={() => setFilter("all")}>전체 보기</button>
        <button onClick={() => setFilter("hospital")}>병원 모아보기</button>
        <button onClick={() => setFilter("shelter")}>대피소 모아보기</button>
        <button onClick={() => setFilter("restaurant")}>음식점 모아보기</button>
        <button onClick={() => setFilter("facility")}>편의시설 모아보기</button>
        <button onClick={() => setFilter("explore")}>정릉동 돌아보기</button>
      </div>
      
      {/* 조건부 렌더링: 로딩 중 상태 표시 또는 지도 표시 */}
      {isLoading ? (
        <div className="loading">로딩 중...</div> // 로딩 상태일 경우
      ) : (
        <Map markers={filteredMarkers} /> // 로드 완료 시 지도 표시
      )}
    </div>
  );
};

export default Home;
