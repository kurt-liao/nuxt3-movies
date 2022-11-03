import type { QueryItem } from '~/types'

interface QUERY_LIST_TYPE {
  [key: string]: QueryItem[]
}

export const QUERY_LIST: QUERY_LIST_TYPE = {
  movie: [{
    type: 'movie',
    title: 'Popular movies',
    category: 'popular',
  }, {
    type: 'movie',
    title: 'Top Rated movies',
    category: 'top_rated',
  }, {
    type: 'movie',
    title: 'Upcoming movies',
    category: 'upcoming',
  }],
  tv: [{
    type: 'tv',
    title: 'Popular TV Shows',
    category: 'popular',
  }, {
    type: 'tv',
    title: 'Top Rated TV Shows',
    category: 'top_rated',
  }, {
    type: 'tv',
    title: 'TV Shows Airing Today',
    category: 'airing_today',
  }],
}
