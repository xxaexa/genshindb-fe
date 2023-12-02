import { FC } from "react";
import { About, Artifact, Character, Home, Weapon } from "./pages";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<About />} />
        <Route path="artifact" element={<Artifact />} />
        <Route path="character" element={<Character />} />
        <Route path="weapon" element={<Weapon />} />
      </Route>
    </Routes>
  );
};

export default App;
