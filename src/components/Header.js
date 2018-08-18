import React from "react";
import moment from "moment";
import styled from "styled-components";

const StyledHeader = styled.header`
	align-items: center;
	background-color: #3399ff;
	color: #ffffff;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	padding: 1rem;
	width: 100%;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
`;

const StyledTitle = styled.h1`
	font-size: 1.8rem;
	font-weight: 300;
	margin: 0;
`;

const StyledDate = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
`;

const StyleUrl = styled.a`
	color: #ffffff;
	font-size: 1rem;
	text-decoration: none;
`;

const placeholder = moment().format("MMM Do YY");

export default ({ title, date, github, url, reformat }) => {
  const style = reformat ? {color:'#6600cc'} : {};
  return <StyledHeader >
    <StyledTitle style={style} >
      {title} <StyleUrl  href={url}>{url}</StyleUrl>
    </StyledTitle>
    <StyledDate>{date || placeholder}</StyledDate>
  </StyledHeader>;
};
