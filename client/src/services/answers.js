import api from './apiConfig'

export const getAnswers = async (question_id) => {
  try {
    const response = await api.get(`/questions/${question_id}/answers`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getAnswer = async (question_id, answer_id) => {
  try {
    const response = await api.get(`/questions/${question_id}/answers/${answer_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createAnswer = async (question_id, answer) => {
  try {
    const response = await api.post(`/questions/${question_id}/answers`, { answer: answer })
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateAnswer = async (question_id, answer, answer_id) => {
  try {
    const response = await api.put(`/questions/${question_id}/answers/${answer_id}`, { answer: answer })
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteQuestion = async (question_id, answer_id) => {
  try {
    const response = await api.delete(`/questions/${question_id}/answers/${answer_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}