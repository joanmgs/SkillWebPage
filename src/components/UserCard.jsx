//@ts-nocheck
import useFetchTorreUser from "../hooks/useFetchTorreUser";

// user harcoded
// TODO: allow user search instead hardcoded, manage res.ok === false (it is, the user doesn't exist)
const username = "joangs";

export default function UserCard() {
  const { data: { person }, loading, isError } = useFetchTorreUser(username);
  // console.log(data);
  // if(isError){
  //   return <h1>error: data.message</h1>
  // } else if(!loading) {
  //   return <h1>Loading...</h1>
  // } else {
  //   if(data.errors.length === 0) {
  //     console.log("error:", data.errors);
  //   } else {
  //     console.log("datos:", data, "error: ", isError, "loading: ", loading);
  //   }
  // }

  return (
    <>
      <h1>Hey world</h1>
    </>
  );
};
