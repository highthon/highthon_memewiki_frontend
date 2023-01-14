import styled from "@emotion/styled";
import AppBar from "../components/common/AppBar";
import BottomFixedTab from "../components/common/BottomFixedTab";
import Post from "../components/home/Post";

const Home = () => {
  return (
    <>
      <AppBar title="피드" />
      <Post />
      <Post />
      <Post />
      <Post />
      <BottomFixedTab />
    </>
  );
};

export default Home;
