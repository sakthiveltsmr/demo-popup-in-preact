
import style from './style.css';


const Model=({onset})=>{
 return( 
 <form class={style.popup}>
    <button class={style.close} onClick={()=>onset(false)}>X</button>
    <h1 className={style.body}>welcome to retainfull</h1>
  </form>
  )
}

export default Model