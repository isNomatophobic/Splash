import {
    Routes as RouterRoutes,
    Route,
  } from "react-router-dom";
import { Advertise, Blog, Explore, Home, Layout, Login,Signup } from "pages";
const Routes = ()=>{
    return(
        <RouterRoutes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>} />
        </RouterRoutes>
    )
}
export default Routes