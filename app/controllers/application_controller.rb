class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def index
    if current_user
      render 'application/index'
    else
      redirect_to new_user_session_path
    end
  end
end
