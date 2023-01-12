import { Outlet } from "react-router-dom";
import { Nav } from "../Components";

const Root = () => {
  return <div>
    <Nav/>

    <Outlet/>
  </div>;
};
export default Root;