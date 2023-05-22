import styled from "styled-components";
import logo from "../../assets/logo.png";

export const NavigationComponent = () => {
  return (
    <SectionWrapper>
      <SectionLogo>
        <ImageLogo src={logo} alt="" />
      </SectionLogo>
      <MenuWrapper>
        <MenuUnorderedList>
          <MenuListItem>Home</MenuListItem>
          <MenuListItem>Women</MenuListItem>
          <MenuListItem>Products</MenuListItem>
          <MenuListItem>Contact</MenuListItem>
        </MenuUnorderedList>
      </MenuWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  background-color: #e3e3e3;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

const SectionLogo = styled.section``;
const ImageLogo = styled.img`
  width: 150px;
  margin: 0px 40px;
`;
const MenuWrapper = styled.nav`
  margin: 0px 40px;
`;

const MenuUnorderedList = styled.ul`
  color: #000;
  list-style-type: none;
  display: flex;
  gap: 20px;
`;

const MenuListItem = styled.li`
  font-size: 20px;
  font-weight: 600;
`;
