import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;

  align-items: flex-start;
  gap: 70px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  list-style: none;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0 10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: 0.3s;
    border-radius: 25px;
  }
  &:hover {
    &::before {
      background: linear-gradient(to bottom, #e8edec, #d2d1d3);
      box-shadow: 0px 3px 20px 0px black;
      transform: scale(1.2);
    }
    color: black;
  }
`;

const Icons = styled.div`
  button {
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  button {
    color: red;
  }
  button:focus,
  button:hover {
    color: black;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: black;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

const Container = styled.div`
  padding: 30px 0px 0px;
  position: fixed;
  width: 1400px;
  display: flex;
  justify-content: space-evenly;
  z-index: 10;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
export default function Nav() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={logo} />
          <List className="menu-bar">
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Library</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <button>Hire Now</button>
        </Icons>
      </Container>
    </Section>
  );
}
