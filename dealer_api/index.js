
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = 'mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/dealerdb?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const dealerSchema = new mongoose.Schema({
    name: String,
    state: String,
    reviews: [String],
    details: String
});

const Dealer = mongoose.model('Dealer', dealerSchema);

// Get all dealers
app.get('/dealers', async (req, res) => {
    const dealers = await Dealer.find();
    res.json(dealers);
});

// Get dealers by state
app.get('/dealers/state/:state', async (req, res) => {
    const dealers = await Dealer.find({ state: req.params.state });
    res.json(dealers);
});

// Get dealer details by ID
app.get('/dealer/details/:id', async (req, res) => {
    const dealer = await Dealer.findById(req.params.id);
    if (dealer) res.json(dealer);
    else res.status(404).json({ error: 'Dealer not found' });
});

// Get dealer reviews by ID
app.get('/dealer/:id/reviews', async (req, res) => {
    const dealer = await Dealer.findById(req.params.id);
    if (dealer) res.json({ reviews: dealer.reviews });
    else res.status(404).json({ error: 'Dealer not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
