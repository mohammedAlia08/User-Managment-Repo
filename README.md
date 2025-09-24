# User Management Dashboard

## Overview
React-based User Management Dashboard demo using JSONPlaceholder for mock backend.

## Features
- List users with pagination, sorting, search and filters
- Add / Edit / Delete user (mock API)
- Client-side validation, error handling with alerts

## Tech Stack
- React 18, react-router-dom v6, Axios
- Mock API: JSONPlaceholder (https://jsonplaceholder.typicode.com). Note: changes are not persisted. :contentReference[oaicite:2]{index=2}

# Setup
1. Install: `npm install`
2. Run: `npm start`
3. Run: `npx react-scripts start`

## Deploy
- Push to GitHub, deploy on Netlify or Vercel.

## Notes
- API base can be overridden with `REACT_APP_API_BASE`.
- For a realistic local mock that *appears* persistent consider `json-server` or `msw`.
