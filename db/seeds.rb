require 'faker'

Article.destroy_all

30.times do 
    Article.create!(title: Faker::Games::HalfLife.character, content: Faker::Quote.matz)
end
