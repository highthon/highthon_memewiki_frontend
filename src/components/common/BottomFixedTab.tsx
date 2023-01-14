import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/common/HomeIcon";
import MyPageIcon from "../../assets/common/MyPageIcon";
import RankIcon from "../../assets/common/RankIcon";
import SearchIcon from "../../assets/common/SearchIcon";

const BottomFixedTab = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <TabContainer>
        <HomeIcon
          onClick={() => {
            navigate("/home");
          }}
          isActive={"/home" === pathname}
        />
        <SearchIcon
          onClick={() => {
            navigate("/search");
          }}
          isActive={"/search" === pathname}
        />
        <RankIcon
          onClick={() => {
            navigate("/rank");
          }}
          isActive={"/rank" === pathname}
        />
        <MyPageIcon
          onClick={() => {
            navigate("/mypage");
          }}
          isActive={"/mypage" === pathname}
        />
      </TabContainer>
      <TabAreaBox />
    </>
  );
};

const TabContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  z-index: 101 !important;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.color.white};
`;

const TabAreaBox = styled.div`
  width: 100%;
  min-height: 49px;
`;

export default BottomFixedTab;
