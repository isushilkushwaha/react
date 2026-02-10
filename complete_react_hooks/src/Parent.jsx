import React from "react";
import styled from "styled-components";
import Child from "./Child";

const Parent = () => {
return (
    <Wrapper>
    <h2>Parent Comp</h2>
    <Child />
    </Wrapper>
);
};

const Wrapper = styled.section`

`;

export default Parent;