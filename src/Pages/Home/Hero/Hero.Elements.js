import { Typography } from "@mui/material";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const HeroContentWrapper = styled.div`
  height: 85%;
  width: 100%;
  top: 140px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImageWrap = styled.div`
  height: 75%;
  width: 45%;
  background: linear-gradient(to bottom, #3c9e63, black);
`;

export const HeroTextWrapper = styled.div`
  width: 43%;
  height: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const HeroText = styled(Typography)`
  width: 60%;
  text-transform: capitalize;
  color: white;
  padding: 1rem;
  letter-spacing: 0.1rem;

  span {
    color: #3c9e63;
  }
`;
