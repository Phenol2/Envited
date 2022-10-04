import { Routes, Route } from "react-router-dom"

import {
  Home,
  Event,
  CreateEvent
} from "./components"

function App() {
  return (
    <main style = {{maxWidth: "100vw"}}>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/event" element = {<Event />} />
        <Route path = "/create" element = {<CreateEvent />} />
      </Routes>
    </main>
  );
}

export default App;
