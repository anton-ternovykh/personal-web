import SideBarSectionTitle from "./SideBarSectionTitle";

function Education() {
  return (
    <section>
      <SideBarSectionTitle title="Education" />
      <div className="space-y-4">
        <div className="p-3 border-l-4 border-theme-border rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">
            Moscow State Technical University of Civil Aviation{" "}
          </h3>
          <p className="text-lg text-theme-primary">M.S. in Engineering</p>
          <p className="text-sm text-theme-primary">2007</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
