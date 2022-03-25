import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1900px;
  min-width: 1000px;
  height: 100px;
  z-index: 1;
  overflow-x: hidden;
`;

export const InnerLink = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 48px;
`;

export const ImageItem = styled.div`
  padding: 8px;
`;

export const InnerNav = styled.div`
  display: flex;
  width: 70%;
  height: 55px;
  z-index: 1;
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
  font-size: 14px;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 55px;
  opacity: ${({ state }) => (state ? "1" : "0.5")};
  font-weight: bold;
  letter-spacing: -1px;

  &::after {
    position: absolute;
    width: ${({ state }) => (state ? "80px" : "0px")};
    height: 51px;
    content: "";
    border-bottom: 4px solid white;
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    opacity: 1;
    width: 80px;
    border-bottom: 4px solid white;
    transition: all 0.1s ease-in-out;
  }
`;
