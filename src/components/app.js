import { h} from 'preact';
import { Router } from 'preact-router';

import Header from './header';


// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

import { useState } from 'preact/hooks';

import Model from "./modelpopup"

const App = () => {
const [popups,setpopup]=useState(false)

const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}
const storageType = cookieStorage;
const consentPropertyName = 'popups';
const shouldShowPopup = () => storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

	
  window.onmouseout=(event)=>{
	if(event.screenY<115) {
	
          const value =shouldShowPopup()
		  if(!value){
			setpopup(true)
			saveToStorage(storageType);
		  }

   }
 }
		
	  
	
	return(<div id="app" >
		{popups && <Model setpopup={setpopup} />}
		<Header />
		
		<Router>
			<Home path="/" pop={popups} setpopup={setpopup} />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
		
	</div>)
}

export default App;
