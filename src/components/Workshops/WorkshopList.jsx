import React from "react";
import styled from "styled-components";
import Workshop from "./Workshop";

const WorkshopListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media screen and (max-width: 1140px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1em;
  } /* Large size */
`;

function WorkshopList() {

  const workshopList = [
    {
      level: "Basico",
      name: "Web Principiante",
      instructor: "Jorge Sanchez",
      date: "17/08/2020",
      description: "HTML,CSS",
      link: "https://www.eventbrite.com/e/116315251047",
      image: "https://i.ytimg.com/vi/rr2H086z16s/maxresdefault.jpg",
    },
    {
      level: "N/A",
      name: "Q&A Interns",
      instructor: "Diego Cárdenas",
      date: "18/08/2020",
      description: "Internship Highlights",
      link:
        "https://www.eventbrite.com/e/qa-interns-and-fulltime-microsoft-facebook-google-tickets-116249600685",
      image:
        "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Fd7793444-3178-11ea-9703-eea0cae3f0de?fit=scale-down&source=next&width=700",
    },
    {
      level: "Intermedio",
      name: "Web Intermedio",
      instructor: "Jorge Sanchez",
      date: "20/08/2020",
      description: "JS, DOM, API, ASYNC",
      link: "https://www.eventbrite.com/e/116315740511",
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15921/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
    },

    {
      level: "Basico - Intermedio",
      name: "RestAPI desde 0",
      instructor: "Diego Cárdenas",
      date: "24/08/2020",
      description: "Contruir una RestApi",
      link: "https://www.eventbrite.com/e/116315800691",
      image:
        "https://www.weblantropia.com/wp-content/uploads/2016/05/RESTful-API.jpg",
    },
    {
      level: "Basico",
      name: "Unity zero to hero",
      instructor: "Jorge Sanchez",
      date: "27/08/2020",
      description: "Unity, c#",
      link: "https://www.eventbrite.com/e/116315830781",
      image:
        "https://womeningameses.files.wordpress.com/2018/02/1210008_6859.jpg",
    },

    {
      level: "Basico",
      name: "Android studio",
      instructor: "Alejandro Gonzalez",
      date: "31/08/2020",
      description: "Java, Android",
      link: "https://www.eventbrite.com/e/116315993267",
      image:
        "https://blog.phonehouse.es/wp-content/uploads/2018/02/Android-Logo.jpg",
    },
    {
      level: "Basico",
      name: "Data Anlysis",
      instructor: "Jonathan Chávez",
      date: "03/09/2020",
      description: "JUPYTER, CSV, PYTHON, MATH",
      link: "https://www.eventbrite.com/e/116316051441",
      image:
        "https://cdn.lynda.com/course/802837/802837-637286267107357882-16x9.jpg",
    },
    {
      level: "Avanzado",
      name: "Android studio",
      instructor: "Alejandro Gonzalez",
      date: "07/09/2020",
      description: "Java, Android, algo avanzado no c",
      link: "https://www.eventbrite.com/e/116317576001",
      image:
        "https://blog.phonehouse.es/wp-content/uploads/2018/02/Android-Logo.jpg",
    },
    {
      level: "Intermedio",
      name: "react zero to hero",
      instructor: "Sebastian Crossa",
      date: "10/09/2020",
      description: "State, hooks, JSX",
      link: "https://www.eventbrite.com/e/116317818727",
      image:
        "https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png",
    },
    {
      level: "Basico",
      name: "Simulacro entrevistas",
      instructor: "Diego Cárdenas",
      date: "14/09/2020",
      description: "DS, Algoritmos, personal",
      link: "https://www.eventbrite.com/e/116317941093",
      image: "https://img-a.udemycdn.com/course/750x422/816152_f28c_3.jpg",
    },
    {
      level: "Basico",
      name: "AWS aMPLIFY",
      instructor: "Sebastian Crossa",
      date: "17/09/2020",
      description: "DB, auth, api",
      link: "https://www.eventbrite.com/e/116317969177",
      image: "https://eventosti.net/wp-content/uploads/2016/05/aws.png",
    },
    {
      level: "Basico",
      name: "Pensamiento Logico dummies",
      instructor: "Alejandro Gonzalez",
      date: "21/09/2020",
      description: "Logica, personal, crecimiento",
      link: "https://www.eventbrite.com/e/116318069477",
      image:
        "https://tiposdepensamiento.xyz/wp-content/uploads/2019/04/pensamiento-l%C3%B3gico.jpg",
    },
    {
      level: "Basico",
      name: "Programacion competitiva",
      instructor: "Jonathan Chávez/Diego Cárdenas",
      date: "24/09/2020",
      description: "C++, DS, ALGortimos, math",
      link: "https://www.eventbrite.com/e/116318091543",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191004160106/How-to-Prepare-for-Competitive-Programming.png",
    },
    {
      level: "Basico",
      name: "Programacion competitiva",
      instructor: "Jonathan Chávez/Diego Cárdenas",
      date: "28/09/2020",
      description: "C++, DS, ALGortimos, math",
      link: "https://www.eventbrite.com/e/116318129657",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191004160106/How-to-Prepare-for-Competitive-Programming.png",
    },
    {
      level: "Basico",
      name: "Programacion competitiva",
      instructor: "Jonathan Chávez/Diego Cárdenas",
      date: "01/10/2020",
      description: "C++, DS, ALGortimos, math",
      link: "https://www.eventbrite.com/e/116318181813",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191004160106/How-to-Prepare-for-Competitive-Programming.png",
    },
  ];

  return (
    <WorkshopListStyled>
      {workshopList.map((workshop) => (
        <Workshop
          level={workshop.level}
          name={workshop.name}
          instructor={workshop.instructor}
          date={workshop.date}
          description={workshop.description}
          link={workshop.link}
          image={workshop.image}
        />
      ))}
    </WorkshopListStyled>
  );
}

export default WorkshopList;
