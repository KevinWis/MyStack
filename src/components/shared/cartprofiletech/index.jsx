import { ContainerTech, CardIcons, CardTitulo } from "./style";

const CartProfileTech = ({title, status}) => {
  return (
    <>    
        <ContainerTech>
          <CardIcons></CardIcons>
          <CardTitulo>
         <h3> {title} </h3>
         <p> {status}</p>
          </CardTitulo>
        </ContainerTech>
    </>
  );
};

export default CartProfileTech;
