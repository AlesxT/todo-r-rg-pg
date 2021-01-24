module Client
	module Entities
		class Task < Grape::Entity
			
			expose :id
			expose :name
			expose :status
			#expose :project_id
		end
	end
end