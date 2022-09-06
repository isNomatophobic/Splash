import {
    Routes as RouterRoutes,
    Route,
  } from "react-router-dom";
import { Advertise, Blog, Explore, Home, Layout, Login } from "components";
import Signup from "components/pages/Signup";
const Routes = ()=>{
    return(
        <RouterRoutes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/explore" element={<Explore/>} />
            <Route path="/advertise" element={<Advertise/>} />
            <Route path="/blog" element={<Blog/>} />
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>} />
        </RouterRoutes>
    )
}
export default Routes