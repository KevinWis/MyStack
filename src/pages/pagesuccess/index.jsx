import { CardImage, ContainerImage } from "./style";

import RegisterButton from "../../components/shared/buttons/registerButton";
import { useHistory } from "react-router-dom";
import {
  AnnounceImage,
  ColabImage,
  FreelanceImage,
  OpenSourceImage,
  SoftwareDeveloperImage,
  WelcomeImage,
} from "../../helpers/getImages";

const PageSucess = () => {
  const history = useHistory();
  return (
    <>
      <ContainerImage>
        <RegisterButton
          value={"Junte-se a nos"}
          _onClick={() => history.push("/register/1")}
        ></RegisterButton>
        <CardImage>
          <SoftwareDeveloperImage
            width="25rem"
            smallWidth="22rem"
          ></SoftwareDeveloperImage>

          <p>
            Se conecte com desenvolvedores, empresas, recrutadores e
            especialistas do tech business de todo o mundo
          </p>
        </CardImage>

        <CardImage>
          <AnnounceImage width="25rem" smallWidth="22rem"></AnnounceImage>

          <p>
            Monte seu time e tire sua ideia do papel, ou contribua para a maior
            comunidade open source
          </p>
        </CardImage>

        <CardImage>
          <ColabImage width="25rem" smallWidth="22rem"></ColabImage>

          <p>
            Anúncie seu trabalho, sua empresa ou seu produto, tudo em um só
            lugar!
          </p>
        </CardImage>

        <CardImage>
          <FreelanceImage width="25rem" smallWidth="22rem"></FreelanceImage>

          <p>
            Um freela impossível de entregar sozinho? Aqui não precisa fazer
            tudo sozinho, compartilhe o trabalho com quem está procurando ou
            ajude alguém!
          </p>
        </CardImage>

        <CardImage>
          <OpenSourceImage width="25rem" smallWidth="22rem"></OpenSourceImage>

          <p>
            Está buscando um dev verificado e com ótimos reviews para levar sua
            empresa para o proximo nível? Ou precisa daquela skill específica
            que não encontra em lugar nenhum? Contrate aqui!
          </p>
        </CardImage>

        <CardImage>
          <WelcomeImage width="25rem" smallWidth="22rem"></WelcomeImage>
        </CardImage>
      </ContainerImage>
    </>
  );
};

export default PageSucess;
