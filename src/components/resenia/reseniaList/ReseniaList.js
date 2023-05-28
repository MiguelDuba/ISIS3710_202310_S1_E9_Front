import { useEffect, useState } from "react";
import { getReseniaByReceptor, getAutorByResenia, getFullResenia } from '../../../helpers/backend/reseniaBackend';
import ReseniaCard from "./ReseniaCard";
import "./ReseniaList.css";

function mapCardElements(reseniaList) {
  return reseniaList.map((resenia) => <ReseniaCard info={resenia} />)
}

function ReseniaList() {

  const [cardElements, setCardElements] = useState([]);
  const token = localStorage.getItem("sessionToken");

  useEffect(() => async function () {
    const userId = await getReceptor();
    const reseniaData = await getReseniaByReceptor(userId, token);
    const asyncRes = await Promise.all(reseniaData.map(async (resenia) => {
      const reseniaFullData = await getFullResenia(resenia.id, token);
      return {reseniaFullData}
    }));
    setCardElements(mapCardElements(asyncRes))
  }, []);

  const getReceptor = () => {
    const localUsr = localStorage.getItem('userData');
    console.log('localUsr', localUsr);
    if (localUsr) {
      return JSON.parse(localStorage.getItem('userData')).id;
    }
    return false;
  };

  return (
    <div className="gallery">{cardElements}</div>
  );
}

export default ReseniaList;