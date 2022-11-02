export default defineEventHandler(async (event) => {
  const TMDB_API_URL = 'https://api.themoviedb.org/3'

  const { category, type, ...rest } = getQuery(event)
  try {
    return await $fetch(`${type}/${category}`, {
      baseURL: TMDB_API_URL,
      params: {
        api_key: process.env.TMDB_API_KEY,
        language: 'en-US',
        ...rest,
      },
    })
  }
  catch (error: any) {
    const status = error?.response?.status || 500
    event.res.statusCode = status
    return error.message?.replace(/\?api_key=.*/, '')
  }
})
