import styled from "styled-components";

const HeadingBase = styled.h2`
  margin-bottom: 3.5rem;
  text-align: center;

  & > span {
    color: ${({ theme }) => theme["primary_light"]};
  }
`;

export { HeadingBase };
