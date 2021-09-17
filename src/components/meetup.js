import React,{useContext} from 'react'
import classes from "../css/meetup.module.css"
import FavoritesContext from '../store/favorites-context'

const Meetup = (props) => {
  const favoritectx = useContext(FavoritesContext)
  const isFavorite = favoritectx.isFavorite(props.id)
  const toggleFavoriteHandler = (id)=>{
    if(isFavorite){
      favoritectx.removeFavorite(id)
    }else{
      favoritectx.addFavorite({id:props.id,title: props.title, image: props.image, address: props.address, discription: props.discription})
    }
  }
  return (
    <div className={classes.incard}>
      <img className={classes.img} src={props.image} alt="" />
      <div className={classes.title}>{props.title}</div>
      <div className={classes.address}>address : {props.address}</div>
      <div className={classes.discription}>{props.discription}</div>
      <button onClick={()=>toggleFavoriteHandler(props.id)} className={classes.addFavorite} >{isFavorite?"remove Favorite":"add favorite"}</button>
      
    </div>
  )
}

export default Meetup
