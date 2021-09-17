import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites : 0,
})

export const FavoriteContextProvider=(props)=>{
  const[favorites, setFavorites] = useState([])
  const addFavorite=(meetup)=>{
    setFavorites(prev=> prev.concat(meetup))
  }
  const removeFavorite=(id)=>{
    setFavorites(favorites.filter(meetup => meetup.id !== id ))
  }
  const isFavorite=(id)=>{
    return favorites.some(item => item.id === id)
  }
  const context={
    favorites : favorites,
    totalFavorites : favorites.length,
    addFavorite : addFavorite,
    removeFavorite : removeFavorite,
    isFavorite : isFavorite
  }
  return(
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}
export default FavoritesContext