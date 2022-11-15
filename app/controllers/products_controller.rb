class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end

    def create
      product = Product.create(product_params)
      if product.valid?
        render json: product
      else
        render json: product.errors, status: 422
      end
    end
    
    def update
      product = Product.find(params[:id])
      product.update(product_params)
      render json: product
    end

    private

    def product_params
      params.required(:product).permit(:title, :description, :price, :image, :user_id)
    end
    
end
