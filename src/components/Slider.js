// 슬라이더 양옆의 화살표로 이동 가능
// 가장 좌측에 있는 연도가 해당 연도

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 슬라이더 설정
const sliderSettings = ({
  infinite: true,
  speed: 500,
  slidesToShow: 12,
  slidesToScroll: 1,
});

// 슬라이더 표시 연도
const years = ["2000년", "2010년", "2015년", "2020년", "2022년", "2024년", "2025년 1월", "2025년 2월", "2025년 3월", "2025년 4월", "2025년 5월"]; 

const SliderComponent = () => {

    return (
    <div style={{ position: "absolute", bottom: "10px", left: "50px", width: "65%", minHeight: "100px",
     fontSize: "20px", fontWeight: "bold", zIndex: 150, backgroundColor: "white" }}>
      <Slider {...sliderSettings}>
        {years.map((year) => (
          <div key={year} style={{ display: "flex", alignItems: "center", height: "100px", textAlign: "center", padding: "10px", fontSize: "50px" }}>
            {year}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
