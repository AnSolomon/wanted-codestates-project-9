## 배포 링크

https://curious-basbousa-0645b4.netlify.app/
   
  
  <br>
  
## 프로젝트 실행 방법
1. npm install
2. npm start
  
  <br>
  
## 기술 스택
1. JavaScript
2. React
3. Redux-Toolkit
  
  <br>

## 구현한 기능 목록

<br>

 ### 검색 메인 페이지

![image](https://user-images.githubusercontent.com/87939970/160152047-fb3df973-d00f-4752-8eba-50e301824a5c.png)

화면 진입 시 양 옆 캐릭터와 검색창에 애니메이션 효과를 주었다.
유저 닉네임을 검색 후 엔터키나 마우스로 TMI 버튼을 클릭하면 조회할 수 있으며, 랭킹 버튼을 누르면 랭킹 페이지를 볼 수 있다.
유저 검색을 하면 localStorage에 최근 검색한 유저가 저장이 되며 자동완성 기능이 나타난다.
또한, API를 2번 요청해야 개인 전적 데이터를 받아 올 수 있는데 localStorage에 저장된 유저 검색 시 캐싱 개념을 써서 해당하는 accessId를 바로 가져와서 데이터를 요청한다.
최대 5명의 유저만 저장되고 5명 초과 시 가장 오래된 유저를 삭제한다.
  
  <br>
  


### 개인 전적 조회 페이지

![image](https://user-images.githubusercontent.com/87939970/160160422-4c8cfdf2-9261-412c-9b5b-dd32fa97db00.png)


![image](https://user-images.githubusercontent.com/87939970/160152409-75dd5059-a40f-4ebf-bd54-0ab94e861bcb.png)

유저를 검색하면 spinner 애니메이션이 나오면서 잠시 대기를 하다가 화면이 나타난다.  
API 요청으로 받아온 데이터를 이용하여 유저 캐릭터와 닉네임 그리고 레벨을 표시하였다.  
그 옆은 받아온 데이터를 가지고 꺾은선 그래프를 만들었고, 아래쪽은 1대 1 대결 요청 관련 메뉴를 만들었고, 배경화면이 바뀌는 애니메이션을 적용하였다.  
그 다음 아래에는 종합(스피드전 + 아이템전), 스피드전, 아이템전의 전적을 표시하였고, 승률, 완주율, 리타이어율을 원형 그래프로 나타내었다.  
그 아래는 유저가 최근에 play한 내용을 시작 시간, 순위, 트랙, 카트, 완주 시간 순으로 나타내었다.  
  
  <br>
  

### 랭킹 페이지
  
![image](https://user-images.githubusercontent.com/87939970/160152457-fbd0392a-ef08-46ef-a963-731fa00c655a.png)

원래 의도는 해당 월 시작 날짜와 현재 날짜 기준으로 모든 매치를 조회한 뒤, 각각 매치 상세 데이터를 받아와 유저간 승리횟수가 가장 많은 유저 순으로 랭킹을 구성하려 했고 실제로 구현 뒤, 요청을 하는데 429 Error가 자꾸 발생하여, 그냥 자체적으로 Sample 데이터를 만들어서 구현하였다.
배경에 wave 애니메이션을 넣었으며, 아래 순위는 무한 스크롤을 적용하였다.

  
  <br>
  

## 그래프 및 애니메이션 적용 지점

- 그래프

개인 전적 조회 페이지에 꺾은 그래프와 아래 원형 그래프

- 애니메이션

메인 화면 양 옆 캐릭터

메인 화면 유저 검색창

유저 검색 시 스피너

개인 전적 조회 시 1대1 대결 요청 메뉴 배경

랭킹 화면 뒤쪽 Wave 애니메이션







