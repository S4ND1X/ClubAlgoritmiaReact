import React from "react";
import styled from "styled-components";

import HeaderAnimation from "./HeaderAnimation";
import HeaderText from "./HeaderText";
import HeaderNav from "./HeaderNav";

//Header container, animation, text and navbar
export default function Header() {
  return (
    <HeaderStyled className="flex-column-center text-center margin-bottom">
      <HeaderAnimation />
      <div className="flex-column-center">
        <HeaderText />
        <HeaderNav />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  height: 100vh;
`;
