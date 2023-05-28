import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedPlural,
} from "react-intl";
import { getOffers, getUserbyOffer } from '../../../helpers/backend/offerBackend';
import { GUARDIAN, KANGAROO } from "../../../helpers/constants";
import filterImg from '../../../icons/filter-hmg.svg';
import OfertaCard from "./OfertaCard";
import "./OfertaList.css";


function mapCardElements(offerList) {
  return offerList.map((offer) => <OfertaCard info={offer} />)
}

function OfertaList() {
  const [userSearch, setUserSearch] = useState();
  const [initDate, setInitDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "d"));
  const [offerType, setOfferType] = useState(KANGAROO);

  const [cardElements, setCardElements] = useState([]);

  useEffect(() => async function () {
    const offerData = await getOffers();
    const asyncRes = await Promise.all(offerData.map(async (offer) => {
      const userData = await getUserbyOffer(offer.id, offer.usuario.id);
      return {...offer, "usuario": userData}
    }));
    setCardElements(mapCardElements(asyncRes))
  }, []);

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
          <FormattedMessage id='filter' />
          <span><img src={filterImg}></img></span>
        </Button>
      </aside>
      <aside className='filter'>
        <div>
        <label><FormattedMessage id='user'/></label>
        <input 
          type="search"
          value={userSearch}
          onChange={(e) => {
            setUserSearch(e.target.value); updateFilters()
          }}
        ></input>
        </div>
        <div>
        <label><FormattedMessage id='offer-type'/></label>
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
          <label><FormattedMessage id='init-date'/></label>
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
          <label><FormattedMessage id='end-date'/></label>
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
