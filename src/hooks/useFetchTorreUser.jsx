import { useEffect, useState } from "react";

const getUser = async (user = "") => {
  const res = await fetch(`https://torre.bio/api/bios/${user}`);
  const data = await res.json();
  return data;
};

export default function useFetchTorreUser(user = "") {
  const [state, setState] = useState({
    data: [],
    loading: true,
    isError: false,
  });

  useEffect(() => {

    try {
      (async function setFinalState() {
        setState({
          data: await getUser(user),
          loading: false,
          isError: false,
        });
      })();
    } catch (error) {
      console.log(error);
      setState({
        data: [],
        loading: true,
        isError: true,
      });
    }

  }, [user]);

  return state;
}
