function Skill({ skill }: { skill: string }) {
  return (
    <span
      key={skill}
      className="bg-theme-block-background text-theme-primary text-sm font-medium px-3 py-1 rounded-full"
    >
      {skill}
    </span>
  );
}

export default Skill;
