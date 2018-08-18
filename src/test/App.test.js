import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Store from '../store/configureStore';
import App from '../components/App';
import Guidelines from '../components/Guidelines';
import Header from '../components/Header';
import Task from '../components/Task';
import Tasks from '../components/Tasks';

// import axios from 'axios';

import { fetchTasksSuccess, filterSortSuccess } from '../actions/tasks'

configure({ adapter: new Adapter() });

let component;
beforeEach(() => {

  component = mount(
    <Store>
      <App />
    </Store>
  );
  component.update();

});

afterEach(() => {
  component.unmount();
});

describe('test', () => {
  it('shows fourteen Task components', () => {
    const tasksUrl = "https://us-central1-routecandidates.cloudfunctions.net/tasks";
    fetch(tasksUrl)
    .then((response) => response.json())
    .then((data) => {
      expect(component.find(Task).length).toEqual(14);
    })
  });
  it('shows one Tasks (List) component renders', () => {
    expect(component.find(Tasks).length).toEqual(1);
  });
  it('shows zero Task components', () => {
    expect(component.find(Task).length).toEqual(0);
  });
  it('shows one Header', () => {
    expect(component.find(Header).length).toEqual(1);
  });
  it('shows one Guidelines', () => {
    expect(component.find(Guidelines).length).toEqual(1);
  });
});