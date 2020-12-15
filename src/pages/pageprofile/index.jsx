import CardProfile from "../../components/shared/cardprofile";
import Carteditprofile from "../../components/shared/cardeditprofile";
import React from "react";
import { Container, ContainerCard } from "./style";

const PageProfile = () => {

  
  const userMock = {
    user: {
      id: "c92d0549-c36c-4e99-b822-f0e23a292cc1",
      name: "Bruno Gehlen",
      email: "tousepc@gmail.com",
      course_module: "Your Course",
      bio: "Bio teste",
      contact: "0000-0000",
      techs: [
        {
          id: "3605f744-11c1-4a61-af6d-f3b7c39a6e06",
          title: "JavaScript",
          status: "Avançado",
          created_at: "2020-12-14T19:40:58.601Z",
          updated_at: "2020-12-14T19:40:58.601Z",
        },
        {
          id: "3cf4ce6e-0703-4e92-94a2-cd4c04574458",
          title: "React",
          status: "Avançado",
          created_at: "2020-12-14T19:40:47.844Z",
          updated_at: "2020-12-14T19:58:31.440Z",
        },
        {
          id: "3605f744-11c1-4a61-af6d-f3b7c39a6e06",
          title: "JavaScript",
          status: "Iniciante",
          created_at: "2020-12-14T19:40:58.601Z",
          updated_at: "2020-12-14T19:40:58.601Z",
        },
        {
          id: "3cf4ce6e-0703-4e92-94a2-cd4c04574458",
          title: "React",
          status: "Avançado",
          created_at: "2020-12-14T19:40:47.844Z",
          updated_at: "2020-12-14T19:58:31.440Z",
        },
        {
          id: "3605f744-11c1-4a61-af6d-f3b7c39a6e06",
          title: "JavaScript",
          status: "Iniciante",
          created_at: "2020-12-14T19:40:58.601Z",
          updated_at: "2020-12-14T19:40:58.601Z",
        },
        {
          id: "3cf4ce6e-0703-4e92-94a2-cd4c04574458",
          title: "React",
          status: "Avançado",
          created_at: "2020-12-14T19:40:47.844Z",
          updated_at: "2020-12-14T19:58:31.440Z",
        },
        {
          id: "3605f744-11c1-4a61-af6d-f3b7c39a6e06",
          title: "JavaScript",
          status: "Iniciante",
          created_at: "2020-12-14T19:40:58.601Z",
          updated_at: "2020-12-14T19:40:58.601Z",
        },
        {
          id: "3cf4ce6e-0703-4e92-94a2-cd4c04574458",
          title: "React",
          status: "Avançado",
          created_at: "2020-12-14T19:40:47.844Z",
          updated_at: "2020-12-14T19:58:31.440Z",
        },
        {
          id: "3605f744-11c1-4a61-af6d-f3b7c39a6e06",
          title: "JavaScript",
          status: "Iniciante",
          created_at: "2020-12-14T19:40:58.601Z",
          updated_at: "2020-12-14T19:40:58.601Z",
        },
        {
          id: "3cf4ce6e-0703-4e92-94a2-cd4c04574458",
          title: "React",
          status: "Avançado",
          created_at: "2020-12-14T19:40:47.844Z",
          updated_at: "2020-12-14T19:58:31.440Z",
        },
        {
          id: "3605f744-11c1-4a61-af6d-f3b7c39a6e06",
          title: "JavaScript",
          status: "Iniciante",
          created_at: "2020-12-14T19:40:58.601Z",
          updated_at: "2020-12-14T19:40:58.601Z",
        },
        {
          id: "3cf4ce6e-0703-4e92-94a2-cd4c04574458",
          title: "React",
          status: "Avançado",
          created_at: "2020-12-14T19:40:47.844Z",
          updated_at: "2020-12-14T19:58:31.440Z",
        },
        {
          id: "3605f744-11c1-4a61-af6d-f3b7c39a6e06",
          title: "JavaScript",
          status: "Iniciante",
          created_at: "2020-12-14T19:40:58.601Z",
          updated_at: "2020-12-14T19:40:58.601Z",
        },
        {
          id: "3cf4ce6e-0703-4e92-94a2-cd4c04574458",
          title: "React",
          status: "Avançado",
          created_at: "2020-12-14T19:40:47.844Z",
          updated_at: "2020-12-14T19:58:31.440Z",
        },
      ],
      works: [
        {
          id: "cee74282-9f76-484e-8a28-f7281eda3761",
          title: "KenzieHub",
          description:
            "I was the backend developer of this project, and i did it using Typescript and NodeJS",
          deploy_url: "https://kenziehub.me",
          created_at: "2020-12-12T16:59:35.264Z",
          updated_at: "2020-12-12T16:59:35.264Z",
        },
        {
          id: "fe2319a3-bdcc-44de-9e74-ce44991c9090",
          title: "KenzieHub",
          description:
            "I was the backend developer of this project, and i did it using Typescript and NodeJS",
          deploy_url: "https://kenziehub.me",
          created_at: "2020-12-12T16:59:35.306Z",
          updated_at: "2020-12-12T16:59:35.306Z",
        },
        {
          id: "1e5427ae-1411-447a-babe-8f2385211341",
          title: "asdasdasd",
          description: "asdasdasd",
          deploy_url: "https://kenziehub.me",
          created_at: "2020-12-12T16:42:58.963Z",
          updated_at: "2020-12-12T18:12:18.158Z",
        },
      ],
      created_at: "2020-12-12T05:27:29.243Z",
      updated_at: "2020-12-14T19:51:49.233Z",
      avatar_url:
        "https://kenziehub.s3.amazonaws.com/bc774f7e75ff3f1d3e28-uncle_Bob.png",
    },
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc5NzkwMzQsImV4cCI6MTYwODIzODIzNCwic3ViIjoiYzkyZDA1NDktYzM2Yy00ZTk5LWI4MjItZjBlMjNhMjkyY2MxIn0.5SMSAw1Trju6M3EmpJ6fi3oaDbYqL65m3d-l-f2R9oo",
  };

  return (
    <>
      <Container>
        <CardProfile imageUrl={userMock.user.avatar_url}  bio={userMock.user.bio} name={userMock.user.name}></CardProfile>

        {userMock.user.techs.map(({ status, title }, index) => {
          return (            
            <ContainerCard>
              <Carteditprofile
                key={index}
                status={status}
                title={title}
              ></Carteditprofile>
            </ContainerCard>
          );
        })}
      </Container>
    </>
  );
};

export default PageProfile;
