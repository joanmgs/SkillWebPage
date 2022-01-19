//@ts-nocheck
//import components
import Loader from "./Loader";
import Error from "./Error";
//import hooks
import useFetchTorreUser from "../hooks/useFetchTorreUser";
//import styles

import "../styles/UserCard.css";

// user harcoded
// TODO: allow user search instead hardcoded, manage res.ok === false (it is, the user doesn't exist)
const username = "joangs";

export default function UserCard() {
  const {
    data: { person, strengths },
    loading,
    isError,
  } = useFetchTorreUser(username);

  if (isError) {
    return <Error />;
  } else if (!person || !strengths || !loading) {
    return <Loader />;
  } else if (person) {
    return (
      <>
        <img className="profile-picture" src={person.picture} alt="Profile" />
        <h2>{person.name}</h2>
        <div>
          <h3>Skill and interests:</h3>
        </div>
      </>
    );
  }
}
