module Client
    class Task < Grape::API
  
      helpers do
        def current_user
          warden = env["warden"]
          @current_user ||= warden.authenticate
        end
      end
  
      resource :tasks do
        desc 'Create a new task'
        params do
          requires :name, type: String
          requires :project_id, type: Integer
        end
        post do
          task = current_user.tasks.create!(name: params[:name], project_id: params[:project_id])
          #present task, with: Client::Entities::Task
          #binding.pry
          present task.project, with: Client::Entities::Project
        end
  
        #   
        desc 'Update a task.'
        params do
          requires :name, type: String, desc: 'Your status.'
          requires :id, type: Integer
        end
        put  do
          #current_user.tasks.find(params[:id]).update({
          #  name: params[:name]
          #})
          task = current_user.tasks.find(params[:id])
          task.update(name: params[:name])
          #present task, with: Client::Entities::Task
          present task.project, with: Client::Entities::Project
        end
  
        #
        desc 'Delete a task.'
        params do
          requires :id, type: String, desc: 'Task ID.'
        end
        delete do
          task = current_user.tasks.find(params[:id]).destroy
          present task.project, with: Client::Entities::Project
        end
  
      end
      end
  end