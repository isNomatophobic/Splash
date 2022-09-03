import {
    Routes as RouterRoutes,
    Route,
  } from "react-router-dom";

const Routes = ()=>{
    return(
        <RouterRoutes>
          <Route path="/" element={<>index</>} />
          <Route path="/posts" element={<>posts</>} />
        </RouterRoutes>
    )
}
export default Routes