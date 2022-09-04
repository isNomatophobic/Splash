import {
    Routes as RouterRoutes,
    Route,
  } from "react-router-dom";
import { Advertise, Blog, Explore, Home, Layout } from "components";
const Routes = ()=>{
    return(
        <RouterRoutes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/explore" element={<Explore/>} />
            <Route path="/advertise" element={<Advertise/>} />
            <Route path="/blog" element={<Blog/>} />
          </Route>
        </RouterRoutes>
    )
}
export default Routes