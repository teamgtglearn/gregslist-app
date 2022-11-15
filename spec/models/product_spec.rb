require "rails_helper"

RSpec.describe Product, type: :model do
  let(:user) { User.create email: "guanchan@doge.com", password: "password", password_confirmation: "password" }

  it "should validate the title is missing" do
    product = user.products.create(
      description: "This is the best product ever and ever",
      price: 69,
      image: "https://i.imgur.com/u5rhMKt.jpg"
    )
    product.validate
    expect(product.errors[:title]).to include "can't be blank"
  end

  it "should validate the description is missing" do
    product = user.products.create(
      title: "Bird is the word",
      price: 69,
      image: "https://i.imgur.com/u5rhMKt.jpg"
    )
    product.validate
    expect(product.errors[:description]).to include "can't be blank"
  end

  it "should validate the price is missing" do
    product = user.products.create(
      description: "This is the best product ever and ever",
      image: "https://i.imgur.com/u5rhMKt.jpg"
    )
    product.validate
    expect(product.errors[:price]).to include "can't be blank"
  end

  it "should validate the image is missing" do
    product = user.products.create(
      description: "This is the best product ever and ever",
      price: 69
    )
    product.validate
    expect(product.errors[:title]).to include "can't be blank"
  end
end
