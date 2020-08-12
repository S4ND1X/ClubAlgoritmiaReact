import React from "react";
import styled from "styled-components";

const WorkshopStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;

  h6 {
    opacity: 0.6;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    letter-spacing: 1px;
    margin: 10px 0;
    text-transform: uppercase;
  }

  .course-preview {
    width: 100%;
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 0.5),
      inset 0 0 0 1000px #1c86ada6;
    color: #fff;
    padding: 30px;
  }

  .course-preview a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    opacity: 0.8;
    margin-top: 30px;
    text-decoration: none;
  }

  .course-info {
    padding: 30px;
    position: relative;
    width: 100%;
  }

  .btn {
    background-color: #1c87ad;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 16px;
    padding: 12px 25px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
    transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
  }
  .btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.35);
  }
  .btn:active {
    transition: all 0.2s cubic-bezier(0.37, 0.26, 0.35, 1);
    transform: initial;
    box-shadow: none;
  }

  @media screen and (max-width: 560px) {
    .course-preview {
      width: 50%;
    }
    h6 {
      opacity: 0.6;
      margin: 0;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    h2 {
      letter-spacing: 1px;
      margin: 10px 0;
      font-size: 1.1em;
    }
    .btn {
      font-size: 0.8em;
      padding: 10px 10px;
    }
  } /* Small size */

  @media screen and (max-width: 480px) {
    text-align: center;
    .course-preview {
      width: 100%;
      box-shadow: 0px 15px 15px -20px rgba(0, 0, 0, 0.5),
        inset 0 0 0 1000px #2a265f8a;
      height: 20%;
    }
    display: flex;
    flex-direction: column;
    h6 {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 0.8em;
    }

    h2 {
      letter-spacing: 1px;
      margin: 10px 0;
      font-size: 1.3em;
    }
    .course-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .btn {
      font-size: 1em;
      padding: 10px 10px;
      position: unset;
    }
  }
`;

function Workshop({ level, description, instructor, date, name, link, image }) {
  function handleClick() {
    window.open(link);
  }
  return (
    <WorkshopStyled>
      <div class="course-preview" style={{ backgroundImage: `url(${image})` }}>
        <h6>{level}</h6>
        <h2>{description}</h2>
        <a href="#us-section">{instructor}</a>
      </div>
      <div class="course-info">
        <h6>{date}</h6>
        <h2>{name}</h2>
        <button class="btn" onClick={handleClick}>
          Registrarme
        </button>
      </div>
    </WorkshopStyled>
  );
}

export default Workshop;
