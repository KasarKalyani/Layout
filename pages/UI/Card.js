// import { useEffect, useState } from "react";
const {
    CardWrapper,
    ImageWrapper,
    ContentWrapper,
    HeadWrapper,
    SubHead,
    ButtonWrapper,
    PriceWrapper,
   } = require("../../styles/UI/CardStyle");
   
   
   const Card = ({info,containerLayout,layout}) => {
   
   
    return (
      <>
    
        {info &&
          info.map((info, index) => {
            return (
              <CardWrapper
                key={info.id}
                layout={layout}
                containerLayout={containerLayout}
                className={index === 0 ? "firstCard" : index === 1 || 2 || 3? "secondCard":''}
              >
                <ImageWrapper
                  layout={layout}
                  containerLayout={containerLayout}
                  className={index === 0 ? "firstCard" : ""}
                >
                  <img src={info.src} />
                </ImageWrapper>
                <ContentWrapper
                  layout={layout}
                  containerLayout={containerLayout}
                  className={index === 0 ? "firstCard" : ""}
                >
                  <HeadWrapper>{info.title}</HeadWrapper>
                  <SubHead>{info.subtitle}</SubHead>
                  <PriceWrapper>{info.price}</PriceWrapper>
                  <ButtonWrapper>Get Info</ButtonWrapper>
                </ContentWrapper>
              </CardWrapper>
            );
          })}
     
      </>
    );
   };
   
   
   export default Card;
   