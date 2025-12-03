# 🚀 SmartStock Enterprise: Inventory, Expiry Management & Financial Analytics Suite

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**SmartStock Enterprise** is a comprehensive full-stack retail intelligence system designed to mitigate inventory shrinkage and provide real-time financial auditing.

Unlike traditional inventory apps that simply track quantity, SmartStock implements a **Dual-Pricing Financial Engine** (Cost Price vs. Selling Price) to calculate **Net Profit** and **Dead Loss** in real-time. It solves the critical real-world problem of accidental expired sales through a **Safety Interlock Protocol**, which physically blocks transactions involving unsafe goods.

---

## 🌟 Key Features

### 💰 1. True Profit Engine
* Automatically calculates **Net Profit** (Selling Price - Cost Price) for every sale.
* Quantifies **Financial Loss** when items are marked as waste.
* Displays real-time **Total Inventory Asset Value**.

### 🛡️ 2. Safety Interlock Protocol
* **Human Error Prevention:** The system detects expired items based on the current date.
* **Transaction Block:** Physically disables the "Sell" capability for expired goods and triggers a mandatory "Waste Protocol" modal.

### ⚡ 3. Reactive Intelligence
* **Live Search:** Client-side algorithms filter thousands of records in under 100ms without server reloads.
* **Visual Alerts:** Color-coded badges (Green/Yellow/Red) and pulsing animations for low stock (< 5 units).

### 📜 4. Immutable Audit Trail
* Maintains a permanent **Transaction Ledger** in MongoDB.
* Distinguishes between **Revenue** (Money In) and **Loss** (Money Out).
* **CSV Export:** One-click data serialization to download reports for offline accounting.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Glassmorphism UI), JavaScript, Chart.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Dual-Collection Architecture)
* **Templating:** EJS (Server-Side Rendering)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

## ⚙️ How to Run

1. **Download the code:**
   `git clone https://github.com/your-username/smart-grocery-system.git`

2. **Install folders:**
   `npm install`

3. **Start the server:**
   `node server.js`

4. **Open in browser:**
   Go to `http://localhost:3001`

---
