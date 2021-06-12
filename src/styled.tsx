import styled from 'styled-components'

export const SWrapper = styled.main`
    margin: 0 auto;
    padding: 15px;
    max-width: 1024px;
    width: 100%;
    height: 100%;
    background-color: #111;
    box-shadow: 0 0 9px 12px rgba(0, 0, 0, 0.5);
`

export const SWellcome = styled.header`
    color: #fff;
    padding: 30px 0;

    h1 { 
        font-size: 2.5em;
    }

    h2 { 
        font-size: 2em;
    }
`

export const SVideoPlayer = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-height: 500px;
    border: dashed 1px #222;
    padding: 5px;
`

export const SIframeContainer =  styled.section`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`