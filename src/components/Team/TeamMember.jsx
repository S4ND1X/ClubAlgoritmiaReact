import React from "react";
import styled from "styled-components";

//Individual member card
export default function TeamMember({ name, avatar, title, link, bg }) {
  //OnClick open a new browser tab on member github profile
  function handleClick() {
    window.open(link);
  }

  //Add bg and avatar as prop to use it on styled components
  return (
    <TeamMemberStyled onClick={handleClick} bg={bg} avatar={avatar}>
      <div id="avatar"></div>
      <div id="profile">
        <h3>{name}</h3>
        <h4>{title}</h4>
      </div>
    </TeamMemberStyled>
  );
}

// Styles
const TeamMemberStyled = styled.div`
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 500px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  position: relative;
  box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 0.5),
    inset 0 0 0 1000px #23a5d573;
  transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
  border-radius: 10px;

  cursor: pointer;
  :hover {
    box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 0.9),
      inset 0 0 0 1000px rgba(67, 52, 109, 0.2);
  }
  :hover #avatar {
    animation: none;
    box-shadow: 0;
    width: 200px;
    height: 200px;
  }

  :hover #profile {
    opacity: 1;
    bottom: 0;
  }
  #profile {
    transition: all 0.5s cubic-bezier(0.37, 0.26, 0.35, 1);
    opacity: 0;
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
  #profile h3 {
    color: #fff;
    padding: 0;
    margin: 0;
  }

  #profile h4 {
    color: #fff;
    padding: 0;
    margin: 5px 0 40px 0;
    font-size: 0.9em;
  }
  #avatar {
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
