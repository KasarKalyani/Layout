import styled from "styled-components";
const { css } = require("styled-components");


const CardWrapper = styled.div`
 display: flex;
 ${({ layout, containerLayout }) => {
   if (layout === "SideToSide") {
     return css`
       box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
       flex-direction: row;
       width: 500px;
       ${containerLayout === "40-60"
         ? `&.firstCard {
           grid-column: span 2;
           grid-row: span 3;
           width: 1000px;
         }`: containerLayout === "fullBleed"
         ? `&.firstCard {
           grid-column: span 3;
           width: 100%;
           height: 800px;
         }`
         : ``}
     `;
   } else if (layout === "UpDown") {
     return css`
       box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
       flex-direction: column;
       width: 300px;
       ${containerLayout === "40-60"
         ? `
       &.firstCard {
         grid-column: span 2;
         grid-row: span 2;
         width: 600px;
       }`
         : containerLayout === "fullBleed"
         ? `&.firstCard {
           grid-column: span 3;
           width: 100%;
           height: 800px;
         }
         &.secondCard {
           transform: translate3d(50px, -50px, 10px);
         }
       `
         : ``}
     `;
   } else if (layout === "Round") {
     return css`
       flex-direction: column;
       width: 300px;
       ${containerLayout === "40-60"
         ? `
       &.firstCard {
         grid-column: span 2;
         grid-row: span 2;
         width: 600px;
       }`
       : containerLayout === "fullBleed"
         ? `&.firstCard {
           grid-column: span 3;
           width: 100%;
           height: 800px;
         }`
         : ``}
     `;
   }
 }}
`;
const ImageWrapper = styled.div`
 img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }
 ${({ layout, containerLayout }) => {
   if (layout === "SideToSide") {
     return css`
       width: 500px;
       height: 200px;
       ${containerLayout === "40-60"
         ? `&.firstCard {
         width: 1000px;
         height: 400px;
       }`: containerLayout === "fullBleed"
       ? `&.firstCard {
         grid-column: span 3;
         width: 100%;
         height: 800px;
       }`
         : ``}
     `;
   } else if (layout === "UpDown") {
     return css`
       width: 300px;
       height: 200px;
       ${containerLayout === "40-60"
         ? `
       &.firstCard {
         width: 600px;
         height: 700px;
       }
       `
         : containerLayout === "fullBleed"
         ? `&.firstCard {
           grid-column: span 3;
           width: 100%;
           height: 800px;
         }`
         : ``}
     `;
   } else if (layout === "Round") {
     return css`
       width: 300px;
       height: 200px;
       padding: 10px;
       ${containerLayout === "40-60"
         ? ` &.firstCard {
         width: 700px;
         height: 600px;
       }`: containerLayout === "fullBleed"
       ? `&.firstCard {
         grid-column: span 3;
         width: 100%;
         height: 800px;
       }`
         : ``}
       img {
         border-radius: 50%;
         overflow: hidden;
       }
     `;
   }
 }}
`;
const ContentWrapper = styled.div`
 width: 280px;
 padding: 15px;
 ${({ containerLayout }) => {
   if (containerLayout === "40-60") {
     return css`
       &.firstCard {
         width: 600px;
       }
     `;
   }
   else if(containerLayout === "fullBleed"){
     return css`
       &.firstCard {
         position: absolute;
         top: 600px;
       }
     `;
   }
 }}


 ${({ layout, containerLayout }) => {
   if (layout === "Round") {
     return css`
       box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
       ${containerLayout === "40-60"
         ? `
       &.firstCard {
         width: 700px;
       }`
         : ``}
     `;
   }
 }}
`;
const HeadWrapper = styled.div`
 font-family: fantasy;
 font-size: larger;
 padding-bottom: 5px;
`;
const SubHead = styled.div`
 font-family: fantasy;
 font-size: smaller;
 padding-bottom: 5px;
`;
const PriceWrapper = styled.div`
 font-family: fantasy;
 font-size: smaller;
 padding-bottom: 5px;
`;
const ButtonWrapper = styled.button``;


module.exports = {
 CardWrapper,
 ImageWrapper,
 ContentWrapper,
 HeadWrapper,
 SubHead,
 ButtonWrapper,
 PriceWrapper,
};
