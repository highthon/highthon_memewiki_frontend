import styled from "@emotion/styled";
import Button from "../../components/auth/Button";
import Input from "../../components/auth/Input";
import Navigation from "../../components/auth/Navigation";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <h1>SIGN UP</h1>
      <Input placeholder="닉네임을 입력해주세요" />
      <Input placeholder="이메일을 입력해주세요" />
      <Input placeholder="비밀번호를 입력해주세요" />
      <Button type="signup" />
      <Navigation type="signup" />
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    font-size: 44px;
    font-weight: ${({ theme }) => theme.font.regular};
  }
`;

export default SignUp;
