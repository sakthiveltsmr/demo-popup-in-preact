import { h } from 'preact';
import style from './style.css';

// import Model from '../../components/modelpopup';
const Home = ({setpopup}) => {
	
	return(
	<div class={style.home}>
		<h1 onClick={()=>setpopup(true)}>Home</h1>
		<p>This is the Home component.</p>
	   
	</div>
	)
};

export default Home;
