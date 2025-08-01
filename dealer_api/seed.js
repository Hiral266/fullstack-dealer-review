// seed.js
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/dealerdb?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const dealerSchema = new mongoose.Schema({
  name: String,
  state: String,
  reviews: [String],
  details: String
});

const Dealer = mongoose.model('Dealer', dealerSchema);

const sampleDealers = [
  {
    name: "Midwest Motors",
    state: "Kansas",
    reviews: ["Great service!", "Affordable pricing."],
    details: "Family-owned since 1980. Great selection of trucks and SUVs."
  },
  {
    name: "Sunshine Auto",
    state: "California",
    reviews: ["Fast processing.", "Friendly staff."],
    details: "Award-winning dealership in Southern California."
  },
  {
    name: "Prairie Cars",
    state: "Kansas",
    reviews: ["Not many options.", "Good for budget cars."],
    details: "Deals in low-cost used cars, mostly from auctions."
  }
];

Dealer.insertMany(sampleDealers)
  .then(() => {
    console.log('Sample dealers inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample dealers:', err);
  });
