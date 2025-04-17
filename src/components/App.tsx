import React, { ReactNode } from 'react';
import { fetchTodos, Todo } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  render(): ReactNode {
    return <div>Hi there</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
