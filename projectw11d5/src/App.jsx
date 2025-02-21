import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
// import MyMusicCollection from "./components/MyMusicCollection";
import MyMainPage from "./components/MyMainPage";
// import MyPlayer from "./components/MyPlayer";
// import MyHomePage from "./components/MyHomePage";
// import MyBody from "./components/Body";

function App() {
  return (
    <>
      <MyNavBar />
      <MyMainPage />
      {/* <MyMusicCollection /> */}
      {/* <MyPlayer /> */}
    </>
  );
}

export default App;
