import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const query = `
query ($page: Int, $search: String, $sort:[MediaSort], $isAdult: Boolean, $type: MediaType, $genre_in: [String], $genre_not_in: [String], $tag_in: [String], $season: MediaSeason, $seasonYear: Int, $format_in: [MediaFormat], $status: MediaStatus) {
	Page (page: $page) {
		pageInfo {
			total
			currentPage
			lastPage
			hasNextPage
			perPage
		}
		media (search: $search, sort: $sort, isAdult: $isAdult, type: $type, genre_in: $genre_in, genre_not_in: $genre_not_in, tag_in: $tag_in, season: $season, seasonYear: $seasonYear, format_in: $format_in, status: $status, onList: true) {
			id
			type
			bannerImage
			genres
			format
			title {
				english
				userPreferred
			}
			coverImage {
				extraLarge
				large
				color
			}
			description
			stats {
				scoreDistribution {
					score
					amount
				}
				statusDistribution {
					status
					amount
				}
			}
			season
			startDate {
				year
			}
			popularity
			meanScore
			rankings {
				rank
				type
				allTime
				year
				season
			}
		}
	}
}`

function Home() {
  const [anime, setAnime] = useState([])
  const variables = {
    page: 1,
    sort: 'TRENDING_DESC',
    type: 'ANIME',
    genre_in: undefined,
    genre_not_in: undefined,
    'tag_in:': undefined,
    format_in: undefined,
    seasonYear: undefined,
    season: undefined,
    isAdult: false,
    status: undefined,
    search: undefined,
  }

  useEffect(() => {
    axios
      .post('https://graphql.anilist.co', { query: query, variables })
      .then((response) => {
        setAnime(response.data.data.Page.media)
        console.log(response.data.data.Page.media)
      })
  }, [])

  if (!anime) return <div>Loading...</div>
  return (
    <div className="App">
      {anime.map((anime) => (
        <div key={anime.id}>
          <Link to={`/details/${anime.id}`}>
            <img src={anime.coverImage.extraLarge} alt={anime.title.english} />
          </Link>
          <h1>{anime.title.english}</h1>
          <p>{anime.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
