## Overview

For this assessment, you'll add more functionality to the foundation that you built in the previous assessment.

The focus of this part is to demonstrate a basic understanding of the following:

- Simulating multi-page functionality with react-router
- Separating components into different files
- Filtering results using the .filter method

## Getting Started

To get started, you should copy your existing todo app from the previous part to a new folder, then create a new remote repo, then update the git remote of your local copy to point to the new remote repo.

## Acceptance Criteria

Look at the Rubric Below.

## Finished Product - 3 Views

### All - Path: /

### Active - Path: /active

### Completed - Path: /completed

## Adding Filters

Below is the starter code for adding filters. You will notice this is roughly what your footer should look like at this point (not counting event handlers). The key part for the filters is anything that is within the `<ul className="filters">`. It is your job to add functionality using Components from `react-router-dom`.

```html
<footer className="footer">
  {/*
  <!-- This should be `0 items left` by default -->
  */}
  <span className="todo-count"> <strong>0</strong> item(s) left </span>
  <ul className="filters">
    <li>
      <a href="/">All</a>
    </li>
    <li>
      <a href="/active">Active</a>
    </li>
    <li>
      <a href="/completed">Completed</a>
    </li>
  </ul>
  <button className="clear-completed">Clear completed</button>
</footer>
```

## Stuck? Here are some Helpful Resources

[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

[export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

[React Router](https://reacttraining.com/react-router/web/guides/basic-components)

[Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Deployment

In order to deploy this assessment to gitlab pages successfully, you will need to configure `<BrowserRouter>` with a `basename` prop. If you do not add a `basename` prop, then your app will not display any todos, even when switching between ALL, ACTIVE, and COMPLETED. This will happen because gitlab pages includes an extra url part at the end of your deployed url which is the name of your gitlab repo (ex: https://your-username.gitlab.io/your-repo-name). The problem is BrowserRouter doesn't know about this extra url part if you don't configure it with a `basename` prop. Here is an example of how your BrowserRouter tag should look:

```html
<BrowserRouter basename="{process.env.PUBLIC_URL}"></BrowserRouter>
```

`process.env.PUBLIC_URL` is an environment variable called `PUBLIC_URL`. You will need to add this environment variable into your `.gitlab-ci.yml` file at the bottom of the file:

```yml
variables:
PUBLIC_URL: "/your-project-name" # slash is important
```

Once that is added, the next time you push to gitlab, it will run the gitlab pages deployment and inject this new environment variable, `PUBLIC_URL`, into your frontend code so that the BrowserRouter tag can use it.

Using an environment variable is better than hardcoding the repo name into the BrowserRouter tag because this value could change based on what environment you are running the app in. For example, on gitlab pages, we have the extra url part, but when you are running the app on localhost, there is no extra url part. Since we don't provide a value for `process.env.PUBLIC_URL` when running on localhost, this means that its value will be `undefined` and BrowserRouter will work the same as if you hadnt provided any `basename` prop.

https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string

## Submission

You **will** be required to submit a deployed application. If you instead submit a link to a repository (that is, only code), you _will_ be awarded **0** points.
