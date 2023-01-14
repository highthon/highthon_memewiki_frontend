import styled from "@emotion/styled";
import { useNavigate } from "react-router";

interface Props {
  type: "login" | "signup";
}

const Button = ({ type }: Props) => {
  const navigate = useNavigate();

  const onClickButton = () => {
    if (type === "login") {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <ButtonWrapper onClick={onClickButton}>
      {type === "login" ? "로그인" : "회원가입"}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 40px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  font-weight: ${({ theme }) => theme.font.medium};
`;

export default Button;
