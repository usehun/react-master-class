import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  // background-color: ${(props) => props.bgColor};
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato"></Box>
    </Father>
  );
}

export default App;
