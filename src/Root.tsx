import { Outlet } from "react-router-dom";
import Header from "./app/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Root;
