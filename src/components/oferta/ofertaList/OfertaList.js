import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import {
  getFullOffersList,
} from "../../../helpers/backend/offerBackend";
import { GUARDIAN, KANGAROO } from "../../../helpers/constants";
import filterImg from "../../../icons/filter-hmg.svg";
import OfertaCard from "./OfertaCard";
import "./OfertaList.css";

function mapCardElements(offerList) {
  return offerList.map((offer) => <OfertaCard key={offer.id} info={offer} />);
}

function OfertaList() {
  const intl = useIntl();
  const [offerList, setOfferList] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [initDate, setInitDate] = useState(dayjs().locale(intl.locale));
  const [endDate, setEndDate] = useState(
    dayjs().locale(intl.locale).add(1, "d")
  );
  const [offerType, setOfferType] = useState(KANGAROO);
  const [cardElements, setCardElements] = useState([]);


  useEffect(() => {
    if(!navigator.onLine) {
      if(localStorage.getItem('offer-list') === null) {
        setCardElements(mapCardElements([]));
      } else {
        console.log("Getting list from local storage");
          setOfferList(JSON.parse(localStorage.getItem("offer-list")));
          setCardElements(
            mapCardElements(JSON.parse(localStorage.getItem("offer-list")))
          );
      }
  } else {
    getFullOffersList().then((res) => {
      setOfferList(res);
      setCardElements(mapCardElements(res));
      localStorage.setItem("offer-list", JSON.stringify(res));
    });
  }
    
  }, [])

  const updateFilters = () => {
    console.log({
      user: userSearch,
      type: offerType,
      init: initDate,
      end: endDate,
    });

    console.log("at filter", offerList);
    if (offerList) {
      const filtered = offerList.filter(
        (item) =>
          item.usuario.nombre.includes(userSearch) &&
          item.tipoOferta === offerType
      );
      console.log(filtered);
      setCardElements(mapCardElements(filtered));
    }
  };

  const loadInfo = () => {
    if (cardElements.length > 0) {
      return <div className="gallery">{cardElements}</div>;
    }
    return <div className='pwa-loading'>Loading...</div>;
  };
  return (
    <>
      <aside className="filter--sm">
        <Button>
          <FormattedMessage id="filter-v" />
          <span>
            <img
              src={filterImg}
              alt="three lines indicating a filter icon"
            ></img>
          </span>
        </Button>
      </aside>
      <aside className="filter">
        <div>
          <label>
            <FormattedMessage id="user" />
          </label>
          <input
            type="search"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          ></input>
        </div>
        <div>
          <label>
            <FormattedMessage id="offer-type" />
          </label>
          <select
            className="form-select"
            aria-label="form--OfferType-Input"
            onChange={(e) => setOfferType(e.target.value)}
          >
            <option value={KANGAROO}>
              <FormattedMessage id="kangaroo" />
            </option>
            <option value={GUARDIAN}>
              <FormattedMessage id="guardian" />
            </option>
          </select>
        </div>
        <div>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={intl.locale}
          >
            <label>
              <FormattedMessage id="init-date" />
            </label>
            <DatePicker
              value={initDate}
              onChange={(newInitDate) => setInitDate(newInitDate)}
            />
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={intl.locale}
          >
            <label>
              <FormattedMessage id="end-date" />
            </label>
            <DatePicker
              value={endDate}
              onChange={(newEndDate) => setEndDate(newEndDate)}
            />
          </LocalizationProvider>
          <Button onClick={() => updateFilters()}>
            <FormattedMessage id="filter-v" />
          </Button>
        </div>
      </aside>
      {loadInfo()}
    </>
  );
}

export default OfertaList;
