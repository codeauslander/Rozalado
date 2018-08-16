import React from "react";
import styled from "styled-components";

const StyledGuidelines = styled.div`
	border-radius: 5px;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
	margin-bottom: 2rem;
	padding: 1rem;
`;

const StyledInstructions = styled.p`
	padding: 0.5rem;
`;

export default ({
  url = "https://us-central1-routecandidates.cloudfunctions.net/tasks"
}) => (
  <StyledGuidelines>
    <h1> First </h1>
  </StyledGuidelines>
);
