# bankist-banking-app

A minimalist client-side digital banking web application simulating user authentication, real-time account balances, money transfers, loan requests, transaction sorting, and automatic logout timers.

## Project Overview

`bankist-banking-app` provides an interactive mock banking portal implemented using vanilla JavaScript. The application demonstrates complex array transformations (`map`, `filter`, `reduce`), formatted currency and date calculations, transaction history rendering, and simulated banking workflows within a single responsive web interface.

## Features

- **Authentication Simulation**: Log into demo accounts using user initials and personal PIN codes.
- **Dynamic Balance & Summaries**: Real-time calculation of total deposits, withdrawals, and interest earnings based on individual account rates.
- **Peer-to-Peer Transfers**: Transfer funds between valid user accounts with boundary and balance validation.
- **Loan Approvals**: Instant loan processing conditioned on existing deposits meeting bank minimum thresholds.
- **Account Termination**: Close accounts with credential verification, dynamically removing records from the active accounts registry.
- **Transaction Sorting**: Toggle transaction chronologically or by absolute monetary value.
- **Inactivity Countdown Timer**: Automatically logs out users after a set period of inactivity to maintain simulated security.

## Demo Credentials

| User Account | Username (Initials) | PIN |
|---|---|---|
| Jonas Schmedtmann | `js` | `1111` |
| Jessica Davis | `jd` | `2222` |
| Steven Thomas Williams | `stw` | `3333` |
| Sarah Smith | `ss` | `4444` |

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge).

## Installation/Build

No compilation or build tooling is required.

1. Clone the repository:
   ```bash
   git clone https://github.com/AntonioHellin/bankist.git
   cd bankist
   ```

2. Serve locally:
   ```bash
   npx serve .
   ```

## Usage

1. Open `index.html` in your web browser.
2. Enter one of the demo usernames (e.g., `js`) and PIN (`1111`) into the top navigation bar and click the login arrow button.
3. Once logged in, execute transfers, request loans, sort transactions, or close the account.

## License

This project is licensed under the [MIT License](LICENSE).
