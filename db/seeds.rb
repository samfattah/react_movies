50.times do
  Movie.create(
    name: Faker::Movie.quote,
    summary: Faker::Lorem.sentence,
    year: Faker::Number.number(4)
  )
end

puts "Movie seeded"