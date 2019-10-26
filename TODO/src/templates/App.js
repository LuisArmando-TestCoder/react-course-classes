import React, { Component } from 'react';
import forms from '../services/forms';
import Input from '../components/Input';
import Submit from '../components/Submit';
import TodoCard from '../components/TodoCard';
import Modal from '../components/Modal';
import Menu from '../components/Menu';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.list = localStorage.getItem('todoList');
    this.state = {
      todoList: this.list ? JSON.parse(this.list) : [],
      doShowModal: false,
      sectionIndex: 0
    };
    this.sections = [
      { content: 'Add todo', click: () => this.setState({ sectionIndex: 0 }) },
      { content: 'Todo list', click: () => this.setState({ sectionIndex: 1 }) },
      { content: 'Pending tasks', click: () => this.setState({ sectionIndex: 2 }) },
      { content: 'Finished tasks', click: () => this.setState({ sectionIndex: 3 }) }
    ];
  }

  addTodo(todo) {
    const list = this.state.todoList;

    list.push(Object.assign(todo, { isFinished: false }));
    this.setState({ todoList: list });
    localStorage.setItem('todoList', JSON.stringify(list));
  }

  TodoContent(todo, i) {
    return () =>
      <TodoCard id={`${i + todo.deadline}`} {...todo}
        check={e => {
          this.state.todoList[i].isFinished = !this.state.todoList[i].isFinished;
          this.setState({ todoList: this.state.todoList });
          localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
        }}
        deleteItem={e => {
          this.state.todoList.splice(i, 1);
          this.setState({ todoList: this.state.todoList });
          localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
        }}
        isFinished={this.state.todoList[i].isFinished}/>
  }

  render() {
    return (
      <div className='container'>
        <h1>My todo list</h1>
        <Menu items={this.sections}/>
        { 
          this.state.doShowModal ? 
          <Modal message='Task added!' 
            btn1='Add a task'
            btn2='Show tasks'
            no={() => this.setState({ doShowModal: false })}
            yes={() => this.setState({ doShowModal: false, sectionIndex: 1 })}/> 
          :
          null
        }
        {[
          <form>
            <h2>Add todo</h2>
            <Input id='t-title' label='Title' otherProps={{ name: 'title', type: 'text', }} />
            <Input id='t-deadlineDate' label='Deadline date' otherProps={{ name: 'deadlineDate', type: 'date', }} />
            <Input id='t-deadlineHour' label='Maximum hour' otherProps={{ name: 'deadlineHour', type: 'time', }} />
            <Input id='t-description' label='Description' otherProps={{ name: 'description', type: 'textarea', }} />
            <Submit submit={e => {
              forms.getFormValues(e, todo => this.addTodo(todo));
              this.setState({ doShowModal: true });
            }}/>
          </form>
          ,
          <section>
            <h2>Todo List ({this.state.todoList.length})</h2>
            {this.state.todoList.reverse().map((todo, i) => {
              const Todo = this.TodoContent(todo, i);
              return <Todo key={i}/>;
            })}
          </section>
          ,
          <section>
            <h2>Pending tasks ({this.state.todoList.filter(({ isFinished }) => !isFinished).length})</h2>
            {this.state.todoList.filter(({ isFinished }) => !isFinished).reverse().map((todo, i) => {
              const Todo = this.TodoContent(todo, i);
              return <Todo key={i}/>;
            })}
          </section>
          ,
          <section>
            <h2>Finished tasks ({this.state.todoList.filter(({ isFinished }) => isFinished).length})</h2>
            {this.state.todoList.filter(({ isFinished }) => isFinished).reverse().map((todo, i) => {
              const Todo = this.TodoContent(todo, i);
              return <Todo key={i}/>;
            })}
          </section>
        ][this.state.sectionIndex]}
      </div>
    );
  }
}

export default App;
