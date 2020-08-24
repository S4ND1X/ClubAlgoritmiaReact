import React from "react";
import styled from "styled-components";

import TeamMember from "./TeamMember";

import { nanoid } from "nanoid";

const TeamListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
  } /* Medium size */
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2em;
  } /* Small size */
  
`;

const teamMembers = [
  {
    name: "Jonathan Chavez",
    avatar:
      "https://avatars2.githubusercontent.com/u/22694942?s=460&u=f0860de181b89ba6287f25fa756015ad72e49be1&v=4",
    title: "Google Intern (Chrome Security)",
    link: "https://github.com/JonathanChavezTamales",
    bg:
      "https://ivydebate.com/wp-content/uploads/2016/05/math-subject-iba-bg.jpg",
  },
  {
    name: "Diego Cárdenas",
    avatar:
      "https://avatars3.githubusercontent.com/u/20931186?s=460&u=74825a18189657fcb10c67663042865ee43cd4ff&v=4",
    title: "Microsoft Intern (Edge)",
    link: "https://github.com/Dcrdn",
    bg: "https://ertugrulokullari.com/skin/images/backend/mountains2.jpg",
  },
  {
    name: "Jorge Sanchez",
    avatar:
      "https://avatars2.githubusercontent.com/u/42609763?s=460&u=45f6f16c9021c254385c0f700662d2b667e69fdf&v=4",
    title: "Fullstack Developer",
    link: "https://github.com/S4ND1X",
    bg:
      "https://i.pinimg.com/originals/a8/3a/88/a83a88bc62b6ac19c293a4274f7ca60f.jpg",
  },
  {
    name: "Sebastian Crossa",
    avatar:
      "https://avatars2.githubusercontent.com/u/20131547?s=460&u=90fe733b6d501490b786b039f3f9e9e19da042c2&v=4",
    title: "MLH Fellow",
    link: "https://github.com/sebastiancrossa",
    bg:
      "https://www.iwantwallpaper.co.uk/images/paladium-metallic-stripe-geometric-smooth-modern-wallpaper-90114-p5391-14928_image.jpg",
  },
  {
    name: "Alejandro Gonzalez",
    avatar:
      "https://avatars3.githubusercontent.com/u/31485325?s=460&u=83b4e5d03ed70d3ce676fe4bbfe2fa585d31ba57&v=4",
    title: "Facebook Intern",
    link: "https://github.com/AlexGz9851",
    bg: "https://cdn.wallpapersafari.com/29/87/bRXeBc.jpg",
  },
  {
    name: "Iván Morett",
    avatar:
      "https://avatars1.githubusercontent.com/u/16882849?s=460&u=7b96c543f31b840c935789d5d469b341d09500d2&v=4",
    title: "Facebook Intern",
    link: "https://github.com/lima1756",
    bg:
      "https://i.pinimg.com/originals/64/b7/de/64b7deb1bfa083d44f5e5b6a5b0f1859.jpg",
  },
];
teamMembers.forEach((member) => {
  member.id = nanoid();
});
function TeamList() {
  return (
    <TeamListStyled>
      {teamMembers.map((member) => (
        <TeamMember
          name={member.name}
          avatar={member.avatar}
          title={member.title}
          link={member.link}
          bg={member.bg}
          key={member.id}
        />
      ))}
    </TeamListStyled>
  );
}

export default TeamList;
