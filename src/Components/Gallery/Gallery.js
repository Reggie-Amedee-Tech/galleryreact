import React, {useState} from 'react';
import Button from '../Button/Button';

const Gallery = () => {
    const [gallery, setGallery] = useState(Number);

    const arrayOfPictures = [<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8480689a-a0eb-4fb1-8db3-10e18f62e773/dezlzal-8c3dd93c-d7a4-4d69-b754-c58c1272fa2f.png/v1/fill/w_1280,h_1807,q_80,strp/malenia_the_severed__by_sephilash_dezlzal-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwNyIsInBhdGgiOiJcL2ZcLzg0ODA2ODlhLWEwZWItNGZiMS04ZGIzLTEwZTE4ZjYyZTc3M1wvZGV6bHphbC04YzNkZDkzYy1kN2E0LTRkNjktYjc1NC1jNThjMTI3MmZhMmYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hFKTH-Gy_JoMQvAYgk-aCQnrzPtffitNYoZpLL-etnI"></img>, <img src="https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia,-blade-of-miquella.jpg"></img>, <img src='https://assets2.rockpapershotgun.com/malenia-head-elden-ring.jpg/BROK/resize/880%3E/format/jpg/quality/80/malenia-head-elden-ring.jpg'></img>]

    const goToNext = () => {
        setGallery((prev) => {
             

            if (prev >= arrayOfPictures.length - 1) {
                return prev = 0;
            }

            return prev + 1;
        })

        
        
    }

    


    return (
        <div>
            <p>Picture of Malenia The Severed</p>
            {arrayOfPictures[gallery]}
            <Button onClick={goToNext}/>
        </div>
        
        
    )
}

export default Gallery;