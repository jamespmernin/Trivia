Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/get_user_quizzes', to: 'quizzes#get_my_quizzes'
  resources :questions do
    resources :answers
  end
  resources :quizzes do
    resources :questions
  end
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end