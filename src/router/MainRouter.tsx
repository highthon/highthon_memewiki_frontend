import { Route, Routes } from "react-router";
import { Home, Login, MyPage, Rank, Search, SignUp } from "../pages";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="rank" element={<Rank />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
