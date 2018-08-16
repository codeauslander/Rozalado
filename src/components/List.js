import React, { Component } from "react";
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

export class List extends Component {
  constructor() {
    super();
  }
  render() {
    const items = this.props.tasks;
    return (
      <ul>
        <li>Hi</li>
      </ul>
    );
  }
}
