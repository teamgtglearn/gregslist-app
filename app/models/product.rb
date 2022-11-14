class Product < ApplicationRecord
    belongs_to :user
    validates :title, :description, :price, :image, :user_id, presence: true
end
