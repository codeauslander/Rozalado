import React from 'react';
import {shallow } from 'enzyme' ;
import Task from '../components/Task';
console.log('running test');
describe('tasks', () => {
  let component = shallow(<Task />);
  it('shows a Task', () => {
    expect(component.children.length).toEqual(1);
  });
});