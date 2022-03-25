import styled, {keyframes} from "styled-components";


export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  min-width: 1000px;
  overflow-y: hidden;
  overflow-x: hidden;

`;

export const ContentMain = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 680px;
  margin-top: -55px;
  background-image: url("https://ansolomon.github.io/wanted-codestates-project-9/img/main_bg1.png");
  z-index: 0;
`;


const motionLeftAnimation = keyframes`
  0% {
    left: -50%;
  }
  50% {
    left: -25%;
  }
  100% {
    left: 0%;
  }
`;

const motionRightAnimation = keyframes`
  0% {
    right: -50%;
  }
  50% {
    right: -25%;
  }
  100% {
    right: 0%;
  }
`;

export const LeftImg = styled.img.attrs({
  src: "https://ansolomon.github.io/wanted-codestates-project-9/img/covid_left.png",
})`
  position: absolute;
  width: 380px;
  top: 200px;
  left: 0;
  margin-left: 3%;
  animation: ${motionLeftAnimation} 1s;

`;

export const LeftMainImg = styled.img.attrs({
  src: "https://ansolomon.github.io/wanted-codestates-project-9/img/main_left_bg.png",
})`
  position: absolute;
  width: 380px;
  top: 200px;
  left: 0;
  margin-left: 3%;
  animation: ${motionLeftAnimation} 1s;

`;

export const RightImg = styled.img.attrs({
  src: "https://ansolomon.github.io/wanted-codestates-project-9/img/covid_right.png",
})`
  position: absolute;
  width: 380px;
  top: 200px;
  right: 0;
  margin-right: 3%;
  animation: ${motionRightAnimation} 1s;

`;

export const RightMainImg = styled.img.attrs({
  src: "https://ansolomon.github.io/wanted-codestates-project-9/img/main_right_bg.png",
})`
  position: absolute;
  width: 380px;
  top: 200px;
  right: 0;
  margin-right: 3%;
  animation: ${motionRightAnimation} 1s;

`;

export const HomeTitle = styled.div`
  width: 1000px;
  height: 100%;
`;


export const MainMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  font-weight: bold;
  color: white;
  letter-spacing: -1px;
`;

export const MainContent = styled.p`
  margin: 0;
  padding: 1px;
`;

export const MainCopy = styled.div`
  width: 280px;
  margin-top: 7px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const  motionInputAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }

`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 58%;
  left: 50%;
  width: 50%;
  height: 49px;
  border: 4px solid white;
  border-radius: 33.5px;
  padding: 5px;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  z-index: 10;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  animation: ${motionInputAnimation} 1s;
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-left: 20px;
`;

export const SearchInputDiv = styled.div`
  width: 80%;
  margin-left: 20px;
`;

export const SearchButton = styled.div`
  display: flex;
  background-color: transparent;
  margin-right: 25px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  color: white;
  font-size: 24px;

  &:focus {
    &::placeholder {
      color: transparent;
      transition: all 0.2s ease-in-out;
    }
  }

  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;

export const SearchLable = styled.label`
  width: 100%;
  height: 35px;
  white-space: nowrap;
  font-size: 24px;
  padding-right: 10px;
  border-right: 2px solid white;
  color: white;
`;

export const SelectTypeModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 110%;
  left: 0%;
  width: 15%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const SelectOption = styled.p`
  width: 90%;
  height: 100%;
  font-size: 18px;
  left: 0%;
  margin: 5px;
  padding: 5px;

  color: white;

  &:hover{
    background-color: #005fcc;
    opacity: 0.8;
  }
`;

export const AutoSearchModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 110%;
  left: 17%;
  width: 73%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AutoSearchContent = styled.p`
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
`;