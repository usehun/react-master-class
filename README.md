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

#### 2023-05-08 셋업, 스타일 컴포넌트 설명
