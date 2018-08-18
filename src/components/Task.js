import React from "react";
import styled from "styled-components";

const StyledTask = styled.li`
	border-radius: 5px;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
	margin-bottom: 2rem;
	padding: 1rem;
`;


export default ({ id, item, reformat}) => {
  const style = reformat ? {color:'#6600cc'} : {};
  return <StyledTask style={style}> ({id}) {item} </StyledTask>;
}