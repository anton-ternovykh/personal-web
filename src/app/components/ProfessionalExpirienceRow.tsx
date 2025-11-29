export interface ProfessionalExpirienceRowProps {
  name: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export default function ProfessionalExpirienceRow(
  props: ProfessionalExpirienceRowProps
) {
  return (
    <div className="mb-6 p-4 border-l-4 border-theme-border rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-2xl font-bold theme-primary">{props.name}</h3>
        <span className="text-lg font-medium text-theme-primary">
          {props.location}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-xl italic font-semibold theme-primary text-sm">
          {props.role}
        </p>
        <span className="text-base text-theme-primary text-sm">{props.period}</span>
      </div>
      <ul className="list-disc ml-6 space-y-1 text-lg text-sm">
        {props.responsibilities.map((item, index) => (
          <li key={index} className="text-theme-primary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
