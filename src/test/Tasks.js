import React from 'react';
import {shallow } from 'enzyme' ;
import Task from '../components/Task';

describe('tasks', () => {
  component = shallow(<Task />);
  it('shows a Task', () => {
    expect(component.children.length).toEqual(1);
  });
});