import React from "react";
import styled from "styled-components";

const MemberProfileStyled = styled.div`
  transition: all 0.5s cubic-bezier(0.37, 0.26, 0.35, 1);
  position: absolute;
  bottom: 20px;
  width: 100%;
  opacity: 0;
  h3 {
    color: #fff;
    padding: 0;
    margin: 0;
  }

  h4 {
    color: #aaa;
    padding: 0;
    margin: 5px 0 40px 0;
    font-size: 0.9em;
  }
  :hover {
    opacity: 1;
    bottom: 0;
  }
`;

function MemberProfile({ name, title }) {
  return (
    <MemberProfileStyled>
      <h3>{name}</h3>
      <h4>{title}</h4>
    </MemberProfileStyled>
  );
}

export default MemberProfile;
