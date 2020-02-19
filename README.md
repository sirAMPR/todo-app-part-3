## Overview

Convert your Todo App to using Redux. Redux is an alternative to passing props through several layers of child components in order to get data where you need it to be. The goal of this assessment will be to refactor your app so that your application's state is in a Redux store instead of in your App component's state.

In this assessment, you will demonstrate a basic understanding of the following:

- mapStateToProps
- mapDispatchToProps
- Actions / Dispatch
- Reducers
- Store / Provider / Connect

## Getting Started

To get started, copy your code from the previous part into a new repository.

## Acceptance Criteria

Look at the Rubric Below.

## Technical Details

Conceptually, all of the business logic contained in your event handler functions will now become action creator functions. One exception to be careful of is the `handleCreate` event handler; there is an `if` statement that checks whether the key pressed was an `Enter` key or not. That logic should stay in your `handleCreate` event handle because it is logic directly related to handling the DOM event. However, all the other code is business logic that can be moved to an action creator function that could be called `addTodo`.

Every action creator will have an associated action type constant. For example, the `addTodo` action creator will return an action object whose `type` property will be `ADD_TODO`.

Some event handler methods had to be passed down as props two times. For example, the `handleDelete` handler was defined in the `App` component and it was passed down to `TodoList` and then passed down again to `TodoItem`. With Redux, we do not have to pass down props multiple times. You should only have to pass down props a maximum of one time.

You can achieve this by using `connect` to connect any component to read data from the redux store (via `mapStateToProps`) or to fire an action creator (via `mapDispatchToProps`).

## Stuck? Here are some Helpful Resources

switch

Actions

Reducers

Action Types

Store

Provider

Connect: Extracting Data with mapStateToProps

Connect: Dispatching Actions with mapDispatchToProps

## Submission

You will be required to submit a deployed application. If you instead submit a link to a repository (that is, only code), you will be awarded 0 points.
