import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DynamicPageRenderer from './utils/DynamicPageRenderer';

function App() {  
  const [selectedNav, setSelectedNav] = useState("Payouts");
  return (  
    <div className='layout'>
      <div className="left">
      <Sidebar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      </div>
      <div className="right">
      <Topbar title={selectedNav}/>
      <DynamicPageRenderer pageName={selectedNav} />
      </div>
    </div>
  )
}

export default App
