class QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]

  # GET /quizzes
  def index
    @quizzes = Quiz.all

    render json: @quizzes
  end

  # GET /quizzes/1
  def show
    render json: @quiz, include: { questions: {include: :answers} }
  end

  # GET user quizzes
  def get_my_quizzes
    render json: @current_user.quizzes
  end

  # POST /quizzes
  def create
    @quiz = Quiz.new(quiz_params)
    @quiz.user = @current_user

    if @quiz.save
      render json: @quiz, include: { questions: {include: :answers} }, status: :created
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /quizzes/1
  def update
    if @quiz.update(quiz_params)
      render json: @quiz, include: { questions: {include: :answers} }
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # DELETE /quizzes/1
  def destroy
    @quiz.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def quiz_params
      params.require(:quiz).permit(:name, :difficulty, :user_id)
    end
end
