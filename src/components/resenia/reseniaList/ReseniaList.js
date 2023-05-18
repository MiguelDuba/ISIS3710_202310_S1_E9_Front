import { useEffect, useState } from "react";
import { getResenias, getUserbyResenia } from '../../../helpers/backend/reseniaBackend';
import ReseniaCard from "./ReseniaCard";
import "./ReseniaList.css";

function mapCardElements(reseniaList) {
  return reseniaList.map((resenia) => <ReseniaCard info={resenia} />)
}

function ReseniaList() {

  const [cardElements, setCardElements] = useState([]);

  useEffect(() => async function () {
    const reseniaData = await getResenias();
    const asyncRes = await Promise.all(reseniaData.map(async (resenia) => {
      const userData = await getUserbyResenia(resenia.id, resenia.usuario.id);
      return {...resenia, "usuario": userData}
    }));
    setCardElements(mapCardElements(asyncRes))
  }, []);

  return (
    <div className="gallery">{cardElements}</div>
  );
}

export default ReseniaList;