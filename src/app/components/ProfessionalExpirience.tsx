import MainSectionTitle from "./MainSectionTitle";
import ProfessionalExpirienceRow, {
  type ProfessionalExpirienceRowProps,
} from "./ProfessionalExpirienceRow";
import professionalExpirience from "../api/professional-expirience.json";

function ProfessionalExpirience() {
  const professionalExpirienceData: ProfessionalExpirienceRowProps[] =
    professionalExpirience.data;

  return (
    <section>
      <MainSectionTitle title="Professional Experience" />
      {professionalExpirienceData.map((exp, index) => (
        <ProfessionalExpirienceRow
          key={index}
          name={exp.name}
          location={exp.location}
          role={exp.role}
          period={exp.period}
          responsibilities={exp.responsibilities}
        />
      ))}
    </section>
  );
}

export default ProfessionalExpirience;
