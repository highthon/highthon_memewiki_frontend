import styled from "@emotion/styled";

interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <>
      <InputBox placeholder={placeholder} />
    </>
  );
};

const InputBox = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  padding: 16px;
  font-size: 16px;
  outline: none;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  :focus {
    border: 1px solid ${({ theme }) => theme.color.main};
  }
`;

export default Input;
