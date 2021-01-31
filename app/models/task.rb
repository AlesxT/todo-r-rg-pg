class Task < ApplicationRecord
  belongs_to :project
  belongs_to :user
  default_scope { order(:id) }
  validates :name, presence: true
end
