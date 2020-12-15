import { ContainerTech, CardIcons, CardTitulo } from "./style";

const CartProfileTech = ({title, status}) => {
  return (
    <>    
        <ContainerTech>
          <CardIcons></CardIcons>
          <CardTitulo>
         <h2> {title} </h2>
         <p> {status}</p>
          </CardTitulo>
        </ContainerTech>
    </>
  );
};

export default CartProfileTech;
