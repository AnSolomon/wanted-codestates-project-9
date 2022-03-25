import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrap,
  InnerLink,
  InnerNav,
  ImageItem,
  NavUl,
  NavLi,
  NavContent,
} from "./Header.style";

const Header = ({ receiveLink }) => {
  const navList = [
    { name: "홈", link: "/" },
    { name: "랭킹", link: "/rank?mode=indi" },
    // { name: "카트", link: "/body" },
    // { name: "트랙", link: "/track" },
  ];

  return (
    <HeaderWrap>
      <InnerLink>
        <ImageItem>
          <img src="/img/logo_kart.png" />
        </ImageItem>
        <ImageItem>
          <img src="/img/tmi_logo_default_b.svg" />
        </ImageItem>
      </InnerLink>
      <InnerNav>
        <NavUl>
          {navList.map((elem) => {
            return (
              <NavLi key={elem.name}>
                <NavContent state={elem.link === receiveLink}>
                  <Link
                    to={elem.link}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      margin: "0 auto",
                      cursor: "pointer",
                      zIndex: "2",
                      verticalAlign: "middle",
                    }}
                  >
                    {elem.name}
                  </Link>
                </NavContent>
              </NavLi>
            );
          })}
        </NavUl>
      </InnerNav>
    </HeaderWrap>
  );
};

export default Header;
