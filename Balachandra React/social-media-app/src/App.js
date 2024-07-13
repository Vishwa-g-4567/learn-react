import { Route, Routes } from "react-router-dom";
import About from "./About";
import Error404 from "./Error404";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import Posts from "./Posts";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <DataProvider>
        <Header title="Social Media App" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<Posts />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
