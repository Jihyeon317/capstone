import React from "react";
import Map from "../components/MapComponent.js";

const Shelter = () => {
  const dummyMarkers = [  //지도 위의 마커와 중심점을 임의의 dummyMarkers로 설정
    {
      lat: 37.6205,
      lng: 127.0092,
      name: "정릉동 중심",
    },
    {
      lat: 37.6220,
      lng: 127.0105,
      name: "정릉초등학교",
    },
  ]
  
  return(
    <div className="map-container">
      <Map markers={dummyMarkers} />
    </div>
  );
};

export default Shelter;
