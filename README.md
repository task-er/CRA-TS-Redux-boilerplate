
##### 개인적으로 자주 사용하는 기술 스택을 적용하여 보일러 플레이트를 만들었다.   
##### 백엔드는 TDD가 중요하지만, 프론트엔드는 CDD, BDD 위주로 가는 게 다방면에서 좋다고 생각하기 때문에
##### 아래처럼 구성하여 초기화했다. 😎   
   
# Configurations
<div>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783240-732b4980-cbe8-11eb-9af3-0ea7e3825eb2.png' width="100px" /></kbd>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783329-e9c84700-cbe8-11eb-9704-ac39e0148016.png' width="150px"/></kbd>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783330-ea60dd80-cbe8-11eb-9af3-fe3509a1fdc4.png' width="110px"/></kbd>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783331-ea60dd80-cbe8-11eb-871a-996b59485616.png' width="130px"/></kbd>
</div>
<div>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783332-eaf97400-cbe8-11eb-9425-e4e547c04de3.png' width="120px"/></kbd>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783333-eaf97400-cbe8-11eb-8304-b1b22846c908.png' width="100px"/></kbd>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783335-eb920a80-cbe8-11eb-9b37-2018b20a8b02.png' width="120px"/></kbd>
  <kbd><img src='https://user-images.githubusercontent.com/59429060/121783327-e92fb080-cbe8-11eb-92f4-abb085bac502.png' width="170px"/></kbd>
</div>

- <i>Why CRA(Create-React-App)? → SPA 구조와 생산성</i>   
       
- <i>Why typescript? → 안정적인 개발</i>   
- <i>Why eslint?
    → 정적 분석과 코딩 컨벤션</i>   
- <i>Why prettier?
    → 코드 스타일과 코딩 컨벤션</i>   
- <i>Why stylelint?
    → 스타일 시트의 정적 분석과 코딩 컨벤션</i>   
- <i>Why CRACO(+alias)?   
    → eject없이 webpack, babel 설정   
    → path의 depth가 깊어짐에 따라 발생하는 가독성 향상</i>   
- <i>Why cypress?
    → e2e scenario test</i>   
- <i>Why storybook?
    → 컴포넌트 설계 및 디자인 시스템</i>  

# How to use this
`$ git clone [repository]`

`$ cd CRA-typescript-eslint-prettier-stylelint-CRACO-cypress-storybook-boilerplate.git`

`$ yarn install`

`$ yarn start` || `$ yarn storybook` || `$ yarn cypress open` || `$ yarn stylelint`

# etc.
만약 단위 테스트를 위해 테스트 코드를 작성하고 싶으면 추가로 craco설정을 해줘야 한다.

# License
Codebases are MIT licensed
