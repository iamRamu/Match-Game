import './index.css'
const Header = props => {
    const {time, totalScore} = props
    //console.log("score", userScore)
    return(
        <nav className="header-bg-container">
            <div>
                <img src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png' alt='website-logo' className='match-game-logo'/>
            </div>
            <div className='header-time-score-container'>
                <div className='custom-container'>
                    <h5 className='score'>Score: <span className='span-score'> {totalScore}</span></h5>
                </div>
                
                <div className='header-time-logo-time-container'>
                    <img src='https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png' alt='timer' className='timer-logo'/>
                    <h5 className='timer'>{time} Sec</h5>
                </div>
            </div>
        </nav>
    )
}
export default Header