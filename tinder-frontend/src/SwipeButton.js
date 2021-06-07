import './SwipeButton.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';



function SwipeButton() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__ReplayIcon">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__CloseIcon">
                <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__StarRateIcon">
                <StarRateIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__FavoriteIcon">
                <FavoriteIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__FlashOnIcon">
                <FlashOnIcon fontSize="large"/>
            </IconButton>

        </div>
    )
}

export default SwipeButton
