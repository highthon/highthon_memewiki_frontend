import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface Props {
  type: "login" | "signup";
}

const Navigation = ({ type }: Props) => {
  return (
    <Container>
      <p>
        {type === "login" ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
      </p>
      <Link to={type === "login" ? "/signup" : "/"}>
        {type === "login" ? "회원가입하기" : "로그인하기"}
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 32px;
  display: flex;
  font-size: 16px;
  height: 20px;
  align-items: center;
  color: ${({ theme }) => theme.color.gray700};
  > a {
    margin-left: 4px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.main};
    cursor: pointer;
  }
`;

export default Navigation;
