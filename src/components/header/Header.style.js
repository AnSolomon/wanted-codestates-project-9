import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const InnerLink = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  height: 48px;
`;

export const ImageItem = styled.div`
  padding: 8px;
`;

export const InnerNav = styled.div`
  display: flex;
  width: 75%;
  height: 55px;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
  margin: 0;
  padding-left: 0;
  border: 0;
  outline: 0;
`;

export const NavLi = styled.li`
  display: flex;
  align-items: center;
  width: 120px;
  height: 100%;
  float: left;
  text-align: center;
  font-size: 14px;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 55px;
  color: white;
  opacity: 0.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  letter-spacing: -1px;

  &::after {
    position: absolute;
    width: 0px;
    height: 51px;
    content: "";
    border-bottom: 4px solid white;
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    width: 80px;
    border-bottom: 4px solid white;
    transition: all 0.1s ease-in-out;
  }
`;

export const ContentA = styled.a`
  margin: 0 auto;
  cursor: pointer;
  z-index: 1;
`;

