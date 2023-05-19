# React JS Master Class

### 리액트 셋업, 스타일 컴포넌트 설명

    npm i styled-components

    npm ERR! Cannot read properties of null (reading 'edgesOut')
    npm ERR! A complete log of this run can be found in:
    위와 같은 오류가 나올경우
    -> npm i styled-components@latest 입력

    CSS 적용하는 방법
    const css = style.div`Css Declaration`
    변수를 html 태그로 사용

    중복 되는 코드를 없애고 배경색을 다르게 줄 때
    const Box = styled.div`
    background-color: ${(props) => props.bgColor};

    상속 Extending
    const Box = styled.div`
    const Circle = styled(Box)`

    as을 사용하여 엘리먼트를 다른 엘리먼트로 교체할 수 있다.
    <Button as="a" href="/">

    styled(Something) 으로 확장된 컴포넌트도 attr 값을 props 로 커스터마이징 가능하다.
    const Input = styled.input.attrs({required:true})``

    import {keyframe} 추가하여 애니메이션 가능
    const ani = keyframe`
        from{

        }
        to {

        }
    `
    const box = styled.div`
        animation:${ani} 1s linear infinite
    `

    conponent styled 안에 다른 element를 변경할 수 있다.
    const Title = styled.div`
        font-size : 200px;
    `
    const box = styled.div`
        animation:${ani} 1s linear infinite
        span {
            font-size: 50px;
            &:hover {
                font-size: 100px;
            }
        }
        ${Title} {
            font-size:300px;
        }
    `
    Pseudo selector & State selector 방법
    <box>
        <span></span> <- 50px
        <Title as="p">Hello</Title> <-300px
    </box>
        <Title></Title> <- 200px

### 타입스크립트 셋업

    Create React App을 타입스크립트로 시작하기
    npx create-react-app 내 앱 이름 --template typescript
    npm i --save-dev @types/styled-components
    npm i styled-components

    기존에 리액트 프로젝트에 타입스크립트를 추가하기
    1. npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    2. src 폴더 안에 있던 App.js와 index.js 파일을 App.tsx와 index.tsx 로 바꾼다.
    3. "npx tsc --init" 명령어로 tsconfig.json 파일 생성한 후, tsconfig.json 파일에 "jsx": "react-jsx"추가
    -------------------------------------------
    {
    "compilerOptions": {
    ......
    "jsx": "react-jsx"
    }
    }
    -------------------------------------------
    4. src/index.tsx에서 수정
    --------------------------------------------------------------
    import ReactDOM from "react-dom/client"

    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
    ---------------------------------------------------------------
    5. npm i --save-dev @types/styled-components

    6. @types/styled-components 설치할때
    npm ERR! code ERESOLVE ~~~ 나온다면

    package.json 에 dependencies 에다가
    "@types/styled-components": "^5.1.15" 추가하고
    npm install --legacy-peer-deps 입력한다.

### state, ES6 설명

    인터페이스 설명

    useState < number > ( )

    state의 type을 지정하려면 Generics안에 타입을 지정
    일반적으로는 초기값을 지정하면 타입스크립트가 자동으로 타입을 유추하기 때문에 굳이 지정해주지 않아도 되지만 상태가 undefined또는 null이 될 수도 있거나 객체 또는 배열일 때는 지정해주는 것이 좋다.

    (ex) const [ value, setValue ] = useState< Value | null >(null);

    ES6 문법 설명

    const {
        currentTarget: { value },
    } = event;

    const value = event.currentTarget.value;
    const tagName = event.currentTarget.tagName;
    const width = event.currentTarget.width;
    const id = event.currentTarget.id;

    이거를 이렇게 바꿔 쓸 수 있다.

    const {
        currentTarget: {value, tagName, width, id}
    } = event;

#### 2023-05-19 State, ES6 설명

#### 2023-05-08 셋업, 스타일 컴포넌트 설명

#### 2023-05-10 타입스크립트 설치
