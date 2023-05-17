import styled from "styled-components";
import collar from "../../assets/collar.png";
import pantalon from "../../assets/pantalones.png";
import camiseta from "../../assets/camiseta.png";

export const ItemsComponent = () => {
  return (
    <SectionWrapper>
      <ItemOne>
        <ImageItemOne src={collar} alt="" />
        <SpanItemOne>
          <H2ItemOne>Camiseta verano</H2ItemOne>
        </SpanItemOne>
      </ItemOne>
      <ItemTwo>
        <ImageItemTwo src={pantalon} alt="" />
        <SpanItemTwo>
          <H2ItemTwo>Pantalones tejanos</H2ItemTwo>
        </SpanItemTwo>
      </ItemTwo>
      <ItemThree>
        <ImageItemThree src={camiseta} alt="" />
        <SpanItemThree>
          <H2ItemThree>Camisas invierno</H2ItemThree>
        </SpanItemThree>
      </ItemThree>
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

const ItemOne = styled.div`
  background-color: #e3e3e3;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ItemTwo = styled.div`
  background-color: #e3e3e3;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ItemThree = styled.div`
  background-color: #e3e3e3;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageItemOne = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 0px 0px 20px;
`;
const ImageItemTwo = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 0px 0px 20px;
`;
const ImageItemThree = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 0px 0px 20px;
`;

const SpanItemOne = styled.span`
  width: 100%;
  height: 80px;
  background-color: #0056fd;
`;
const SpanItemTwo = styled.span`
  width: 100%;
  height: 80px;
  background-color: #0056fd;
`;
const SpanItemThree = styled.span`
  width: 100%;
  height: 80px;
  background-color: #0056fd;
`;

const H2ItemOne = styled.h2`
  color: #fff;
  margin: 20px 0px 0px 20px;
`;

const H2ItemTwo = styled.h2`
  color: #fff;
  margin: 20px 0px 0px 20px;
`;

const H2ItemThree = styled.h2`
  color: #fff;
  margin: 20px 0px 0px 20px;
`;
