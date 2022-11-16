# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.where(email: "guandoge@chan.com").first_or_create(password: "123password", password_confirmation: "123password")

product_seeds = {

    "title": "Back2Future Truck",
    "description": "Marty McFly's 1985 Toyota Tacoma!! Tastefully modified and a super capable to go Back to the Future. Needs nothing but a new owner!",
    "price": 709654,
    "image": "https://silodrome.com/wp-content/uploads/2021/10/Back-To-The-Future-Toyota-Truck-e1633601386486.jpg"

},
{

    "title": "YT-1300 Light Freighter",
    "description": "Image is an older picture , currently in-operable. It needs a new Quadex power core to get it up and running. Not a project, low-ballers welcome.",
    "price": 2394872,
    "image": "https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2018/04/16/5ad4e8c370e68e282f66ed87_falcon.png"

},
{

    "title": "PikaChu",
    "description": "My Pikachu had babies and this is the last one left. This cutie is the runt of the litter, so he's a little smaller than his siblings, but he has the strongest personality. Will include berries with adoption. Ask about my other Pokemons",
    "price": 62983,
    "image": "https://cdn.vox-cdn.com/thumbor/HuJ4807J3vcVYQAPFBh_nHjIEP4=/0x0:1255x591/1200x800/filters:focal(493x281:693x481)/cdn.vox-cdn.com/uploads/chorus_image/image/62281193/Screen_Shot_2018_11_12_at_12.24.40_PM.0.png"

},
{

    "title": "Gundam",
    "description": "Slightly used but otherwise brand new Gundam for sale! The full capabilities of can be disclosed to the buyer upon completion of transaction, but you can view the basics here: https://gundam.fandom.com/wiki/Gundam_Wiki:Technology Free shipping within 2 lightyears of earth.(Price upon request)",
    "price": 999999,
    "image": "https://img.kyodonews.net/english/public/images/posts/ae6aaa18fca7838e0a6264898141e49c/photo_l.jpg"

},
{

    "title": "Anti-Virus",
    "description": "The anti-virus is a medicine created by the Umbrella Corporation to treat those infected with T-virus. We have three different kinds, please indicate which kind you need. Price is per vial.",
    "price": 5000,
    "image": "https://i.etsystatic.com/10713985/r/il/adf168/860357425/il_fullxfull.860357425_hbja.jpg"

},
{

    "title": "Louisiana",
    "description": "Land for sale.  Pretty much half of everything West of the Mississippi River.  Need to sell ASAP!  Funding a war.",
    "price": 20000000,
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Louisiana_Purchase.jpg"
},
{

    "title": "Statue of some dude",
    "description": "Statue of some dude by up and coming artist.",
    "price": 400,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/David_de_Miguel_Angel_-_Galeria_de_la_Academia_de_Florencia_-_04.jpg/220px-David_de_Miguel_Angel_-_Galeria_de_la_Academia_de_Florencia_-_04.jpg"

},
{

    "title": "NFT",
    "description": "If you know, you know... ",
    "price": 7239875,
    "image": "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_61/07613083-d6c6-4a04-8aa0-857a61ed4791/objects_of_desire-2000x2000.jpg?"

},
{

    "title": "Crystal Glass Slipper(1)(Left)",
    "description": "This Crystal Glass slipper was magically created. Only worn once, but I lost the Right slipper.  ** ONLY ONE SLIPPER **",
    "price": 2000,
    "image": "https://i.pinimg.com/736x/66/94/40/66944054868aeb075bd1e4dcd3a17b71--cinderella-slipper-cinderella-movie.jpg"

},
{

    "title": "Giant Pinata",
    "description": "Made to order, this giant pinata can store over 3 tonnes of candy. Great for celebrations. We can deliver.",
    "price": 4590,
    "image": "https://i.insider.com/54e62f0669bedd40063cbd83?width=1025&format=jpeg"

},
{

    "title": "Mjolner Mark V suit",
    "description": "The Mjolnir Powered Assault Armor is a technologically advanced combat exoskeleton system designed to vastly improve strength, speed, agility, reflexes, turning you into a super soldier. This one is slightly used.",
    "price": 150000,
    "image": "https://cdn.vox-cdn.com/uploads/chorus_asset/file/21699678/halo_infinite_master_chief_3840.jpg"

},
{

    "title": "Magic Wands",
    "description": "I can customize your own magic wand.",
    "price": 100,
    "image": "https://i.etsystatic.com/19692236/r/il/62e9a5/2166791634/il_fullxfull.2166791634_3qma.jpg"

},
{

    "title": "Pet Walrus",
    "description": "Baby Walrus for adoption.",
    "price": 400,
    "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2012/October/121010/1C4233740-tdy-121010-walrus-photos-03.jpg"

},
{

    "title": "TukTuk",
    "description": "TukTuk business for sale. Great on Gas.",
    "price": 3000,
    "image": "https://i.pinimg.com/564x/0b/96/7c/0b967c63bb847b4a7d2c89fa396488fb--the-philippines-tricycle.jpg"

},
{

    "title": "Moulin Rouge",
    "description": "Iconic Business for sale.",
    "price": 10000000,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moulin_Rouge%2C_17_April_2011.jpg/2560px-Moulin_Rouge%2C_17_April_2011.jpg"

},
{

    "title": "Kite Experiment",
    "description": "Schematics for a kite experiment to capture electricity onto a key and into a bottle",
    "price": 5,
    "image": "http://www.benjamin-franklin-history.org/wp-content/uploads/2016/12/Franklins-kite.jpg"

},
{

    "title": "T-800",
    "description": "Cyberdyne Systems Series 800 Terminator. We have a lot we need to get rid of.",
    "price": 10000000,
    "image": "https://de9o6n2ujz7l.cloudfront.net/cache/54/64/5464ba43ca29e61ee3c3ef3d8b056cc9.jpg"

}

product_seeds.each do |product|
    user.products.create(product)
    p "creating: #{product}"
  end