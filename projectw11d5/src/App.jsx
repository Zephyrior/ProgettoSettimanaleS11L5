import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
// import MyMusicCollection from "./components/MyMusicCollection";
import MyMainPage from "./components/MyMainPage";
import MyPlayer from "./components/MyPlayer";
import { BrowserRouter, Route, Routes } from "react-router";
import MyFavourites from "./components/MyFavourites";
// import MyHomePage from "./components/MyHomePage";
// import MyBody from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<MyMainPage />} />
          <Route path="/mylibrary" element={<MyFavourites />} />

          {/* <MyMusicCollection /> */}
        </Routes>
        <MyPlayer />
      </BrowserRouter>
    </>
  );
}

export default App;
