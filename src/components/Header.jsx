
const Header = ({toggle,setToggle}) => {

  return (
    <header className="head container">
        <div className="head__content subcontainer">
            <div className="head__titles">
                <h1 className={toggle ? `head__title__dark` : 'head__title__light' }>Social Media Dashboard</h1>
                <span>Total Followers: 23,004</span>
            </div>
            <div onClick={() => setToggle(!toggle)} className={ toggle ? 'head__mode__dark' : "head__mode" }>
                <h2>{toggle ? 'Dark Mode' : 'Light Mode'}</h2>
                <div className={toggle ? 'head__switch__dark' : 'head__switch'}>
                    <div onClick={() => setToggle(!toggle)} className={toggle ? "head__dark" : 'head__light'}></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header