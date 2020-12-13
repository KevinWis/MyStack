import styled from "styled-components";
import Egirl from "./placeholders/e-girl.png";



export const Body = styled.div `
  
  width: 100%;
  height: 80%;
  position: relative;
  
  :hover{

  }
`;

export const ProfileImage = styled.div `
  
  width: 128px;
  height: 128px;
  border-radius:50%;
  background-image: url(${({avatar}) => avatar ? avatar:Egirl });
  background-size: cover;
  margin:auto;
  margin-top:-64px;
  border: 1px solid rgba(21, 64, 72, 0.6);
  box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);

  :hover{

  }
`;
export const ImageFilter = styled.div `

  width: 100%;
  height: 288px;
  background-color: rgba(21, 64, 72, 0.75);
  visibility:hidden;

  .Dev_Name {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25%;
    justify-content: center;
    width: 100%;
    font-size: 24px;
    font-weight: Thin 100;
    color: #e4f6f9;
    text-align: center;
    
  }
`;

export const Medias = styled.div `
  
  display: flex;
  justify-content: space-evenly;
  align-content: flex-end;
  align-items: flex-end;

  width: 100%;
  height: 120%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(50px);
  transition: 1s ease-out;

  transform: translateY(-50px);
  opacity: 1;
`;

export const Media = styled.div `
  width: 3.7rem;
  height: 3.7rem;

  background-color: whitesmoke;
  border-radius: 50%;
  box-shadow: 4px 6px 7px;
  z-index: 100;
  display: flex;
  align-items: center;

  transition: 0.2s ease-in-out;

  
  width: 4.2rem;
  height: 4.2rem;

  visibility:hidden;

  
  .Media_Icon {
    margin: auto;
  }


  
`;

export const Footer = styled.div `
  
  display: flex;
  align-items: center;
  padding: 0 5%;
  width: 90%;
  height: 20%;
  justify-content: space-evenly;
  font-size: 16px;
  visibility:hidden;
  .Spacer {
    position: relative;
    border-left: 1px solid gray;
    height: 40px;
    filter: opacity(0.5);
  }
  p {
    margin-top: 8px;
  }
  .Icon {
    filter: opacity(0.5);
  }

  div {
    position: relative;
    top: 0%;
  }
`;

export const UnhoveredText = styled.p `
  
  margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
  
  font-size:1.3rem;
  text-align:center;
  margin-top:-100px;
  
  p:nth-child(2){
    color:#777575;
    font-size:1.1rem;
    margin-top:-10px;
  }
`

export const TechIcons = styled.div `
   width: 60%;
   height: 4rem;
   margin:auto;
   margin-bottom:-25px;
   display: flex;
   justify-content: space-around;
   align-items: center;
`

export const Card = styled.div `

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 336px;
  height: 208px;
  margin: auto;
  background-color: whitesmoke;
  box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);
  margin-bottom: 25px;

/* remove */
  margin-top:200px;
  background-color: whitesmoke;

&:hover {


  ${UnhoveredText}{
    display:none;
  }

  ${Body}{
    width: 100%;
    height: 80%;
    position: relative;
  }

  ${ProfileImage}{
    width: 100%;
    height: 100%;
    background-image: url(${({avatar}) => avatar ? avatar:Egirl });
    background-size: cover;
    border-radius:0px;
  }
  
  ${ImageFilter}{

    width: 100%;
    height: 288px;
    background-color: rgba(21, 64, 72, 0.75);
    visibility:visible;

  .Dev_Name {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25%;
    justify-content: center;
    width: 100%;
    font-size: 24px;
    font-weight: Thin 100;
    color: #e4f6f9;
    text-align: center;
    }
  }

  ${Medias}{
    visibility:visible;
    display: flex;
    justify-content: space-evenly;
    align-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 120%;
    position: absolute;
    top: 0;
    left: 0;

  }
  
  ${Media}{
    transform: translateY(50px);
    transition: 1s ease-out;

    transform: translateY(-50px);
    opacity: 1;
    visibility:visible;
    width: 3.7rem;
    height: 3.7rem;

    background-color: whitesmoke;
    border-radius: 50%;
    box-shadow: 4px 6px 7px;
    z-index: 100;
    display: flex;
    align-items: center;

    transition: 0.2s ease-in-out;

  
    width: 4.2rem;
    height: 4.2rem;
  
  .Media_Icon {
    margin: auto;
    }
  }

  ${Footer}{
    display: flex;
    align-items: center;

    padding: 0 5%;
    width: 90%;
    height: 20%;
    justify-content: space-evenly;
    font-size: 16px;

  .Spacer {
    position: relative;
    border-left: 1px solid gray;
    height: 40px;
    filter: opacity(0.5);
  }
  p {
    margin-top: 8px;
  }
  .Icon {
    filter: opacity(0.5);
  }

  div {
    position: relative;
    top: 0%;
  }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 336px;
  height: 360px;
  margin: auto;
  background-color: whitesmoke;
  box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);
  margin-bottom: 25px;
  margin-top:200px;

}
`;