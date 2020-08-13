import React from "react";
import styled from "styled-components";

const BootcampContentStyled = styled.div``;

function BootcampContent() {
  return (
    <BootcampContentStyled>
      <div className="section flex-column-center">
        <div className="content">
          <h3>¿En qué consiste?</h3>
          <p>
            Programa de 12 semanas durante las cuales desarrollarás un proyecto
            de alto nivel con <span>mentorías personalizadas</span>, todo con el
            fin de que te superes y crezcas tanto personal como
            profesionalmetente.
            <span>¡No importa qué nivel tengas</span>, te podemos ayudar!
          </p>
          <h3>¿POR QUÉ?</h3>
          <p>
            La importancia de los <span>Side Projects</span> en las empresas top
            a nivel mundial es altísima. Aún más cuando no se tiene experiencia
            laboral y se quiere aplicar a un <span>Internship</span>.
          </p>
          <h3>¿REQUISITOS?</h3>
          <p>
            <span>¡Ninguno!</span>
            Únicamente necesitas las ganas de superarte y destacarte.{" "}
            <span>Nada será obligatorio</span> por lo que lo más importante es
            que tú seas el que se rete a sí mismo y quiera salir adelante.
          </p>
          <h3>DEMO DAY</h3>
          <p>
            Al final presentaras tu proyecto ante los mentores y tus compañeros
            para que todos vean de lo que fuiste capaz de crear.
            <span> Pero no tengas miedo, todos estamos para ayudarte</span> y
            hacerte sentir cómodo con el proceso de desarrollo, al final la
            presentación será como estar platicando del proyecto con amigos.
          </p>
        </div>
        <a href="https://forms.gle/BWQ1vZPL8VtPX7yD8" className="text-center">
          QUIERO ENTRAR
        </a>
      </div>
    </BootcampContentStyled>
  );
}

export default BootcampContent;
