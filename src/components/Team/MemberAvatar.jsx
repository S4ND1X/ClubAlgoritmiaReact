import React from "react";
import styled from "styled-components";

const MemberAvatarStyled = styled.div`
  transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
  animation: circleAn 4s infinite;
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-image: url(${(props) => props.avatar});
  background-size: cover;
  background-position: center center;
  border-radius: 100%;
  box-shadow: 0px 30px 30px -25px rgba(0, 0, 0, 0.6);
  :hover {
    animation: none;
    box-shadow: 0;
    width: 200px;
    height: 200px;
  }
  @keyframes circleAn {
    0% {
      box-shadow: 0px 30px 30px -25px rgba(0, 0, 0, 0.6),
        0px 0px 0px 0px #23d5abb9, 0px 0px 0px 0px #23a5d573,
        0px 0px 0px 0px #23a5d523;
    }
    100% {
      box-shadow: 0px 30px 30px -25px rgba(0, 0, 0, 0.6),
        0px 0px 0px 70px rgba(102, 52, 105, 0),
        0px 0px 0px 200px rgba(102, 52, 105, 0),
        0px 0px 0px 300px rgba(102, 52, 105, 0);
    }
  }
`;

function MemberAvatar({ avatar, isHover }) {
  return (
    <MemberAvatarStyled avatar={avatar} isHover={isHover}></MemberAvatarStyled>
  );
}

export default MemberAvatar;
