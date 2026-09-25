import {Home} from './Components/Home'
import {About} from './Components/About'
import {Context} from './Components/Context'
import {BrowserRouter as Router, Routes} from 'react-router-dom'

function App(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/context' element={<Context />} />
            </Routes>
        </Router>
        )

    }
export default App