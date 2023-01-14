import styled from "@emotion/styled";
import SearchIcon from "../../assets/Search.png";

const SearchBar = () => {
  return <SearchBarBox placeholder="태그를 검색해주세요." />;
};

const SearchBarBox = styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  border-radius: 12px;
  padding: 8px 40px 8px 8px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 96% center;
  background-size: 24px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  background-color: ${({ theme }) => theme.color.gray300};
  :focus {
    border: 1.5px solid ${({ theme }) => theme.color.main};
  }
`;

export default SearchBar;
