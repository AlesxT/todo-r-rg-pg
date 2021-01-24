class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks, :dependent => :delete_all 

  validates :name, presence: true

end
