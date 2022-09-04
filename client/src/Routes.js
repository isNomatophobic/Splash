import ExampleComponent from "components/styled/ExampleComponent";
import {
    Routes as RouterRoutes,
    Route,
  } from "react-router-dom";
const Routes = ()=>{
    return(
        <RouterRoutes>
          <Route path="/" element={<><ExampleComponent>TEST</ExampleComponent></>} />
          <Route path="/posts" element={<>posts</>} />
        </RouterRoutes>
    )
}
export default Routes