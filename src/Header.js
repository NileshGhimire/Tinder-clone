import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link,useHistory} from 'react-router-dom';
import "./Header.css"


function Header({backButton}) {
    const history=useHistory();
    return (
        //BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick = { () => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header_back"></ArrowBackIosIcon>
                </IconButton>
            ):(
            <IconButton>
                <PersonIcon className="header_icon" fontSize="large"/>
            </IconButton>
            )}
            <Link to="/">
            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                alt="Tinder-logo" className="header_logo"></img>
            </Link>
            
            <Link to="/chat">
            <IconButton>
            <QuestionAnswerIcon className="header_icon" fontSize="large"/>
            </IconButton>
            </Link>
            
        </div>
    )
}

export default Header;