import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

export default function Location({ location }: { location: string }) {
  return (
    <div>
      <FontAwesomeIcon
        className="w-5 h-5 mr-3 inline-block align-middle"
        icon={faEarthAmerica}
      />{" "}
      {location}
    </div>
  );
}
