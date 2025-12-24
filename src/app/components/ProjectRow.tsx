export interface ProjectProps {
  name: string;
  desc: string;
  techStack: string[];
  benefitsFromProject: string[];
  url?: string | null;
}

export default function ProjectRow(props: ProjectProps) {
  const projectUrlExists = props.url && props.url.length > 0;

  return (
    <div className="p-4 border-l-4 border-theme-border rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-bold text-theme-primary">{props.name}</h3>
      <p className="text-theme-primary italic pt-3">{props.desc}</p>
      <p className="mt-2 text-base">
        Technologies Used:{" "}
        {props.techStack.map((value, index) => (
          <span key={index} className="text-theme-primary">
            {value}
            {index < props.techStack.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="mt-2 text-base font-bold">Benefits for the business:</p>
      <ul className="list-disc pl-5">
        {props.benefitsFromProject.map((value, index) => (
          <li key={index} className="text-theme-primary">
            {value}
          </li>
        ))}
      </ul>
      {projectUrlExists ? (
        <a
          href="#"
          target="_blank"
          className="text-theme-primary hover:text-theme-primary text-sm mt-1 inline-block"
        >
          View Live/Source Code &rarr;
        </a>
      ) : null}
    </div>
  );
}
