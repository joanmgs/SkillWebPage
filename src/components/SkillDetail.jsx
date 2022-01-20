export default function SkillDetail() {
  return (
    <>
      <section>
        <p>Proficiency: {}</p>
        <p>Recommendations: {}</p>
      </section>
      <hr />
      <section>
        <p>{}'s related experiences:</p>
        <h4>{}</h4>
        <p>{}</p>
      </section>
      <hr />
      <section>
        <p>Other people with skills:</p>
        <div>
          <div>
            <img src="/" alt="profile" />
            <div>
              <p>{} {}</p>
              <p>{}</p>
            </div>
          </div>
          <div>
            <i>{}</i>
          </div>
        </div>
      </section>
    </>
  );
}
