import Card from "./components/Card";
import Header from "./components/Header";
import { FaTwitter,FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa';
import { IoMdArrowDropup,IoMdArrowDropdown } from 'react-icons/io';
import Overview from "./components/Overview";
import { useState } from 'react';

function App() {

  const [toggle,setToggle] = useState(false);

  return (
    <div className={toggle ? 'darkMode' : 'lightMode' }>
      <Header toggle={toggle} setToggle={setToggle} />
      <div className="container">
        <div className="subcontainer cards">
          <Card toggle={toggle} arrow={<IoMdArrowDropup />} icon={<FaFacebook />} customCard="card--fb" followers={1987} user="@nathanf" today={12} />
          <Card toggle={toggle} arrow={<IoMdArrowDropup />} icon={<FaTwitter />} customCard="card--twitter" followers={1044} user="@nathanf" today={99} />
          <Card toggle={toggle} arrow={<IoMdArrowDropup />} icon={<FaInstagram />} customCard="card--instagram" followers="11k" user="@realnathanf" today={1099} />
          <Card toggle={toggle} arrow={<IoMdArrowDropdown />} icon={<FaYoutube />} customCard="card--youtube" followers={8239} user="Nathan F." today={144} />
        </div>
      </div>
      <Overview toggle={toggle} />
    </div>
  );
}

export default App;
