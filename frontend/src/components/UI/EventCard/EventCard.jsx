import {
  EventCardContainer,
  EventCardHeaderImageBox,
  EventCardImage,
  EventCardHeaderBox,
  EventCardDateBox,
  EventCardBody,
  EventCardButton,
} from "./EventCard.style";

import { formatDateDay } from "../../../helpers";

const EventCard = ({
  data: { nombre, descripcion, urlImage, datetime },
  onBtnClick,
}) => {
  return (
    <EventCardContainer>
      <EventCardHeaderImageBox>
        <EventCardImage src={`${urlImage}`} />
        <EventCardHeaderBox>
          <h2>{nombre}</h2>
        </EventCardHeaderBox>
        <EventCardDateBox>
          <span>{formatDateDay(datetime)}</span>
        </EventCardDateBox>
      </EventCardHeaderImageBox>

      <EventCardBody>
        <p>{descripcion}</p>
        <EventCardButton onClick={onBtnClick} variant="primary">
          Ver Informacion
        </EventCardButton>
      </EventCardBody>
    </EventCardContainer>
  );
};

export default EventCard;
