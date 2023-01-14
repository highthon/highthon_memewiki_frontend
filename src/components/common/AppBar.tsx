import styled from "@emotion/styled";
import noticeIcon from "../../assets/common/notice.png";

interface Props {
  title: string;
}

const AppBar = ({ title }: Props) => {
  return (
    <>
      <AppBarContainer>
        <h1>{title}</h1>
        <img src={noticeIcon} />
      </AppBarContainer>
      <Blank />
    </>
  );
};

const AppBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  z-index: 101 !important;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  > h1 {
    font-weight: ${({ theme }) => theme.font.medium};
    margin: 0;
  }
  > img {
    width: 40px;
    height: 40px;
  }
`;

const Blank = styled.div`
  width: 100%;
  height: 64px;
`;

export default AppBar;
