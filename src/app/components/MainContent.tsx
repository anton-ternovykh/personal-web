import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <div className="flex w-full h-screen pb-8">
      <div className="w-full scrollbar-thin overflow-y-auto roboto-400 pl-4 pt-4 pr-4">
        <Outlet />
      </div>
    </div>
  );
}
export default MainContent;
