const setCachedAnime = (animeList) => {
  localStorage.setItem('animes', JSON.stringify(animeList))
}

const getCachedAnime = () => {
  const animeList = JSON.parse(localStorage.getItem('animes'))
  if (animeList !== []) {
    return animeList
  } else {
    return []
  }
}

export { getCachedAnime, setCachedAnime }
