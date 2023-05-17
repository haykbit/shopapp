import styled from "styled-components";
import collar from "../../assets/collar.png";
import pantalon from "../../assets/pantalones.png";
import camiseta from "../../assets/camiseta.png";

export const ItemsComponent = () => {
  const data = [
    {
      id: 1,
      imagen: collar,
      texto: "Camiseta verano",
    },
    {
      id: 2,
      imagen: pantalon,
      texto: "Pantalones tejanos",
    },
    {
      id: 3,
      imagen: camiseta,
      texto: "Camisas invierno",
    }
  ];

  return (
    <SectionWrapper>
      {data.map((item, index) => {
        return (
          <Item key={index}>
            <ImageItem src={item.imagen} alt="" />
            <SpanItem>
              <H2Item>{item.texto}</H2Item>
            </SpanItem>
          </Item>
        );
      })}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  gap: 30px;
`;

const Item = styled.div`
  background-color: #e3e3e3;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageItem = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 0px 0px 20px;
`;

const SpanItem = styled.span`
  width: 100%;
  height: 80px;
  background-color: #0056fd;
`;

const H2Item = styled.h2`
  color: #fff;
  margin: 20px 0px 0px 20px;
`;
