import type { ListType } from '~/types'

export default defineEventHandler(async (event): Promise<ListType> => {
  const TMDB_API_URL = 'https://api.themoviedb.org/3'

  const { type, id } = getQuery(event)
  try {
    return await $fetch(`${type}/${id}/recommendations`, {
      baseURL: TMDB_API_URL,
      params: {
        api_key: process.env.TMDB_API_KEY,
        language: 'en-US',
        page: 1,
      },
    })
  }
  catch (error: any) {
    const status = error?.response?.status || 500
    event.res.statusCode = status
    return error.message?.replace(/\?api_key=.*/, '')
  }
})
