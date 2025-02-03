import Component from "./component";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Newpage from "./Newpage";
import Settings from "./Settings";

export default function App() {
  return (
    <div>
      <Router>
        {/* Navigation Link to Newpage */}
        <Routes>
          <Route path="/Newpage" element={<Newpage />} />
          <Route path="/" element={<Component/>} />
          <Route path="/Settings" element={<Settings/>} />
        </Routes>
      </Router>
    </div>
  );
}
