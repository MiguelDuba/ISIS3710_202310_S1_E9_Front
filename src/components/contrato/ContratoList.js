import { FormattedMessage} from "react-intl";
import {
  getContractByReceptor, getFullContract,
} from ".//../../helpers/backend/contractBackend";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import ContratoCard from "./ContratoCard";


function mapCardElements(contractList) {
    return contractList.map((contract) => <ContratoCard info={contract} />);
}


function ContratoList(){

    const location = useLocation();
    const idReceptor = location.state.usuarioId;
    const [cardElements, setCardElements] = useState([]);
    const token = localStorage.getItem("sessionToken");

    useEffect(() => async function () {
      const userId = idReceptor;
      const contractData = await getContractByReceptor(userId, token);
      console.log("Los datos del contrato son "+contractData);
      const asyncRes = await Promise.all(contractData.map(async (contract) => {
        const contractFullData = await getFullContract(contract.id, token);
        return {contractFullData}
      }));
      setCardElements(mapCardElements(asyncRes))
        
      }, [])

    return (
      <div>
        <h1 style={{ margin: '50px' }}><FormattedMessage id="contratos"/></h1>
        <div className="gallery">{cardElements}</div>
      </div>
    );    
}

export default ContratoList;
