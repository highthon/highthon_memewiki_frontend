import styled from "@emotion/styled";
import { useState } from "react";
import HeartIcon from "../../assets/heartIcon";

interface Props {
  count: number;
}

const Heart = ({ count }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <HeartBox
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <HeartIcon isClicked={isClicked} />
      <p>{count}</p>
    </HeartBox>
  );
};

const HeartBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  > p {
    font-size: 16px;
  }
`;

export default Heart;
