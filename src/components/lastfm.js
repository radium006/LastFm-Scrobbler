import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { register } from '../serviceWorker';




class Lastfm extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            profilePic: '',
            nowPlayingTrack: '',
            nowPlayingArtist: '',
            nowPlayingAlbum: '' 
        }
    }
    
    componentDidMount = () => {

        axios.get('http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=kevin131689&api_key=' + LASTFM_API_KEY + '&format=json')
        .then(res => {
            
            this.setState({
                username: res.data.user.name,
                profilePic: res.data.user.image[2][`#text`]
            })
        })


        axios.get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kevin131689&api_key=' + LASTFM_API_KEY + '&format=json')
        .then(res => {
            console.log(res)
            this.setState({
                nowPlayingTrack: res.data.recenttracks.track[0].name,
                nowPlayingAlbum: res.data.recenttracks.track[0].album[`#text`],
                nowPlayingArtist: res.data.recenttracks.track[0].artist[`#text`]
            })
        })
            
        
    }
    
    
    render(){
        
        this.props.updateInfo(this.state)

        return(
            <div>
                <h1>LastFM to Spotify link translator</h1>
                <div>
                    <h2>{this.state.username}</h2>
                    <img src={this.state.profilePic} />
                </div>
                <div>
                    <h2>NOW PLAYING ON LASTFM:</h2>
                    <h3>Track name: {this.state.nowPlayingTrack}</h3>
                    <h3>Artist: {this.state.nowPlayingArtist}</h3>
                    <h3>Album: {this.state.nowPlayingAlbum}</h3> 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateInfo: (info) => {
            dispatch({type: 'UPDATE', payload: info})
        }
    }
}

export default connect(null, mapDispatchToProps)(Lastfm)