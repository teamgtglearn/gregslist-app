require 'rails_helper'

RSpec.describe "Products", type: :request do
  let(:user) { User.create email: "guandoge@chan.com", password: "password", password_confirmation: "password" }


  describe "GET /index" do

    it "gets all the products" do
      get "/products"
      expect(response).to have_http_status(200)

    end
  end

  describe "Post /create" do
    it "Creates a new product" do

      product_params = {
        product: {
          title: "Best Product Ever",
          description: "This is the best product ever, please buy now!",
          price: 420,
          image: "https://static.pokebattler.com/pokemon/moltres.svg",
          user_id: user.id
      }
    }

      post "/products", params: product_params
      product = Product.first
      expect(response).to have_http_status(200)
      expect(product["title"]).to eq "Best Product Ever"
      expect(product["description"]).to eq "This is the best product ever, please buy now!"
      expect(product["price"]).to eq 420

    end
  end
end
