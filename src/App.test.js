import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main headline of application', () => {
  render(<App />);
  const mainHeadline = screen.getByText(/RED6 Demo/i);
  expect(mainHeadline).toBeInTheDocument();
});

test('renders sub headline of application', () => {
  render(<App />);
  const subHeadline = screen.getByText(/Task List App/i);
  expect(subHeadline).toBeInTheDocument();
});

test('renders task list component', () => {
  const renderedApplication = render(<App />);
  const taskListElement = renderedApplication.container.querySelector('.task-list');
  expect(taskListElement).toBeInTheDocument();
});

test('renders task form component', () => {
  const renderedApplication = render(<App />);
  const taskFormElement = renderedApplication.container.querySelector('.new-task-form');
  expect(taskFormElement).toBeInTheDocument();
});
