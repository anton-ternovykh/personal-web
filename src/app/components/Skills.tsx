import SideBarSectionTitle from "./SideBarSectionTitle";

import skillsData from "../api/skills.json";
import Skill from "./Skill";

function Skills() {
  const skills: string[] = skillsData.skills;

  return (
    <section>
      <SideBarSectionTitle title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
