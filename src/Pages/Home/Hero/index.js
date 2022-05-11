import React from "react";
import {
  HeroContainer,
  HeroContentWrapper,
  HeroImageWrap,
  HeroText,
  HeroTextWrapper,
} from "./Hero.Elements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContentWrapper>
        <HeroImageWrap></HeroImageWrap>
        <HeroTextWrapper>
          <HeroText
            variant="h2"
            sx={{ fontWeight: "bolder", fontSize: "5rem" }}
          >
            a normal person tool to help
            <span> better manage</span> your daily tasks
          </HeroText>
        </HeroTextWrapper>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
