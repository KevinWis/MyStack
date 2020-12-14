import React from "react";
import WorkCard from "../../components/shared/cardProfileWorks";
import CardProfile from "../../components/shared/cardprofile";
import { ContainerWorks, ContainerWorkCard } from "./style";
function WorksPage() {
  return (
    <>
      <ContainerWorks>
        <CardProfile />
        <ContainerWorkCard>
          <WorkCard title="Works" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non metus vel diam dapibus congue. Suspendisse semper tu"></WorkCard>
          <WorkCard title="Works" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non metus vel diam dapibus congue. Suspendisse semper tu"></WorkCard>
        </ContainerWorkCard>
      </ContainerWorks>
    </>
  );
}

export default WorksPage;
