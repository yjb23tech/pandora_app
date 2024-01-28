import { db } from "../firebase/firebase.js"
import { ref, push, onValue } from "firebase/database"

import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {

    function handleClick(e) {

        e.preventDefault()

        const pandoraCommentsDB = ref(db, "pandorasbox")
    
        let inputBtn = document.getElementById(`${props.song_card_id}`)
        let inputBtnValue = inputBtn.value

        push(pandoraCommentsDB, inputBtnValue)

        console.log("Frankenstein's Monster!")
        console.log(inputBtnValue)

        onValue(pandoraCommentsDB, function(snapshot) {
            let pandoraCommentsArray = Object.values(snapshot.val())
            console.log(pandoraCommentsArray)

            for (let i = 0; i < pandoraCommentsArray.length; i++) {
                console.log(pandoraCommentsArray[i])
            }
        })

    }

    return (
        <div className="song-card util-box-border-blue">
            <img src={`images/${props.song_card_img}`} />
            <div className="song-card-contents util-box-border-red">
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
                    <input className="comment-input-field" id={props.song_card_id} type="text" placeholder="leave a comment :D" />
                    <button className="comment-submit-btn" id="comment-submit" onClick={handleClick}>GO!</button>
                </div>
            </div>
        </div>
    )
}

export default Card; 