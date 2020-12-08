import styled from "styled-components";

export const DefaultCard = styled.div`
  width: 35rem !important;
  height: 20rem !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #43c1d8 !important;
  border-radius: 3px;
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 1rem 0 0 0;
  }
`;

export const TechContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const PersonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CardName = styled.div`
  width: 80% !important;
  height: 2rem !important;
  background-color: white;
  text-align: center;
  border-radius: 3px;
  line-height: 2px;
  img {
    width: 10px;
  }
`;

export const CardTech = styled.div`
  width: 80% !important;
  height: 2rem !important;
  background-color: white;
  text-align: center;
  border-radius: 3px;
  line-height: 2px;
`;

export const PlaceholdeImg = styled.div`
  width: 8rem;
  height: 8rem;
  margin-top: 5px;
  background-color: gray;
  border-radius: 50%;
`;
