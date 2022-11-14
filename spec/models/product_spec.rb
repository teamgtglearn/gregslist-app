require 'rails_helper'

RSpec.describe Product, type: :model do


  it "should get back items from the data base" do
    Product.create(
      title:"The Best Product 1", description:"This is the
    best product ever and ever", price: 69, image:"https://i.imgur.com/u5rhMKt.jpg"
    )

    Product.create(
      title: "the Best ever 2",
      description: "the best thing ever",
      price: 469,
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )

    product1 = Product.first
    expect(product1.price).to eq 69
    product2 = Product.second
    expect(product2.price).to eq 469

  end
end
