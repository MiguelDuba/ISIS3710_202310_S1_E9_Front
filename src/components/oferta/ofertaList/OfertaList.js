import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { BASE_URL, GUARDIAN, KANGAROO } from "../../../helpers/constants";
import filterImg from '../../../icons/filter-hmg.svg';
import OfertaCard from "./OfertaCard";
import "./OfertaList.css";


async function getOffer() {
  return fetch(`${BASE_URL}/ofertas`)
    .then((response) => response.json())
    .then((data) => data);
}
async function getUserOfOffer(offer) {
    const userId = offer.usuario.id; 
    console.log('o-u', userId)
    return fetch(`${BASE_URL}/ofertas/${offer.id}/usuarios/${userId}`)
    .then((response) => response.json())
    .then((data) => data);
}

function mapCardElements(offerList) {
  return offerList.map((offer) => <OfertaCard info={offer} />)

}

function OfertaList() {
  const [offerList, setOfferList] = useState([])
  const [userSearch, setUserSearch] = useState();
  const [initDate, setInitDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "d"));
  const [offerType, setOfferType] = useState(KANGAROO);

  const [cardElements, setCardElements] = useState([]);

  useEffect(() => async function () {
    const offerData = await getOffer();
    const asyncRes = await Promise.all(offerData.map(async (offer) => {
      const userData = await getUserOfOffer(offer);
      return {...offer, "usuario": userData}
    }));
    
    setOfferList(asyncRes)
    setCardElements(mapCardElements(asyncRes))
  }, [offerList]);

  // const uiCardElements = offerList.map((offer) => {
  //   return <OfertaCard info={offer} />;
  // });

  const updateFilters = () => {
    console.log({
      user: userSearch, 
      type: offerType, 
      init: initDate, 
      end: endDate,
    })
  }
  return (
    <>
      <aside className='filter--sm'>
        <Button>
          Filtros
          <span><img src={filterImg}></img></span>
        </Button>
      </aside>
      <aside className='filter'>
        <div>
        <label>Usuario</label>
        <input 
          type="search"
          value={userSearch}
          onChange={(e) => {
            setUserSearch(e.target.value); updateFilters()
          }}
        ></input>
        </div>
        <div>
        <label>Tipo Oferta</label>
        <select className='form-select'
          aria-label="form--OfferType-Input"
          onChange={(e) => {
            setOfferType(e.target.value);
            updateFilters()
          }}
        >
          <option value={KANGAROO}>Canguro</option>
          <option value={GUARDIAN}>Acudiente</option>
        </select>
        </div>
        <div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Fecha Inicio</label>
          <DatePicker
            value={initDate}
            onChange={(newInitDate) => {setInitDate(newInitDate);
              updateFilters();
            }}
          />
        </LocalizationProvider>
        </div>
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Fecha Inicio</label>
          <DatePicker
            value={endDate}
            onChange={(newEndDate) => {setEndDate(newEndDate);
              updateFilters();
            }}
          />
        </LocalizationProvider>
        </div>
      </aside>
      <div className="gallery">{cardElements}</div>
    </>
  );
}

export default OfertaList;
