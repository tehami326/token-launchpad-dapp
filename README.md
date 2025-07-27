# Token Launchpad DApp

A decentralized token launchpad inspired by bonding curve models, allowing users to **create and trade tokens instantly** with dynamic pricing.  

## 🚀 Features
- **Token Creation:** Deploy new ERC‑20 tokens with a single click.
- **Bonding Curve Pricing:** Token price automatically increases based on demand.
- **Buy & Sell:** Users can purchase tokens directly with ETH.
- **Creator Earnings:** Raised ETH can be withdrawn by project creators after sale completion.
- **Secure & Audited:** Built with Solidity and tested using Hardhat.

## 🛠 Tech Stack
- **Smart Contracts:** Solidity, OpenZeppelin
- **Testing & Deployment:** Hardhat, Chai
- **Frontend:** React.js, Ethers.js
- **Blockchain:** Ethereum (Sepolia & local Hardhat network)

## 📂 Project Structure
- `contracts/` — Solidity smart contracts  
- `scripts/` — Deployment scripts  
- `test/` — Hardhat test cases  
- `frontend/` — React frontend  

## ⚙️ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/tehami326/token-launchpad-dapp.git
   cd token-launchpad-dapp

Install dependencies:
npm install

Compile contracts:
npx hardhat compile


Run tests:
npx hardhat test


Start the frontend:
cd frontend
npm start

Deploy to a network:
npx hardhat run scripts/deploy.js --network sepolia

🧪 Testing
Includes unit & integration tests using Hardhat + Chai.

📬 Contact
Created by Muhammad Tehami
Feel free to connect for collaborations or discussions!

### **Next Steps**
1. Create the file in your project root:  
   `README.md`
2. Paste the above content.
3. Commit & push:  
   ```bash
   git add README.md
   git commit -m "Added README"
   git push
