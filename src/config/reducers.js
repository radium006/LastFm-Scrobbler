const initialState = {
   
        artistName: '',
        songName: '',
        albumName: ''
    
}

const getInfo = (state=initialState, action) => {
   
    switch (action.type){
        case 'UPDATE':
            
            return{
                ...state,
                artistName: action.payload.nowPlayingArtist,
                songName: action.payload.nowPlayingTrack,
                albumName: action.payload.nowPlayingAlbum,
        
            }
    }
    
    return state
} 

export default getInfo