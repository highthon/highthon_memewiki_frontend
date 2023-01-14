export const checkEmail = (email: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  if (!regex.test(email)) throw Error("이메일을 다시 입력해주세요.");
};

export const checkPassword = (password: string) => {
  const regex = /^.{8,}$/;
  if (!regex.test(password)) throw Error("비밀번호는 8자 이상입니다.");
};

export const checkNickname = (nickname: string) => {
  const regex = /^.{2,}$/;
  if (!regex.test(nickname)) throw Error("닉네임은 2자 이상입니다.");
};
