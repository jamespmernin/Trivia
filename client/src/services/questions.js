import api from './apiConfig'

export const getQuestions = async () => {
  try {
    const response = await api.get('/questions')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getQuestion = async id => {
  try {
    const response = await api.get(`/questions/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createQuestion = async question => {
  try {
    const response = await api.post('/questions', question)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateQuestion = async (id, question) => {
  try {
    const response = await api.put(`/questions/${id}`, question)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteQuestion = async id => {
  try {
    const response = await api.delete(`/questions/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}