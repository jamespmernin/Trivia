import api from './apiConfig'

export const getQuizzes = async () => {
  try {
    const response = await api.get('/quizzes')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getQuiz = async id => {
  try {
    const response = await api.get(`/quizzes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createQuiz = async quiz => {
  try {
    const response = await api.post('/quizzes', quiz)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateQuiz = async (id, quiz) => {
  try {
    const response = await api.put(`/quizzes/${id}`, quiz)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteQuiz = async id => {
  try {
    const response = await api.delete(`/quizzes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}