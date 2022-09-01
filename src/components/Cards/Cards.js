import "./Cards.css";
import { Fragment } from "react";

function Cards(props) {
  const { children, img, label, labelColor } = props;

  return (
    <Fragment>
      <div className="container-cards">
        <p className="title-cards">{children}</p>
        <div className="container-cards-info">
          {<img alt="icon" src={require(`./img/${img}.png`)} />}

          <p className={`label-cards ${labelColor}`}>{label}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
