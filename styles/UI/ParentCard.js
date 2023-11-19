import styled from "styled-components";
const { css } = require("styled-components");


const ParentWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 margin: 50px;
 grid-row-gap: 10px;
 grid-column-gap: 10px;
 ${({ containerLayout,layout }) => {
   if (containerLayout === "carousel") {
     return css`
       display: grid;
       grid-template-columns: repeat(6, 1fr);
       overflow: auto;
     `;
   }
   if (layout === "SideToSide") {
     return css`
       grid-template-columns: repeat(2, 1fr);
     `;
   }
 }}
`;


const MenuBar = styled.div`
 display: flex;
 flex-direction: row;
 font-family: fantasy;
 justify-content: space-around;
 align-items: center;
 height: fit-content;
 background-color: #ceb3ce;
 margin: 20px 0 50px 0;
`;


module.exports = {
 ParentWrapper,
 MenuBar,
};


