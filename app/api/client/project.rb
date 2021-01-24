module Client
  class Project < Grape::API

    helpers do
      def current_user
        warden = env["warden"]
        @current_user ||= warden.authenticate
      end
    end

    resource :projects do
      desc 'Return list of projects'
      get do
        #Project = ::Project.where(user_id: current_user.id)
        projects = current_user.projects
        present projects, with: Client::Entities::Project
      end
      #
      desc 'Create a new project'
      params do
        requires :name, type: String
      end
      post do
        #::Project.create!({
        #  user: current_user,
        #  name: params[:name]
        #})
        project = current_user.projects.create!(name: params[:name])
        present project, with: Client::Entities::Project
      end

      #   
      desc 'Update a project.'
      params do
        requires :name, type: String, desc: 'Your project.'
        requires :id, type: Integer
      end
      put do
        project = current_user.projects.find(params[:id])
        #binding.pry
        #project = current_user.projects.find(params[:id]).update({
        project.update(name: params[:name])
        #})
        present project, with: Client::Entities::Project
      end

      #
      desc 'Delete a project.'
      params do
        requires :id, type: Integer, desc: 'Project ID.'
      end
      delete do
        project = current_user.projects.find(params[:id]).destroy
        present project, with: Client::Entities::Project
      end

    end
	end
end