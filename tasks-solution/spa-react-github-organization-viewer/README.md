# GitHub Organization Viewer

When complete, this application will using the GitHub API and using the organization names in the included [public/orgs.csv](./public/orgs.csv) file, download information about each organization. If an organization is viewed for over 15 seconds, it fetches a list of public repositories for that organization.

## Tasks

The CSS is already complete and is included in this repository.

[Live demo](https://dci-webdev.github.io/spa-react-github-organization-viewer/)

> 🐘 Remember to wait 15+ seconds for the repository list!

### Task 1

Working in [App.jsx](./src/App.jsx);

1. Create a state variable, `orgs`

2. When the `App` component is first rendered, `fetch` the included `orgs.csv` (you can find this in the [public](./public/) folder)

   - Convert the response into an array of strings
   - Save the resulting array into `orgs`

3. Create another state variable, `currentOrg`

   - Once the `orgs` state variable array has data, take the first item from the array and store it into `currentOrg`

4. Create another state variable, `currentOrgData`

   - Once the `currentOrg` state variable has a value
   - Start to fetch the organization data from GitHub
   - For example, `GET https://api.github.com/orgs/microsoft`

5. Once the `currentOrgData` state variable has a value

   - Import and render the `Organization` component
   - Pass the following as props for `Organization`
   - `orgs`, `currentOrg`, `currentOrgData`, `setCurrentOrg`

### Task 2

Working in [Organization.jsx](./src/components/Organization.jsx)

1. Read the code
2. Don't delete any of the old code
3. Create a state variable; repos
4. Write some logic, so that when the `Organization` component is rendered;

   - Start a 15 second timer
   - After 15 seconds, `fetch` the repos of that organization
   - For example, `GET https://api.github.com/orgs/microsoft/repos`
   - Save the resulting array into the state variable `repos`

5. Once the `repos` state variable has a value

   - Use `Array.prototype.map()`
   - Import and use the included `Repo` component

## Task 3

Test the application and check that;

- You're only showing the repositories of the currently open organization
- No repositories are shown during the 15 second waiting time
- There are no errors or warnings in the developer tools `console`
- Only one request is sent to fetch the organization details
- Only one request is sent to fetch the organization repo list
