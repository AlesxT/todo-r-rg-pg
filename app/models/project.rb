class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks, :dependent => :delete_all 
  default_scope { order(:id) }
  validates :name, presence: true

end
