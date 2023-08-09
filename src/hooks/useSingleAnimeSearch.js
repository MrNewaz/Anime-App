import axios from 'axios'
import { useEffect, useState } from 'react'

const query = `
query media($id:Int, $type:MediaType) {
	Media (id: $id, type: $type) {
		id
		type
		format
		genres
		siteUrl
		tags {
			name
			description
			category
			rank
			isMediaSpoiler
		}
		trailer {
			id
		}
		studios(isMain: true) {
			nodes {
				name
				siteUrl
			}
		}
		staff(sort: [RELEVANCE, ROLE, FAVOURITES]) {
			edges{
				node {
					siteUrl
					name {
						native
						userPreferred
					}
				}
				role
			}
		}
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
		popularity
		meanScore
		rankings {
			rank
			type
			allTime
			year
			season
		}
		title {
			romaji
			english
			native
			userPreferred
		}
		characterPreview:characters(perPage:6, sort:[ROLE,RELEVANCE,ID]) {
			edges {
				id 
				role 
				name 
				voiceActorRoles(language:JAPANESE, sort:[RELEVANCE,ID]) {
					roleNotes 
					dubGroup 
					voiceActor {
						id 
						name {
							userPreferred
						}
						language:languageV2 
						image {
							large
						}
					}
				}
				node {
					id 
					name {
						userPreferred
					}
					image {
						large
					}
				}
			}
		}
		relations {
			edges {
				id 
				relationType(version:2)
				node {
					id 
					season
					description
					popularity
					meanScore
					source(version: 3)
					format 
					genres
					type 
					status(version:2)
					bannerImage 
					title {
						english
						userPreferred
					}
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
					rankings {
						rank
						type
						allTime
						year
						season
					}
					startDate {
						year
					}
					coverImage {
						extraLarge
						large
					}
				}
			}
		}
		bannerImage
		coverImage {
			extraLarge
		}
		description
		season
		startDate {
			year
		}
		endDate {
			year
		}
	}
}`

export default function useSingleAnimeFetch(id) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [anime, setAnime] = useState({})

  useEffect(() => {
    setAnime({})
    setLoading(true)
    setError(false)

    axios
      .post('https://graphql.anilist.co', { query: query, variables: { id } })
      .then((response) => {
        setAnime(response.data.data.Media)
        setLoading(false)
        console.log(response.data.data.Media)
      })
      .catch((e) => {
        setError(true)
      })
  }, [id])

  return { loading, error, anime }
}
