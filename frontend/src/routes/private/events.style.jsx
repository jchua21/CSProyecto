import styled from "styled-components";
import { breakpoints } from "../../config/styles";

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
  gap: 2rem;
  justify-items: center;
`;

export { EventsGrid };
