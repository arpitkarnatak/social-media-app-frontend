import React, { useEffect, useState } from "react";
import { IconButtonStyle } from "../../styles/buttons";
import { styled } from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ButtonContainer show={isVisible}>
      <IconButtonStyle onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </IconButtonStyle>
    </ButtonContainer>
  );
};

export default ScrollToTopButton;

interface IButtonContainerProps {
  show: boolean;
}

const ButtonContainer = styled.div<IButtonContainerProps>`
  width: fit-content;
  position: fixed;
  display: ${(props) => (props.show ? "flex" : "none")};
  bottom: 20px;
  right: 20px;
  background: red;
`;
