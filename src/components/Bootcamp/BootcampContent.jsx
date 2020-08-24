import React from "react";
import styled from "styled-components";

//Bootcamp info container
export default function BootcampContent() {
  return (
    <BootcampContentStyled>
      <div className="section flex-column-center">
        <h3>¿En qué consiste?</h3>
        <p>
          Programa de 12 semanas durante las cuales desarrollarás un proyecto de
          alto nivel con <span>mentorías personalizadas</span>, todo con el fin
          de que te superes y crezcas tanto personal como profesionalmetente.
          <span>¡No importa qué nivel tengas</span>, te podemos ayudar!
        </p>
        <h3>¿POR QUÉ?</h3>
        <p>
          La importancia de los <span>Side Projects</span> en las empresas top a
          nivel mundial es altísima. Aún más cuando no se tiene experiencia
          laboral y se quiere aplicar a un <span>Internship</span>.
        </p>
        <h3>¿REQUISITOS?</h3>
        <p>
          <span>¡Ninguno!</span>
          Únicamente necesitas las ganas de superarte y destacarte.{" "}
          <span>Nada será obligatorio</span> por lo que lo más importante es que
          tú seas el que se rete a sí mismo y quiera salir adelante.
        </p>
        <h3>DEMO DAY</h3>
        <p>
          Al final presentaras tu proyecto ante los mentores y tus compañeros
          para que todos vean de lo que fuiste capaz de crear.
          <span> Pero no tengas miedo, todos estamos para ayudarte</span> y
          hacerte sentir cómodo con el proceso de desarrollo, al final la
          presentación será como estar platicando del proyecto con amigos.
        </p>
        <a href="https://forms.gle/BWQ1vZPL8VtPX7yD8" className="text-center">
          QUIERO ENTRAR
        </a>
      </div>
    </BootcampContentStyled>
  );
}

//Styles
const BootcampContentStyled = styled.div`
  padding: 1em;
  font-family: "Nunito", sans-serif;
  h3 {
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
  }
  p {
    color: #fff;
    font-size: 1.2em;
    line-height: 1.5;
  }
  span {
    color: var(--highlight-color);
    font-weight: bold;
  }

  a {
    margin-top: 2em;

    background-color: var(--highlight-color);
    border: none;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    padding: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
    transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
    font-family: "Kalam", cursive;
    font-weight: bold;
    max-width: 300px;
    color: white;
    background-color: var(--highlight-color);
  }

  a:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.35);
    color: var(--highlight-color);
    background-color: #fff;
  }
  a:active {
    transition: all 0.2s cubic-bezier(0.37, 0.26, 0.35, 1);
    transform: initial;
    box-shadow: none;
  }
`;
