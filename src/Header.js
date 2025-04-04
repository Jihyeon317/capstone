import { useNavigate } from "react-router-dom";
import{ Link } from 'react-router-dom';

const Header = ({ setFilter }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <header>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">정릉동 한눈에 보기</Link></li>
          <li><Link to="/hospital">병원 모아보기</Link></li>
          <li><Link to="/shelter">대피소 모아보기</Link></li>
          <li><Link to="/facility">편의시설 모아보기</Link></li>
          <li><Link to="/explore">정릉동 돌아아보기</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
