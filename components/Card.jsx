import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {
    return (
        <div className="song-card">
            <img src={`images/${props.song_card_img}`} />
            <div className="song-card-contents">
                <h2>{props.song_card_song_title}</h2>
                <div className="info-group">
                    <img src={album_icon} />
                    <p>{props.song_card_album_name}</p>
                </div>
                <div className="info-group">
                    <img src={artist_icon} />
                    <p>{props.song_card_artist_name}</p>
                </div>
                <div className="info-group">
                    <img src={genre_icon} />
                    <p>{props.song_card_genre_name}</p>
                </div>
                <div className="comment-section">
                    <input id="comment-input" type="text" placeholder="leave a comment :D" />
                    <button id="comment-submit">GO!</button>
                </div>
            </div>
        </div>
    )
}

export default Card; 