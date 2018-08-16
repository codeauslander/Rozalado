import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.main`
  margin: 1rem;
`;

export default ({ items }) => {
  return <ul>{items.map(task => {
      
      const plain = JSON.stringify(task);
      const object = task.task;
      let item = '';
      if (object === undefined || object === null) {
        item = `Task undefined or null ${plain}`;
      } else if (object instanceof Array || object instanceof Object) {
        item =<ul> {Object.keys(object).map((element, index) => (
               <Task key={index} id={index} item={object[element]}/>
          ))}</ul>;
      } else if (typeof object === 'string' || typeof object === 'number')  {
        item = object;
      }

      return (
        <Task key={task._id} id={task._id} item={item}/>
      );
    })}</ul>;
};