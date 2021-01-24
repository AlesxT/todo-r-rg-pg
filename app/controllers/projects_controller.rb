class ProjectsController < ApplicationController
  def index
    #projects = Project.order("created_at DESC")
    #render json: projects
  end

  def new
    
  end

  def create
    #@project = curent_user.projects.new(tparams)
    #project = Project.create(params)
    #render json: project
  end

  def update
    #project = Project.find(params[:id])
    #project.update_attributes(params)
    #render json: project
  end

  def destroy
    #project = Project.find(params[:id])
    #project.destroy
    
  end

end
