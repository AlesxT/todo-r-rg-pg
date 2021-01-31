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
          #present task, with: Client::Entities::Task
        end
  
        #   
        route_param :task_id do
          desc 'Update a task.'
          params do
          #requires :id, type: Integer
            optional :name, type: String, desc: 'Task name'
            optional :status , type: Boolean, desc: 'Task status'
          end
          put do      
            task = current_user.tasks.find(params[:task_id])
            #binding.pry
            task.update(params.slice(:name, :status))
            present task.project, with: Client::Entities::Project
          end
        
        #
          desc 'Delete a task.'
          params do
            #requires :id, type: Integer, desc: 'Task ID.'
          end
          delete do
            task = current_user.tasks.find(params[:task_id]).destroy
            present task.project, with: Client::Entities::Project
            #present task, with: Client::Entities::Task
          end
        end

      end
  end
end