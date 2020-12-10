import styled from "styled-components";

export const MainCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const CardContainer = styled.div`
  width: 26rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PersonContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.4);
`;

export const ImgContainer = styled.img`
  width: 10rem;
  height: 10rem;
  background-color: whitesmoke;
  border-radius: 100%;
  transform: translatey(5rem);
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.4);
`;

export const DescContainer = styled.div`
  width: 100%;
  height: 7rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  p {
    margin: 0;
  }
`;

export const TechIcons = styled.div`
  width: 80%;
  height: 5rem;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
