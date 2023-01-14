import styled from "@emotion/styled";

interface Props {
  text: string;
}

const HashTag = ({ text }: Props) => {
  return <Contents>{text}</Contents>;
};

const Contents = styled.p`
  display: inline;
  font-weight: ${({ theme }) => theme.font.medium};
  font-size: 20px;
  :active {
    color: ${({ theme }) => theme.color.main};
  }
`;

export default HashTag;
