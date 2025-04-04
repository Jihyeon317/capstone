import React, { useEffect } from "react";
import "../styles/style.css";

const MapComponent = ({ markers }) => {
  useEffect(() => {
    if (!markers || markers.length === 0) {
      console.error("Markers 데이터가 비어 있습니다.");
      return;
    }

    const { kakao } = window;
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.6205, 127.0092), //지도의 중심점 설정정
      level: 3, // 기본 확대 비율 설정
    };
    const map = new kakao.maps.Map(container, options);

    markers.forEach((marker) => {
      const position = new kakao.maps.LatLng(marker.lat, marker.lng);
      const mapMarker = new kakao.maps.Marker({
        position,
        map,
      });

      const infoWindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">${marker.name}</div>`,
      });

      kakao.maps.event.addListener(mapMarker, "mouseover", () => {
        infoWindow.open(map, mapMarker);
      });
      kakao.maps.event.addListener(mapMarker, "mouseout", () => {
        infoWindow.close();
      });
    });
  }, [markers]);

  if (!markers || markers.length === 0) {
    return <div>표시할 데이터가 존재하지 않습니다.</div>;
  }

  return (
   <div className="map-container">
    <div id="map"></div>
  </div>
  );

};

export default MapComponent;
