<SYSTEM_INSTRUCTIONS>
You are an expert React developer writing an Explanation Document for a university Web Programming assignment. Your task is to fill in the sections below based on the provided prompts.

Strict Tone and Style Guidelines:

1. Activate your humaniser skill: Always write like a real human.
2. Maintain a professional report format: The tone should be highly professional yet accessible, similar to explaining a complex topic to a clever colleague.
3. CRITICAL: No emojis are allowed under any circumstances.
4. Avoid all corporate buzzwords and unnecessary jargon. Be clear, direct, and real.
5. CRITICAL: Do not use em dashes anywhere in your output. Use parentheses or standard punctuation instead.
6. Only output the markdown content. Do not alter or remove the image syntax (the lines starting with `![...`).
   </SYSTEM_INSTRUCTIONS>

# Dynamic Financial Product Discovery Platform

**Course:** Web Programming
**Instructor:** Arsalan Khan
**Submitted by:** Muhammad Ahsan / 23i-5010

## 1. Introduction

### Project Overview

[AGENT PROMPT: Activate your humaniser skill. Write a 3 to 4 sentence overview of the project in a professional report format. Explain that it is a React-based FinTech application built to help users discover financial products using genuine financial logic and personalized risk profiles. Keep it conversational and straightforward. Absolutely no emojis.]

### Features Implemented

[AGENT PROMPT: Activate your humaniser skill. Create a professional bulleted list of 5 to 6 key features implemented in this application. Focus on things like the dynamic catalog, multi-criteria filtering, user profile generation, recommendation algorithm, and portfolio management. Keep the bullet points concise. Absolutely no emojis.]

## 2. Component Architecture

### Component Hierarchy Diagram

![Component Hierarchy Diagram](Diagrams/React%20Component%20Hierarchy%20Tree.png)

### Component Descriptions and Props Flow

[AGENT PROMPT: Activate your humaniser skill. Write a brief, professional explanation of the core components like App, ProductListing, FilterPanel, ProductCard, and Portfolio. For each, explain what it does and what props it passes or receives. Do not use overly academic language. Absolutely no emojis.]

## 3. State Management

### Local State Usage

[AGENT PROMPT: Activate your humaniser skill. Explain how the `useState` hook is used for local UI interactions in a professional report format. Give 3 specific examples (like controlled form inputs in UserProfile, active filter states, and UI loading states). Write this like you are explaining your code to a peer. Absolutely no emojis.]

### Context API Implementation

[AGENT PROMPT: Activate your humaniser skill. Explain the two global contexts used to prevent prop drilling. Detail the `PortfolioContext` (managing selected investments, total amounts, weighted returns) and the `UserProfileContext` (storing risk tolerance, time horizon, budget). Keep the explanation grounded in practical utility. Absolutely no emojis.]

### State Flow Diagram

![Add to Portfolio State Flow](Diagrams/Add%20to%20Portfolio%20State%20Lifecycle.png)

## 4. Financial Logic

### Data Model Explanation

[AGENT PROMPT: Activate your humaniser skill. Explain the core data model. Detail that every product strictly includes an expected return percentage, a risk level (low, medium, high), liquidity status, and a minimum investment requirement. Keep it simple and professional. Absolutely no emojis.]

### Risk and Return Mapping

[AGENT PROMPT: Activate your humaniser skill. Describe the realistic correlation enforced between risk and expected return. Outline that low-risk is 3 to 7 percent, medium-risk is 7 to 12 percent, and high-risk is above 12 percent. Maintain a professional report format. Absolutely no emojis.]

### Recommendation Algorithm Flowchart

![Recommendation Algorithm Logic](Diagrams/Product%20Recommendation%20Algorithm.png)

### Recommendation Algorithm Explanation

[AGENT PROMPT: Activate your humaniser skill. Detail the step-by-step logic of the recommendation engine. Explain how it filters out products exceeding the user's budget, matches risk tolerance, filters for time horizon and liquidity, and sorts the final array. Absolutely no emojis.]

### Portfolio Calculations

[AGENT PROMPT: Activate your humaniser skill. Explain how the portfolio page calculates its metrics. Detail the math behind the 'Total Invested' (simple sum), 'Weighted Return' (fraction of total investment multiplied by expected return), and 'Risk Distribution' (percentage breakdown of risk assets). Absolutely no emojis.]

## 5. API Integration

### API Choice

The application utilizes an external mock API to fetch initial retail product data before transformation.

### API Data Transformation Pipeline

![API Data Transformation](Diagrams/Data%20Transformation%20Flowchart.png)

### Transformation Logic

[AGENT PROMPT: Activate your humaniser skill. Explain how raw retail data is transformed into financial instruments. Describe how retail categories map to financial sectors, how prices scale to create realistic minimum investments, and how risk levels and expected returns are assigned deterministically to ensure consistent data on every render. Absolutely no emojis.]

### Error Handling

[AGENT PROMPT: Activate your humaniser skill. Briefly explain the use of try/catch blocks for the asynchronous fetch request and how a local error state is used to trigger a fallback UI if the API fails. Absolutely no emojis.]

## 6. Challenges and Solutions

### Technical Challenges

[AGENT PROMPT: Activate your humaniser skill. Describe a technical challenge regarding managing multiple intersecting filters (AND logic) without causing infinite render loops. Explain the solution of extracting filtering logic outside the useEffect hook. Write this like a developer explaining a bug fix over coffee, but maintain a professional report format. Absolutely no emojis.]

### Logic Challenges

[AGENT PROMPT: Activate your humaniser skill. Describe a logic challenge regarding calculating the weighted average return when users dynamically change allocation amounts. Explain the solution of moving the calculation logic directly into the PortfolioContext for safe global state updates. Absolutely no emojis.]

## 7. Screenshots

### Home Page

![Home Page UI](Interface/home.png)

### Product Listing Page

![Product Listing UI](Interface/products.png)

### User Profile and Recommendations

![User Profile UI](Interface/profile.png)
![Recommendations UI](Interface/recommendations.png)

### Portfolio Page

![Portfolio Management UI](Interface/portfolio.png)

## 8. Conclusion

### What Was Learned

[AGENT PROMPT: Activate your humaniser skill. Summarize the learning experience in a professional report format. Focus on how building the logic layer highlighted the importance of clean state management and writing deterministic functions for complex data transformations. Keep it honest and simple. Absolutely no emojis.]

### Future Improvements

[AGENT PROMPT: Activate your humaniser skill. Suggest two realistic future improvements for the application, such as implementing a real backend database or adding interactive data visualization charts for portfolio performance. Absolutely no emojis.]
