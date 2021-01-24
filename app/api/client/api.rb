module Client
  class API < Grape::API
    format :json

    mount Client::Project
    mount Client::Task

	end
end