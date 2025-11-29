import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkedIn({ linkedIn }: { linkedIn: string }) {
  return (
    <div>
      <FontAwesomeIcon
        className="w-5 h-5 mr-3 inline-block align-middle"
        icon={faLinkedinIn}
      />{" "}
      <a
        href={linkedIn}
        target="_blank"
        className="text-theme-accent hover:text-theme-primary"
      >
        LinkedIn
      </a>
    </div>
  );
}
