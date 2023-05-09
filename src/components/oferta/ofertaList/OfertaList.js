import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";
import { GUARDIAN, KANGAROO } from "../../../helpers/constants";
import OfertaCard from "./OfertaCard";
import "./OfertaList.css";

function OfertaList(props) {
  const [userSearch, setUserSearch] = useState();
  const [initDate, setInitDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "d"));
  const [offerType, setOfferType] = useState(KANGAROO);
  const listElements = props.info;

  const uiCardElements = listElements.map((offer) => {
    return <OfertaCard info={offer} />;
  });

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
      <aside className='filter'>
        <label>Usuario</label>
        <input 
          type="search"
          value={userSearch}
          onChange={(e) => {
            setUserSearch(e.target.value); updateFilters()
          }}
        ></input>

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Fecha Inicio</label>
          <DatePicker
            value={initDate}
            onChange={(newInitDate) => {setInitDate(newInitDate);
              updateFilters();
            }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label>Fecha Inicio</label>
          <DatePicker
            value={endDate}
            onChange={(newEndDate) => {setEndDate(newEndDate);
              updateFilters();
            }}
          />
        </LocalizationProvider>
      </aside>
      <div className="gallery">{uiCardElements}</div>
    </>
  );
}

export default OfertaList;
