module Client
	module Entities
		class Project < Grape::Entity
			
			expose :id
			expose :name
			expose :tasks, using: Client::Entities::Task 
			
		end
	end
end