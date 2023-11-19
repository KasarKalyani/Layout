import styled from "styled-components";


const PopBlock = styled.div`
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
 width: fit-content;
 padding: 10px;
 position: absolute;
 left: 10%;
 top: 10%;
 background-color: #adb6c0;
`;


const Block = styled.div`
 display: flex;
 flex-direction: column;
 border: grey solid;
 margin: 50px;
 transition: transform 0.2s;
 &:hover {
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
   transform: scale(1.1);
 }
`;


const TitleBlock = styled.div`
padding: 10px`;


const PriceBlock = styled.div`
padding: 10px`;


const PageWrapper = styled.div`


 display: flex ;
 flex-direction: row;
 flex-wrap: wrap;
 margin: 5px;
`;


const Header = styled.h1`
 text-align: center;
 justify-content: center;
`;
const IconWrapper = styled.h1`
 margin: 0;
 font-size: 1rem;
 text-align: right;
`;
const Highlight = styled.div`
 transition: transform 0.2s;


 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 margin: 10px;


`;


module.exports = {
 PopBlock,
 PageWrapper,
 Header,
 TitleBlock,
 PriceBlock,
 Block,
 IconWrapper,
 Highlight,
};


