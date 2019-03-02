<h1>Last.Fm Scrobbler</h1>

<h3>Synopsis</h3>
<p>This was a code concept that I developed for a start-up I was doing contract work for.</p>
<p>A little bit of background: LastFm is a popular music streaming platform. Interestingly, LastFm does not stream music tracks from a database that they maintain (like Spotify does this). When a user listens to a track on LastFm, they often times are in fact listening to to a version of said track hosted on Youtube. This technically makes LastFm a relay service whith no concrete path for a user to easily purchase a track from some retailer.</p> 
<p>This program solves that problem by pulling a user's currently playing track information and then uses it to querey Spotify to find their equivalant track entry so the user can locate it on that platform.</p>
<p>I wrote this program using the React JavaScript Framework</p>

<h3>Operation</h3>
<p>This application requires an API key to LastFM and a Spotify OAuth token to operate</p>
<p>The program makes an API call to get get the current playing track of a user on LastFM, it then obtains relevant information that it will use to make a seperate api call to Spotify that ideally wil return the correct track equivilant that can be used as a link to Spotify's platfrom</p>

<h3>Current state of the app:</h3>
<p>Due to the API key requirement of the app it will not function "out of the box" a blank 'keys' file where be added to the next version where a user will imput their own keys to see the app run. The app also has very light styling that wil be updated in the following versions</p>

<h3>TODO:</h3>
<ul>
  <li>Refactor code for the simple swapping of API keys</li>
  <li>Styling</li>
  <li>Recorded video and screenshots of the app in use</li>
</ul>

