import styled from "styled-components";
import BlankProfile from "./placeholders/blankProfilePic.png";

export const Container = styled.div`
  width: 100%;
`;
export const Cardmain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Cardimage = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-image: url(${({ avatar }) => (avatar ? avatar : BlankProfile)});
  background-size: cover;
  margin: auto;
  margin-top: -64px;
  border: 1px solid rgba(21, 64, 72, 0.6);
  box-shadow: 2px 2px 1px rgba(21, 64, 72, 0.3);
`;
export const ContainerBio = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
export const Containertitle = styled.h2`
  width: 100%;
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: 300;
`;
export const ContainerBios = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  p {
    margin: 0.5rem 0;
    width: 100%;
    word-break: break-word;
  }
`;
