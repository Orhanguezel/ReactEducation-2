import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import spinner from "../images/spinner-solid.svg";

function ImageItem({ url }) {
  const [loaded, setLoaded] = useState(false);
  const Images = styled.img`
    width: ${(props) => props.width};
    alt: ${(props) => props.alt};
    display: ${(props) => props.display};
    animation: ${(props) => (props.rotate ? rotate : "")} 2.5s linear;
  `;

  const Container = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const rotate = keyframes`
  to{
  transform: rotate(360deg);
  }
  `;

  return (
    <Container>
      <Images
        src={spinner}
        width="40px"
        alt="spinner"
        display={loaded ? "none" : ""}
        rotate
      />
      <Images
        src={url}
        alt="a random picture"
        width="100%"
        display={loaded ? "" : "none"}
        onLoad={() => setLoaded(true)}
      />
    </Container>
  );
}

export default ImageItem;
