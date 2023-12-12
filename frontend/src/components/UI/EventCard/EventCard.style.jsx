import styled from "styled-components";
import { fontWeight } from "../../../config/styles/Typography";
import { ButtonBase } from "../Button/Button.style";

const EventCardContainer = styled.article`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  max-width: 40rem;
`;

const EventCardHeaderImageBox = styled.div`
  position: relative;
  height: 30rem;
  text-align: center;
`;

const EventCardImage = styled.img`
  position: absolute;
  inset: 0;
  object-position: center;
  height: 100%;
`;

const EventCardHeaderBox = styled.header`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(5px);
  padding-block: 1.5rem;
  color: ${({ theme }) => theme["white"]};
  background-image: linear-gradient(
    to right,
    rgb(0 0 0 / 0.1),
    rgb(0 0 0 / 0.1)
  );
`;

const EventCardDateBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme["primary_main"]};
  color: ${({ theme }) => theme["white"]};
  font-weight: ${fontWeight.medium};
  height: 6rem;
  width: 6rem;
  display: grid;
  place-items: center;
  text-align: center;

  & span {
    width: min-content;
  }
`;

const EventCardBody = styled.div`
  padding: 2.2rem;

  & > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    margin-bottom: 2rem;
  }
`;

const EventCardButton = styled(ButtonBase)`
  border-radius: unset;
  width: 100%;
  margin-top: 2rem;
`;

export {
  EventCardContainer,
  EventCardHeaderImageBox,
  EventCardImage,
  EventCardHeaderBox,
  EventCardDateBox,
  EventCardBody,
  EventCardButton,
};
