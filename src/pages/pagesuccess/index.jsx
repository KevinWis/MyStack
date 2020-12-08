import { CardImage } from "./style";
import {
  AnnounceImage,
  ColabImage,
  FreelanceImage,
  OpenSourceImage,
  SoftwareDeveloperImage,
  WelcomeImage,
} from "../../helpers/getImages";

const PageSucess = () => {
  return (
    <>
      <CardImage>
        <SoftwareDeveloperImage></SoftwareDeveloperImage>        
      </CardImage>

      <CardImage>
      <p>
          Se conecte com desenvolvedores, empresas, recrutadores e especialistas
          do tech business de todo o mundo
        </p>
        
      </CardImage>

      <CardImage>
        <AnnounceImage></AnnounceImage>
        
      </CardImage>

      <CardImage>
      <p>
          Monte seu time e tire sua ideia do papel, ou contribua para a maior
          comunidade open source
        </p>
      </CardImage>
      

      <CardImage>
        <ColabImage></ColabImage>
      </CardImage>

      <CardImage>
        <p>
          Anúncie seu trabalho, sua empresa ou seu produto, tudo em um só lugar!
        </p>
      </CardImage>

      <CardImage>
        <FreelanceImage></FreelanceImage>
      </CardImage>

      <CardImage>
        <p>
          Um freela impossível de entregar sozinho? Aqui não precisa fazer tudo
          sozinho, compartilhe o trabalho com quem está procurando ou ajude
          alguém!
        </p>
      </CardImage>

      <CardImage>
        <OpenSourceImage></OpenSourceImage>
      </CardImage>
      <CardImage>
        <p>
          Está buscando um dev verificado e com ótimos reviews para levar sua
          empresa para o proximo nível? Ou precisa daquela skill específica que
          não encontra em lugar nenhum? Contrate aqui!
        </p>
      </CardImage>

      <CardImage>
        <WelcomeImage></WelcomeImage>
      </CardImage>
    </>
  );
};

export default PageSucess;
