import React from "react";
import {
  HeaderWrap,
  InnerLink,
  InnerNav,
  ImageItem,
  NavUl,
  NavLi,
  NavContent,
  ContentA,
} from "./Header.style";

const Header = () => {
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
          <NavLi>
            <NavContent>
              <ContentA>홈</ContentA>
            </NavContent>
          </NavLi>
          <NavLi>
            <NavContent>
              <ContentA>랭킹</ContentA>
            </NavContent>
          </NavLi>
          <NavLi>
            <NavContent>
              <ContentA>카트</ContentA>
            </NavContent>
          </NavLi>
          <NavLi>
            <NavContent>
              <ContentA>트랙</ContentA>
            </NavContent>
          </NavLi>
        </NavUl>
      </InnerNav>
    </HeaderWrap>
  );
};

export default Header;
