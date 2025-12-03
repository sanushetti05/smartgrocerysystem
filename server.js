const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to Database
mongoose.connect("mongodb://127.0.0.1:27017/groceryDB")
    .then(() => console.log("✅ Enterprise Database Connected"))
    .catch(err => console.log("❌ DB Error:", err));

// --- SCHEMA ---
const itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    quantity: Number,
    costPrice: Number,    
    sellingPrice: Number, 
    type: String,
    expiryDate: Date
});
const Item = mongoose.model("Item", itemSchema);

const transactionSchema = new mongoose.Schema({
    itemName: String,
    category: String,
    quantity: Number,
    revenue: Number,
    netProfit: Number,
    type: String,
    date: { type: Date, default: Date.now }
});
const Transaction = mongoose.model("Transaction", transactionSchema);

// ROUTES
app.get("/", async (req, res) => {
    const items = await Item.find({}).sort({ expiryDate: 1 });
    const history = await Transaction.find({}).sort({ date: -1 });
    res.render("index", { items: items, history: history });
});

app.post("/add", async (req, res) => {
    await new Item({
        name: req.body.name,
        category: req.body.category,
        quantity: req.body.quantity,
        costPrice: Number(req.body.costPrice),
        sellingPrice: Number(req.body.sellingPrice),
        type: req.body.type,
        expiryDate: req.body.expiryDate
    }).save();
    res.redirect("/");
});

app.post("/process", async (req, res) => {
    const itemId = req.body.itemId;
    const action = req.body.action; 
    
    const item = await Item.findById(itemId);
    
    if (item) {
        const cost = item.costPrice || 0;
        const sell = item.sellingPrice || 0;
        const qty = item.quantity || 0;

        let revenue = 0;
        let profit = 0;

        if (action === "sold") {
            revenue = sell * qty;
            profit = (sell - cost) * qty;
        } else {
            revenue = 0;
            profit = -1 * (cost * qty);
        }

        await new Transaction({
            itemName: item.name,
            category: item.category,
            quantity: qty,
            revenue: revenue,
            netProfit: profit,
            type: action === "sold" ? "SALE" : "WASTE"
        }).save();

        await Item.findByIdAndDelete(itemId);
    }
    res.redirect("/");
});

// --- NEW FEATURE: CLEAR HISTORY ---
app.post("/clear-history", async (req, res) => {
    await Transaction.deleteMany({}); // Deletes all logs
    res.redirect("/");
});

app.get("/reset", async (req, res) => {
    await Item.deleteMany({});
    await Transaction.deleteMany({});
    res.send("Database Wiped. <a href='/'>Go Home</a>");
});

app.listen(3001, () => console.log("🚀 Server running on port 3001"));