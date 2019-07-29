import React from "react";
import styled from "styled-components";

const FaqContainer = styled.div`
  width: 60%;
  padding: 20px 20%;
  li {
    color: #fff;
  }
`;

const Faq = () => (
  <FaqContainer>
    <h3>FAQ</h3>

    <ol>
      <li>
        <p>Q: How to use this generator?</p>
        <p>
          A: The generator is very simple to use. You can get a logo in just 4
          steps:
        </p>
        <ul>
          <li>
            Choose a style (e.g. Horizontal/Vertical, Pornhub/Youtube/...).
          </li>
          <li>Edit the text in the center box.</li>
          <li>Customize your logo (color, background, font size, etc.).</li>
          <li>
            Finally, click the "Export" button and get the logo of your own.
          </li>
        </ul>
      </li>
      <li>
        <p>
          Q: Can I use the generated logo for personal or commercial purposes?{" "}
        </p>
        <p>
          A: The generated logo fully belongs to you. You can use it freely for
          any purposes. Though credit is always appreciated.
        </p>
      </li>
    </ol>
  </FaqContainer>
);

export default Faq;
