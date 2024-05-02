import "./style.css";
import images from "../../assets/images";
function DarkMode() {
  function setDarkMode() {
    document.querySelector('html').setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  function setLightMode() {
    document.querySelector('html').setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if(e.target.checked){
      setDarkMode();}
    else{
      setLightMode();
    }
  }
  return (
    <div className="darkSwitch">
      <input type="checkbox" id="darkmode-toggle" onChange={toggleTheme} defaultChecked={theme==="dark"}/>
		<label htmlFor="darkmode-toggle" className="labelDark">
    <img src={images.Sun} alt="Sun" style={{ width: '30px' }} className="sun"/>
    <img src={images.Moon} alt="Moon" style={{ width: '30px' }} className="moon"/>

		</label>
    </div>
  );
  
}

export default DarkMode;