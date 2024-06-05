import styled, {keyframes, css} from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 20px;
    position: absolute;
    flex-wrap:wrap;
`

export const List = styled.ul`
    width: 100%;
    display: flex;
    column-gap: 20px;
    li {
        background-color: ${ props  => props.done === "true"  && "green"};
    }
    
`
const fadeInInput = keyframes`
    0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-60px) translateX(0);
  }
  50% {
    transform: translateY(-60px) translateX(70px);
  }
  100% {
    transform: translateY(0px) translateX(70px);
  }
`

const fadeInInputin = keyframes`
    0% {
    transform: translateY(0) translateX(0);
  }
  20% {
    transform: translateY(-60px) translateX(0);
  }
  40% {
    background-color: #d23333;
    transform: translateY(-60px) translateX(70px);
  }
  80% {
    transform: translateY(-60px) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
`

const fadeInOut = keyframes`
      0% {
        transform: translateX(0);
    }      
    100% {
        transform: translateX(-70px);
      }
`

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    ${({ current }) =>
        current === "true" 
        ? 
        css`animation: ${fadeInInput} 1s ease-in-out forwards`
        : 
        ''
    };
    ${({ less }) =>
        less === "true" 
        ? 
        css`animation: ${fadeInInputin} 1s ease-in-out forwards`
        : 
        ''
    };
    background-color: ${ props  => props.current === "true"  ? "orange": "#dbdbdb"};
    ${({ next }) =>
    next === "true" 
      ? 
      css`animation: ${fadeInOut} 0.3s ease-in-out forwards`
      : 
      ''
    };
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 
                0px 3px 4px 0px rgba(0,0,0,0.14), 
                0px 1px 8px 0px rgba(0,0,0,0.12);
    position: relative;
    
       
`

export const Number = styled.p`
    color: black;
    font-weight: bold;
    
`