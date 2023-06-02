import { useEffect, useState } from "react";
import { getReseniaByReceptor,  getFullResenia } from '../../../helpers/backend/reseniaBackend';
import { useLocation } from 'react-router-dom';
import ReseniaCard from "./ReseniaCard";
import { FormattedMessage } from 'react-intl';
import "./ReseniaList.css";

function mapCardElements(reseniaList) {
  return reseniaList.map((resenia) => <ReseniaCard info={resenia} />)
}

function ReseniaList(props) {

  const location = useLocation();
  const idReceptor = location.state.usuarioId;
  const [cardElements, setCardElements] = useState([]);
  const token = localStorage.getItem("sessionToken");

  useEffect(() => async function () {
    const userId = idReceptor;
    const reseniaData = await getReseniaByReceptor(userId, token);
    const asyncRes = await Promise.all(reseniaData.map(async (resenia) => {
      const reseniaFullData = await getFullResenia(resenia.id, token);
      return {reseniaFullData}
    }));
    setCardElements(mapCardElements(asyncRes))
  }, []);

  return (
    <div>
      <h1 style={{ margin: '50px' }}><FormattedMessage id="resenias"/></h1>
      <div className="gallery">{cardElements}</div>
    </div>
  );
}

export default ReseniaList;