//import components
import Loader from "./Loader";
import Error from "./Error";
import Skills from "./Skills";
//import hooks
import useFetchTorreUser from "../hooks/useFetchTorreUser";
//import styles
import "../styles/UserCard.css";

// user harcoded
// TODO: allow user search instead hardcoded
const username = "joangs";

export default function UserCard() {
  const {
    data: { person, strengths },
    loading,
    isError,
  } = useFetchTorreUser(username);

  if (isError) {
    return <Error />;
  } else if (loading) {
    return <Loader />;
  } else if (person) {
    return (
    <>
      <section className="user-container">
        <img className="profile-picture" src={person.picture} alt="Profile" />
        <h2>{person.name}</h2>
      </section>
      {strengths ? <Skills strengths={ strengths }/> : ""}
    </>
    );
  } else {
    return <h1 style={{ textAlign: "center" }}>Nothing found</h1>;
  }
}
