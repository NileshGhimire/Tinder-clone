import React from 'react'
import './Swipebuttons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton';
function Swipebuttons() {
    return (
        <div className="swipebuttons">
            <IconButton className="swipebutton_replay">
            <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_close">
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_star">
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_favorite">
            <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_flash">
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Swipebuttons
