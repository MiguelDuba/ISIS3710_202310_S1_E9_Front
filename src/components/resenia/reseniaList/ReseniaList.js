import ReseniaCard from "./ReseniaCard";
import "./ReseniaList.css";

function ReseniaList(props) {

  const listElements = props.info;

  const CardElements = listElements.map((resenia) => {
    return <ReseniaCard info={resenia} />;
  });

  return (
    <div className="gallery">{CardElements}</div>
  );
}

export default ReseniaList;