import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function HeaderHero({headerImg}) {
  return (
    <Container headerBg={headerImg}>
      <HeaderText>Make up Slogaannnn</HeaderText>
      <ArrowContainer>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowContainer>
    </Container>
  );
}

export default HeaderHero;

const Container = styled.div`
  margin-top: -10px;
  min-height: 35vh;
  background-image: ${(props) => `url("/bannerimgs/${props.headerBg}")`};
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeaderText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 3rem;
`;

const ArrowContainer = styled.div`
`;