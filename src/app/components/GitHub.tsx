import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GitHub({ github }: { github: string }) {
  return (
    <div>
      <FontAwesomeIcon
        className="w-5 h-5 mr-3 inline-block align-middle"
        icon={faGithub}
      />{" "}
      <a
        href={github}
        target="_blank"
        className="text-theme-accent hover:text-theme-primary"
      >
        GitHub
      </a>
    </div>
  );
}
