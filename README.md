# ✨ Introduction

AI-powered modern stock market app built with Next.js, Shadcn, Better Auth, and Inngest! Track real-time prices, set personalized alerts, explore company insights, and manage watchlists. The admin dashboard allows managing stocks, publishing news, and monitoring user activity, while event-driven workflows power automated alerts, AI-driven daily digests, earnings notifications, and sentiment analysis—perfect for devs who want a dynamic, real-time financial platform.

---
## ⚙️  TECH STACK 

*  **[Better Auth](https://www.better-auth.com)** is a framework-agnostic authentication and authorization library for TypeScript. It provides built-in support for email/password login, social sign-on (Google, GitHub, Apple, and more), and multi-factor authentication, simplifying user authentication and account management.
___

## 🚀 Quick Start

Follow these steps to set up the project locally on your machine.

---

## 📦 Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- npm (Node Package Manager)

---

## 📦 Installation

Install the project dependencies using npm:

```bash
npm install
```
---
## 🔐 Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:


# NEXT
NEXT_PUBLIC_SITE_URL=

# APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

# DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

---
## ✨ Features

👉 Authentication
An ultra-secure SSR authentication with proper validations and authorization
👉 Connect Banks
Integrates with Plaid for multiple bank account linking
👉 Home Page
Shows a general overview of user accounts with total balance from all connected banks, recent transactions, and money spent across categories
👉 My Banks
Displays the complete list of all connected banks with respective balances and account details
👉 Transaction History
Includes pagination and filtering options for viewing transaction history across different banks
👉 Real-time Updates
Reflects changes across all relevant pages upon connecting new bank accounts
👉 Funds Transfer
Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID
👉 Responsiveness
Ensures the application adapts seamlessly to various screen sizes and devices

Replace the placeholder values with your actual respective account credentials.
You can obtain these credentials by signing up on Appwrite, Plaid, and Dwolla.

---

## ▶️ Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.








