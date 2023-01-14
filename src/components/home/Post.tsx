import styled from "@emotion/styled";
import MeatballIcon from "../../assets/meatballmenu.png";
import HashTag from "../common/HashTag";
import Heart from "./Heart";
import RemixIcon from "../../assets/remix.png";

const Post = () => {
  return (
    <PostContainer>
      <img src={MeatballIcon} />
      <NickName>@memewiki</NickName>
      <HashTag text="#뉴진스의_하입보이요" />
      <MediaBox />
      <div>
        <Heart count={98} />
        <img src={RemixIcon} />
      </div>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.gray500};
  position: relative;
  padding: 12px 0px;
  > img {
    position: absolute;
    right: 0;
    width: 32px;
    height: 32px;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 24px;
    > img {
      width: 26px;
      height: 26px;
    }
  }
`;

const MediaBox = styled.div`
  width: 100%;
  height: 166px;
  margin: 6px 0 12px;
  background-color: ${({ theme }) => theme.color.gray500};
  border-radius: 12px;
`;

const NickName = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color.gray700};
`;

export default Post;
