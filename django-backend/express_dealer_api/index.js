const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Dummy data
const dealers = [
  { id: "1", name: "Midwest Motors", state: "Kansas", reviews: ["Great car!", "Good service"], details: "Family-owned dealership" },
  { id: "2", name: "Sunshine Auto", state: "California", reviews: ["Affordable", "Friendly"], details: "California’s top rated dealer" }
];

// Routes
app.get('/dealers', (req, res) => res.json(dealers));
app.get('/dealers/state/:state', (req, res) => res.json(dealers.filter(d => d.state === req.params.state)));
app.get('/dealers/:id/reviews', (req, res) => {
  const dealer = dealers.find(d => d.id === req.params.id);
  res.json({ reviews: dealer?.reviews || [] });
});
app.get('/dealers/details/:id', (req, res) => {
  const dealer = dealers.find(d => d.id === req.params.id);
  dealer ? res.json(dealer) : res.status(404).json({ error: 'Not found' });
});

app.listen(3000, () => console.log('🚗 Express API running on http://localhost:3000'));
