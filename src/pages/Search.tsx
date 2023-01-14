import styled from "@emotion/styled";
import AppBar from "../components/common/AppBar";
import BottomFixedTab from "../components/common/BottomFixedTab";
import SearchBar from "../components/search/SearchBar";

const Search = () => {
  return (
    <>
      <AppBar title="탐색" />
      <SearchBar />
      <BottomFixedTab />
    </>
  );
};

export default Search;
