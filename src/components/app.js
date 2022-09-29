import { h} from 'preact';
import { Router } from 'preact-router';

import Header from './header';


// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

import { useState } from 'preact/hooks';


const App = () => {
const [popups,setpopup]=useState(false)
	
window.onmouseout=(event)=>{if(event.screenY<200) {
	setpopup(true)

}
}
		
	  
	
	return(<div id="app" >
		
		<Header />
		
		<Router>
			<Home path="/" pop={popups} setpopup={setpopup} />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
		
	</div>)
}

export default App;
