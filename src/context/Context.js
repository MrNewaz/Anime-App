import { createContext, useContext, useEffect, useState } from 'react'
import { getCachedAnime, setCachedAnime } from 'utils/LocalStorage'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  useEffect(() => {
    if (!getCachedAnime()) {
      setCachedAnime([])
    }
  }, [])

  const [animeList, setAnimeList] = useState(getCachedAnime())

  const animeExists = (id) => {
    if (!getCachedAnime()) return false
    return getCachedAnime().some((anime) => anime.id === Number(id))
  }
  const getAnimeById = (id) => {
    return getCachedAnime().find((anime) => anime.id === Number(id))
  }

  const addToList = (anime) => {
    if (animeExists(anime.id)) return
    if (!animeList) {
      setAnimeList([anime])
      return setCachedAnime([anime])
    }
    let updatedAnimeList = [...animeList, anime]
    setCachedAnime(updatedAnimeList)
    setAnimeList(updatedAnimeList)
  }

  const removeFromList = (id) => {
    let updatedAnimeList = getCachedAnime().filter(
      (anime) => anime.id !== Number(id)
    )
    setAnimeList(updatedAnimeList)
    setCachedAnime(updatedAnimeList)
  }
  return (
    <Context.Provider
      value={{
        animeList,
        animeExists,
        getAnimeById,
        addToList,
        removeFromList,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
