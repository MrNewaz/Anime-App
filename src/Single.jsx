import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

const Single = () => {
  const [anime, setAnime] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios
      .post('https://graphql.anilist.co', { query: query, variables: { id } })
      .then((response) => {
        setAnime(response.data.data.Media)
        console.log(response.data.data.Media)
      })
  }, [])
  return (
    <Box>
      <Typography variant="h1">{anime.title?.userPreferred}</Typography>
      <Typography variant="h2">{anime.title?.english}</Typography>
      <Typography variant="h3">{anime.title?.native}</Typography>
      <Typography variant="h4">{anime.title?.romaji}</Typography>
      <Typography variant="h5">{anime.description}</Typography>
      <Typography variant="h6">{anime.format}</Typography>
      <Typography variant="subtitle1">{anime.season}</Typography>
      <Typography variant="subtitle2">{anime.startDate?.year}</Typography>
      <Typography variant="body1">{anime.endDate?.year}</Typography>
      <Typography variant="body2">{anime.popularity}</Typography>
      <Typography variant="caption">{anime.meanScore}</Typography>
      <img src={anime.coverImage?.extraLarge} alt={anime.title?.english} />

      <Typography variant="button">{anime.coverImage?.extraLarge}</Typography>
      <Typography variant="srOnly">{anime.coverImage?.large}</Typography>
    </Box>
  )
}

export default Single
