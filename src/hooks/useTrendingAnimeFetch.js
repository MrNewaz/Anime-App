import axios from 'axios'
import { useEffect, useState } from 'react'

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

export default function useTrendingAnimeFetch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [animes, setAnimes] = useState([])
  const [pageInfo, setPageInfo] = useState({})

  useEffect(() => {
    setAnimes([])
    setLoading(true)
    setError(false)

    axios
      .post('https://graphql.anilist.co', {
        query: query,
        variables: {
          page: pageNumber,
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
        },
      })
      .then((response) => {
        setAnimes(response.data.data.Page.media)
        setLoading(false)
        setPageInfo(response.data.data.Page.pageInfo)
      })
      .catch((e) => {
        setError(true)
      })
  }, [pageNumber])

  return { loading, error, animes, pageInfo }
}
