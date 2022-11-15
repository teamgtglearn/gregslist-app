class Product < ApplicationRecord
  belongs_to :user
  validates :title, :description, :price, :image, presence: true
end
