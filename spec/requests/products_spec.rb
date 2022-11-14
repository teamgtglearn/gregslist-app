require 'rails_helper'

RSpec.describe "Products", type: :request do
  describe "GET /index" do

    it "gets all the products" do
      get "/products"
      expect(response).to have_http_status(200)

    end
  end
end
