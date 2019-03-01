import React, { Component } from 'react';
import axios from 'axios'


const LASTFM_API_KEY = 
const LASTFM_SECRET = 

class Lastfm extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            profilePic: '',
        }
    }
    
    componentDidMount = () => {

        axios.get('http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=kevin131689&api_key=' + LASTFM_API_KEY + '&format=json')
        .then(res => {
            console.log(res)
            this.setState({
                username: res.data.user.name,
                profilePic: res.data.user.image[2][`#text`]
            })

            
        })
        

    }

    render(){
        return(
            <div>
                <h2>{this.state.username}</h2>
                <img src={this.state.profilePic} />
            </div>
        )
    }
}  

export default Lastfm