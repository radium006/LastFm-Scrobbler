import React, { Component } from 'react';
import {connect} from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js';
import './results.css'
var spotifyApi = new SpotifyWebApi();

class Linkfire extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            
            results: {
                result_songName: '',
                result_albumName: '',
                result_artistName: '',
                result_image: '',
                result_spotifyID: '',
                result_spotifyLink: ''
            }
        }
        this.getSpotifyInfo = this.getSpotifyInfo.bind(this)
    }
    
    componentWillMount(){
        this.getSpotifyInfo()
    }
    

    parseData = (data) => {
        console.log(data.tracks)
        this.setState({
            results: {
                result_songName: data.tracks.items[0].name,
                result_artistName: data.tracks.items[0].album.artists[0].name,
                result_albumName: data.tracks.items[0].album.name,
                result_image: data.tracks.items[0].album.images[1].url,
                result_spotifyID: data.tracks.items[0].id,
                result_spotifyLink: data.tracks.items[0].external_urls.spotify
            }

            
        })
         
    }

    getSpotifyInfo = () => {
        
        // spotifyApi.setAccessToken(SPOTIFY OAUTH GOES HERE)
        console.log('ArtistName: '+ this.state.artistName + ' | songName: ' + this.state.songName + ' |  albumName: ' + this.state.albumName)
        spotifyApi.search(`artist:${this.state.artistName}  track:${this.state.songName}`, ['track'])
        .then(data => this.parseData(data) 
            , function(err){
            console.log('ERROR: ' + err)
        })
    }

   


    render(){

    
        return(
            <div>
                
                <div>
                    <h2>Data queried:</h2>
                    <hr/>
                    <h3>Artist Name: {this.props.currentSongInfo.artistName}</h3>
                    <h3>Song Name: {this.props.currentSongInfo.songName}</h3>
                    <h3>Album Name: {this.props.currentSongInfo.albumName}</h3>
                </div>
                <div>
                    <h2>First result:</h2>
                    <hr/>
                    <div className="results">
                        <div className="pic">
                            <img src={this.state.results.result_image}/>
                        </div>
                        <div>
                            <h3>Song Name: {this.state.results.result_songName}</h3>
                            <h3>Artist Name: {this.state.results.result_artistName}</h3>
                            <h3>Album Name: {this.state.results.result_albumName}</h3>
                            <h3>Spotify ID: {this.state.results.result_spotifyID}</h3>
                            <a href={this.state.results.result_spotifyLink}>Go to Spotify Page of Track</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentSongInfo: state
    } 
}

export default connect(mapStateToProps, null)(Linkfire)