import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Email({ email }: { email: string }) {
  return (
    <div>
      <FontAwesomeIcon
        className="w-5 h-5 mr-3 inline-block align-middle"
        icon={faEnvelope}
      />{" "}
      <a
        href={"mailto:" + email}
        className="text-theme-accent hover:text-theme-primary"
      >
        {email}
      </a>
    </div>
  );
}
