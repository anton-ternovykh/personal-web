import MainSectionTitle from "./MainSectionTitle";
import projectData from "./../api/projects.json";
import ProjectRow, { type ProjectProps } from "./ProjectRow";

function KeyProjects() {
  const projects: ProjectProps[] = projectData.data;

  return (
    <section className="">
      <MainSectionTitle title="Key Projects" />
      <div className="grid grid-cols-1 space-y-4 lg:grid-cols-2">
        {projects.map((project) => (
          <div className="pr-5">
            <ProjectRow
              key={project.name}
              name={project.name}
              desc={project.desc}
              techStack={project.techStack}
              benefitsFromProject={project.benefitsFromProject}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyProjects;
