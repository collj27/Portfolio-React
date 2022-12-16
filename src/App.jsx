import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/about/about";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";

function App() {
    return (
        <Router>
            <Header></Header> {/*navbar*/}
            <Routes>
                <Route exact path='/' element={<About/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/projects' element={<Projects/>}></Route>
                <Route exact path='/contact' element={<Contact/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
