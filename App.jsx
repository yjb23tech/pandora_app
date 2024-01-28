import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>Sanity Check</h1>
            <Card 

                song_card_img = "track_1_song_art.png"
                song_card_song_title = "Blame Game"
                song_card_album_name = "My Beautiful Dark Twisted Fantasy"
                song_card_artist_name = "Kanye West"
                song_card_genre_name = "Baroque Sophisticated Ignorance"
                song_card_id = "1"

            />

            <Card 
                song_card_img = "track_8_song_art.png"
                song_card_song_title = "Runway"
                song_card_album_name = "My Beautiful Dark Twisted Fantasy"
                song_card_artist_name = "Kanye West"
                song_card_genre_name = "Baroque Sophisticated Ignorance"
                song_card_id = "2"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

