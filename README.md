# Preview
![?](./public/assets/images/dashboard-preview.png)

------
# ✨ Introduction

AI-powered modern stock market app built with Next.js, Shadcn, Better Auth, and Inngest! Track real-time prices, set personalized alerts, explore company insights, and manage watchlists. The admin dashboard allows managing stocks, publishing news, and monitoring user activity, while event-driven workflows power automated alerts, AI-driven daily digests, earnings notifications, and sentiment analysis—perfect for devs who want a dynamic, real-time financial platform.

---
## ⚙️  TECH STACK 

* Next.js + React
* Typescript
* TailwindCSS
* MongoDB
*  **[Better Auth](https://www.better-auth.com)**  a framework-agnostic authentication and authorization library for TypeScript. It provides built-in support for email/password login, social sign-on (Google, GitHub, Apple, and more), and multi-factor authentication, simplifying user authentication and account management.
*  **[CodeRabbit](https://www.coderabbit.ai/?utm_source=youtube&utm_medium=influencer&utm_campaign=awareness&dub_id=rhDE6XZuVXKLPnyF)** an AI-powered code review assistant that integrates with GitHub. It helps developers catch bugs, enforce best practices, and maintain consistent code quality across pull requests, reducing manual review effort and speeding up the development workflow.
*  **[FinHub](https://finnhub.io)**  a real-time financial data API that provides stock, forex, and cryptocurrency market data. It offers developers access to fundamental data, economic indicators, and news, making it useful for building trading apps, dashboards, and financial analysis tools.
*  **[Ingest](https://www.inngest.com/?utm_source=youtube&utm_medium=video&utm_campaign=jsm-1&utm_term=next.js)** a platform for event-driven workflows and background jobs. It allows developers to build reliable, scalable automated processes such as real-time alerts, notifications, and AI-powered workflows.
*  **[NodeMailer](https://nodemailer.com)** a Node.js library for sending emails easily. It supports various transport methods such as SMTP, OAuth2, and third-party services, making it a reliable tool for handling transactional emails, notifications, and contact forms in applications.
*  **[ShadcnUI](https://ui.shadcn.com/docs)**  an open-source library of fully customizable, accessible React components. It helps teams rapidly build consistent, visually appealing UIs while allowing full control over design and layout.
___
## 🔋 Features

* **Stock Dashboard**: Track real-time stock prices with interactive line and candlestick charts, including historical data, and filter stocks by industry, performance, or market cap.
* **Powerful Search**: Quickly find the best stocks with an intelligent search system that helps you navigate through Signalist.
* **Watchlist & Alerts**: Create a personalized watchlist, set alert thresholds for price changes or volume spikes, and receive instant email notifications to stay on top of the market.
* **Company Insights**: Explore detailed financial data such as PE ratio, EPS, revenue, recent news, filings, analyst ratings, and sentiment scores for informed decision-making.
*  **Real-Time Workflows** : Powered by Inngest, automate event-driven processes like price updates, alert scheduling, automated reporting, and AI-driven insights.
*   **AI-Powered Alerts & Summaries** : Generate personalized market summaries, daily digests, and earnings report notifications, helping users track performance and make data-driven decisions.
*  **Customizable Notifications** : Fine-tune alerts and notifications based on user watchlists and preferences for a highly personalized experience.
*  **Analytics & Insights** : Gain insights into user behavior, stock trends, and engagement metrics, enabling smarter business and trading decisions.

*  👉  This includes code architecture and reusability.
---
## 🚀 Quick Start

1) **Prerequisites**

Make sure you have the following installed on your machine:

* **[Git](https://git-scm.com)**
* **[Node.js](https://nodejs.org/en)**
* **[npm](https://www.npmjs.com)**

2) **👉 run this command inside the folder: npm install**
   
3) **Set Up Environment Variables**
   
replace the placeholder values with your real credentials. You can get these by signing up at: MongoDB, Gemini, Inngest, Finnhub.

Create a new file named .env in the root of your project and add the following content:

NODE_ENV = 'development'

NEXT_PUBLIC_BASE_URL = http://localhost:3000


NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY =
FINNHUB_BASE_URL = https://finnhub.io/api/v1


MONGODB_URI =


BETTER_AUTH_SECRET =
BETTER_AUTH_URL = http://localhost:3000


GEMINI_API_KEY =

NODEMAILER_EMAIL =
NODEMAILER_PASSWORD =

4) **Run the project**

npm run dev
npx inngest-cli@latest dev

Open http://localhost:3000 in your browser to view the project.










