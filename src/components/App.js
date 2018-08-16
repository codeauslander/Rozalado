import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import Header from './Header';
import Guidelines from './Guidelines';
import { fetchTasks } from '../actions/tasks';
import { filterSortTasks } from '../actions/tasks';
import Task from './Task';
import Tasks from './Tasks';

const Container = styled.main`
  margin: 1rem;
`;

const Button = styled.button`
  background: #3399ff;
  border-radius: 0.5rem;
  border: bold;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 2rem;
  outline: none;
  padding: 1rem;
  
`;

const Search = styled.div`
  background: #111111;
  border-radius: 0.5rem;
  border: bold;
  color: #ffffff;
  font-size: 1rem;
  float: left
  padding: 1rem;
  margin-bottom: 2rem;
`;

const InputSearch = styled.input`
  background: #ffffff;
  border-radius: 0.5rem;
  border: bold;
  color: #000000;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayList: false,
      search: '',
      tasks: []
    };
    this.showList = this.showList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  showList() {
    this.setState({
      displayList: !this.state.displayList,
    });
  }

  handleChange(event) { 
    const key = event.target.name;
    const value = event.target.value;
    // (tasks, text, sortBy = 'id')
    const tasks = this.props.filterSortTasks(this.props.tasks,value);
    this.setState({[key]: value});
    console.log(this.props);

  }



  render() {
    let { tasks = [], loading, error } = this.props;

    const show = !this.state.displayList;
    const display = this.state.displayList ? 'Tasks : show' : 'Tasks : hide';

    const name = "Cesar Catano";
    const github = "@codeauslander";
    const url = "https://github.com/codeauslander";
    let title = `${name} ${github}`;
    // const date = moment().format("MMM Do YY");
    const date = moment()
      .add(14, "days")
      .calendar();

    if (!loading) {
      tasks = this.props.filterSortTasks(tasks,this.state.search).payload;
      console.log(tasks);
    }

    return (
      <React.Fragment>
        <Header title={title} date={date} github={github} url={url} />
        {error && error}
        <Container>
          <Guidelines />
          <Button onClick={this.showList}>{display}</Button>

          <Search>
            <label>
              Search and Sort
              <InputSearch type="text" name='search' value={this.state.search} onChange={this.handleChange} />
            </label>
          </Search>
          

          {show && <Tasks items={tasks}/>}
        </Container>
      </React.Fragment>
    );
  } 
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  loading: state.loading,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchTasks, filterSortTasks}
)(App);