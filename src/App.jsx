import Index from 'pages';
import 'styles/styles.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import RhodesianInfoPage from 'pages/rhodesian';
import BorderCollieInfoPage from 'pages/borderCollie';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/rhodesian" element={<RhodesianInfoPage/>}/>
                <Route path="/bordercollie" element={<BorderCollieInfoPage/>}/>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
