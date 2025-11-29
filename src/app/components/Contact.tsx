import SideBarSectionTitle from "./SideBarSectionTitle";
import contactData from "../api/contact.json";
import Email from "./Email";
import LinkedIn from "./LinkedIn";
import Location from "./Location";
import GitHub from "./GitHub";

function Contact() {
  const { contactEmail, location, linkedIn, github } = contactData;

  return (
    <section>
      <SideBarSectionTitle title="Contact" />
      <div className="flex flex-col text-lg space-y-2">
        <Location location={location} />
        <Email email={contactEmail} />
        <LinkedIn linkedIn={linkedIn} />
        <GitHub github={github} />
      </div>
    </section>
  );
}

export default Contact;
