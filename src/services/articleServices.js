import axiosWithAuth from '../utils/axiosWithAuth'

const articleService = {
  getAll: async () => {
    try {
      const { data } = await axiosWithAuth().get('/articles')

      return data
    } catch ({ message }) {
      console.log(message)
    }
  },

  getById: async (id) => {
    try {
      const { data } = await axiosWithAuth().get(`/articles/${id}`)

      return data
    } catch ({ message }) {
      console.log(message)
    }
  },

  update: async (article) => {
    const { id } = article

    try {
      await axiosWithAuth().put(`/articles/${id}`, article)
    } catch ({ message }) {
      console.log(message)
    }
  },

  delete: async (id) => {
    try {
      await axiosWithAuth().delete(`/articles/${id}`)
    } catch ({ message }) {
      console.log(message)
    }
  },
}

export const { getAll } = articleService.getAll

export default articleService
