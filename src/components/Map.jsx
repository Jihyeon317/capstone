import React, { useEffect, useState } from "react";
import "../styles/style.css";

const Map = ({ markers }) => {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      setIsKakaoLoaded(true);
    } else {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d4b501d6aac6842e7ddb324e46cada46&autoload=false`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          setIsKakaoLoaded(true);
        });
      };
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!isKakaoLoaded || !markers || markers.length === 0) {
      console.error("표시할 데이터가 비어 있습니다.");
      return;
    }

    const { kakao } = window;
    const container = document.getElementById("map");
    if (!container) {
      console.error("지도를 표시할 요소 (#map) 를 찾을 수 없습니다.");
      return;
    }

    const options = {
      center: new kakao.maps.LatLng(37.6205, 127.0092), // 정릉3동 좌표
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    setMapInstance(map);

    markers.forEach((marker) => {
      const position = new kakao.maps.LatLng(marker.lat, marker.lng);
      const mapMarker = new kakao.maps.Marker({
        position,
        map,
      });

      const infoWindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:6px;">${marker.name}</div>`,
      });

      kakao.maps.event.addListener(mapMarker, "mouseover", () => {
        infoWindow.open(map, mapMarker);
      });
      kakao.maps.event.addListener(mapMarker, "mouseout", () => {
        infoWindow.close();
      });
    });
  }, [isKakaoLoaded, markers]);

  if (!isKakaoLoaded) return <div>지도를 불러오는 중입니다...</div>;

  return <div id="map" className="map-container" />;
};

export default Map;
