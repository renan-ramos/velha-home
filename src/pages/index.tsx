import { SIframeContainer, SVideoPlayer, SWellcome, SWrapper } from '../styled'

const Home = () => {
  return (
    <SWrapper>
      <SWellcome>
        <h1>Bem vinda, Velha!</h1>
        <h2>Viva México!</h2>
      </SWellcome>
      <SIframeContainer>
        <SVideoPlayer src="https://www.youtube.com/embed/KewfYKJy8YU?controls=0&amp;start=49&amp;autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></SVideoPlayer>
      </SIframeContainer>
    </SWrapper>
  )
}

export default Home