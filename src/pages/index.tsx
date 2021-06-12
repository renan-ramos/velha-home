import { useEffect, useState } from "react";
import {
  SIframeContainer,
  SMapIframe,
  STemp,
  SVideoPlayer,
  SWellcome,
  SWrapper,
} from "../styled";

const Home = () => {
  const [temp, setTemp] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://goweather.herokuapp.com/weather/cancun");
      const data = await res.json();

      setTemp(data.temperature);
    };

    fetchData();
  }, []);

  return (
    <SWrapper>
      <SWellcome>
        <h1>Bem vinda, Velha!</h1>
        <h2>Viva México! Viva Cancún</h2>
      </SWellcome>
      <STemp>Temperatura em Cancún: {temp}</STemp>
      <SIframeContainer>
        <SVideoPlayer
          src="https://www.youtube.com/embed/KewfYKJy8YU?controls=0&amp;start=49&amp;autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></SVideoPlayer>
      </SIframeContainer>
        <h1>Hóteis em Cancún</h1>
        <SIframeContainer>
          <SMapIframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59558.03627448075!2d-86.83236611257377!3d21.097520184582528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shoteis%20cancun!5e0!3m2!1spt-BR!2sbr!4v1623535561622!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy"></SMapIframe>
        </SIframeContainer>
    </SWrapper>
  );
};

export default Home;
