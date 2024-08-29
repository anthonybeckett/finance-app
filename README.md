# Finance App

A simple finance app built using .NET as an API and a React front end.

## Front End  

Start by creating a .env file based from the example

```bash
cp .env.example .env
```  

`REACT_APP_API_KEY` can be created at `financialmodelingprep.com` and grabbing an API key from the dashboard page.

Instructions to start the development environment.  

```bash
cd ./frontend

npm start
```

## Back End  

To start the backend in development mode change into the `api` folder and run the following  

```bash
dotnet run watch
```