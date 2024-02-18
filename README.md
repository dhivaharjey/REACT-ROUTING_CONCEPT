# ROUTING

# REACT-ROUTING CONCEPT

- First install npm pakage name called `react-router-dom`.
- Using this command in terminal `npm i react-router-dom`.
- Routing Concept
  - _In a single-page React Application, routing refers to the process of navigating between different pages without triggering a full page reload. The application initially loads a single HTML page. Then, it dynamically renders different components based on user interaction._
- `import { BrowserRouter, Routes, Route } from "react-router-dom";`

- ```
  <BrowserRouter>
         <App />
      </BrowserRouter>
  ```

- ```
  <Routes>
  <Route path="/" element={<component />} />
  <Route path="/path-name" element={<component />} />
  <Route path="/path-name:id" element={<component />} />
  </Routes>
  ```

- ```
   <Link to = "/path-name">Name<Link>
           or
    <NavLink to = "/path-name">Name<NavLink>

  ```

- In here you can navigate through different course details component using NavBar.
- Respective course details will show.

> Thanks for visiting .....😊
