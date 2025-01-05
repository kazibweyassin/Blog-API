import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./components/layout/PrivateLayout";
import CategortyList from "./pages/category/CategoryList";
import PostList from "./pages/post/PostList";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import PublicLayout from "./components/layout/PublicLayout";




function App() {
  return (
    <Routes>
      <Route element={<PrivateLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="categories" element={<CategortyList/>}/>
      <Route path="posts" element={<PostList/>}/>
      <Route path="srofile" element={<Profile/>}/>
      <Route path="setting" element={<Setting/>}/>
      </Route>
      <Route element={<PublicLayout/>}></Route>
      
    </Routes>
  )
}

export default App;
