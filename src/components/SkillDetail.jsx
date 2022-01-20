//@ts-nocheck
import { useLocation } from "react-router-dom";
import iconForSkills from "../helper/iconForSkills";

export default function SkillDetail() {
  const { state: { data, proficiencyName, icon } } = useLocation();

  return (
    <>
      <h1>{data.name}</h1>
      <section>
        <p>Proficiency: <i>{iconForSkills(icon)}</i>{proficiencyName}</p>
        <p>Recommendations: {data.recommendations}</p>
      </section>
      <hr />
      {/* <section>
        <p>{}'s related experiences:</p>
        <h4>{}</h4>
        <p>{}</p>
      </section>
      <hr /> */}
    </>
  );
}
