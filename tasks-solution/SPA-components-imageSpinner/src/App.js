import ImageItem from "./components/ImageItem.js";
import imageLinks from "./imageLinks.js";
import styled from "styled-components";

function App() {
  const H1 = styled.h1`
    text-align: center;
  `;
  const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `;
  return (
    <>
      <H1>
        <h1>Image spinner Demo</h1>
      </H1>
      <Images>
        {imageLinks.map((link) => (
          <ImageItem key={link} url={link} />
        ))}
      </Images>
    </>
  );
}

export default App;
