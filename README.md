<div align="center">

<img src="./assets/banner.svg" width="100%" alt="DIO Bank Pro Banner" />

<br><br>

<!-- Dynamic Typing Effect -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=28&duration=3000&pause=1000&color=00F5D4&center=true&vCenter=true&width=800&lines=Clean+Architecture+Banking+System;SOLID+Principles+%E2%80%A2+TypeScript+Strict;39+Tests+Passing+%E2%80%A2+100%25+Type+Safe;Premium+Evolution+of+DIO+Challenge" alt="Typing SVG" />
</a>

<br><br>

<!-- Neon Badges Row -->
<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0a0e1a&color=00f5d4" alt="TypeScript" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=0a0e1a&color=00bbf9" alt="Node.js" />
  </a>
  <a href="https://vitest.dev/">
    <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white&labelColor=0a0e1a&color=9b5de5" alt="Vitest" />
  </a>
  <a href="https://github.com/features/actions">
    <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white&labelColor=0a0e1a&color=ff6b35" alt="GitHub Actions" />
  </a>
</p>

<p align="center">
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white&labelColor=0a0e1a&color=ffd700" alt="ESLint" />
  </a>
  <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black&labelColor=0a0e1a&color=00f5d4" alt="Prettier" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&labelColor=0a0e1a&color=00bbf9" alt="License" />
  </a>
  <a href="https://www.dio.me/">
    <img src="https://img.shields.io/badge/DIO-Challenge-FF5722?style=for-the-badge&labelColor=0a0e1a&color=9b5de5" alt="DIO" />
  </a>
</p>

<br>

<!-- GitHub Stats Cards -->
<img src="https://github-readme-stats.vercel.app/api/pin/?username=matheusflorindo32&repo=dio-bank-pro&theme=react&border_color=00f5d4&bg_color=0d1117&title_color=00f5d4&icon_color=00bbf9&text_color=c9d1d9&hide_border=false&border_radius=12" width="650" alt="DIO Bank Pro Repo Card" />

<br><br>

<!-- Profile Trophy -->
<img src="https://github-profile-trophy.vercel.app/?username=matheusflorindo32&theme=algolia&no-frame=true&row=1&column=6&margin-w=15&margin-h=15" alt="GitHub Profile Trophy" />

</div>

---

<br>

<div align="center">

## 🎬 Live Demo

<img src="https://raw.githubusercontent.com/matheusflorindo32/dio-bank-pro/master/assets/demo-terminal.svg" width="80%" alt="Terminal Demo" />

</div>

<br>

---

## 🏛️ Architecture Overview

```mermaid
graph TB
    subgraph "🏗️ Presentation Layer"
        CLI[CLI Interface]
        Console[Console Demo]
    end
    
    subgraph "⚙️ Application Layer"
        AS[Account Service]
        TS[Transaction Service]
        LS[Loan Service]
        DTO[DTOs]
    end
    
    subgraph "💎 Domain Layer"
        BA[Base Account]
        DA[Dio Account]
        CA[Company Account]
        BOA[Bonus Account]
        TR[Transaction]
        ERR[Domain Errors]
    end
    
    subgraph "🔧 Infrastructure Layer"
        AR[Account Repository]
        LG[Console Logger]
        DB[(JSON Database)]
    end
    
    CLI --> AS
    Console --> AS
    AS --> BA
    TS --> BA
    LS --> CA
    AS --> AR
    TS --> AR
    LS --> AR
    AR --> DB
    BA --> TR
    BA --> ERR
    DA --> BA
    CA --> BA
    BOA --> BA
```

<br>

---

## ✨ Features Matrix

<div align="center">

<table>
<thead>
<tr>
<th width="30%">🏦 Account Types</th>
<th width="30%">💰 Transactions</th>
<th width="30%">🛡️ Validations</th>
</tr>
</thead>
<tbody>
<tr>
<td>

| Feature | Status |
|---------|--------|
| Personal Account | ✅ |
| Company Account | ✅ |
| Bonus Account (+10%) | ✅ |
| Account Activation | ✅ |
| Account Deactivation | ✅ |

</td>
<td>

| Feature | Status |
|---------|--------|
| Deposit | ✅ |
| Withdraw | ✅ |
| Loan (Business) | ✅ |
| Transaction History | ✅ |
| Bonus on Deposit | ✅ |

</td>
<td>

| Validation | Error |
|------------|-------|
| Negative Amount | ❌ |
| Insufficient Funds | ❌ |
| Inactive Account | ❌ |
| Closed Account | ❌ |
| Loan Not Allowed | ❌ |

</td>
</tr>
</tbody>
</table>

</div>

<br>

---

## 🧪 Test Coverage

<div align="center">

<img src="https://img.shields.io/badge/tests-39%2F39%20passing-brightgreen?style=for-the-badge&labelColor=0a0e1a&color=00f5d4" alt="Tests" />
<img src="https://img.shields.io/badge/coverage-%3E90%25-brightgreen?style=for-the-badge&labelColor=0a0e1a&color=00bbf9" alt="Coverage" />
<img src="https://img.shields.io/badge/typescript-strict-blue?style=for-the-badge&labelColor=0a0e1a&color=9b5de5" alt="TypeScript" />

<br><br>

<!-- Test Grid -->
<table width="90%">
<tr>
<td width="33%" valign="top">

### 📝 Unit Tests

- ✅ `DioAccount` — 10 tests
- ✅ `CompanyAccount` — 6 tests  
- ✅ `BonusAccount` — 6 tests
- ✅ `AccountService` — 8 tests
- ✅ `TransactionService` — 5 tests
- ✅ `LoanService` — 4 tests

</td>
<td width="33%" valign="top">

### 🎯 Test Patterns

- 🔄 Arrange → Act → Assert
- 🎭 Isolated with `beforeEach`
- 📦 Dependency Injection
- 🎨 Domain Error Testing
- 🧩 Mock Repositories

</td>
<td width="33%" valign="top">

### 📊 Quality Metrics

| Metric | Value |
|--------|-------|
| Total Tests | 39 |
| Passing | 39 |
| Failing | 0 |
| Type Errors | 0 |
| Lint Warnings | 0 |

</td>
</tr>
</table>

</div>

<br>

---

## 🚀 Quick Start

<div align="center">

<!-- Terminal Style Code Block -->

```bash
# 🚀 Clone the repository
git clone https://github.com/matheusflorindo32/dio-bank-pro.git

# 📁 Navigate to project
cd dio-bank-pro

# 📦 Install dependencies
npm install

# ▶️ Run the application
npm run dev

# 🧪 Run tests
npm test

# 🧪 Run tests with coverage
npm run test:coverage
```

</div>

<br>

---

## 📊 Performance & Quality

<div align="center">

<!-- GitHub Stats -->
<img src="https://github-readme-stats.vercel.app/api?username=matheusflorindo32&show_icons=true&theme=react&border_color=00f5d4&bg_color=0d1117&title_color=00f5d4&icon_color=00bbf9&text_color=c9d1d9&hide_border=false&border_radius=12&include_all_commits=true&count_private=true" width="49%" alt="GitHub Stats" />
<img src="https://github-readme-streak-stats.herokuapp.com/?user=matheusflorindo32&theme=react&border=00f5d4&background=0d1117&stroke=00f5d4&ring=00f5d4&fire=ff6b35&currStreakNum=00f5d4&sideNums=00bbf9&currStreakLabel=00f5d4&sideLabels=c9d1d9&dates=8b949e" width="49%" alt="GitHub Streak" />

<br><br>

<!-- Language Stats -->
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=matheusflorindo32&layout=compact&theme=react&border_color=00f5d4&bg_color=0d1117&title_color=00f5d4&text_color=c9d1d9&hide_border=false&border_radius=12&langs_count=8" width="50%" alt="Top Languages" />

</div>

<br>

---

## 🔧 Tech Stack

<div align="center">

<!-- Skill Icons Grid -->
<img src="https://skillicons.dev/icons?i=ts,nodejs,vite,github,git,vscode&theme=dark&perline=6" alt="Tech Stack" />

<br><br>

<!-- Additional Tools -->
<img src="https://skillicons.dev/icons?i=linux,bash,npm,yarn&theme=dark&perline=4" alt="Additional Tools" />

</div>

<br>

---

## 📈 Comparison: Original vs Pro

<div align="center">

<table width="90%">
<thead>
<tr>
<th width="25%">Aspect</th>
<th width="30%">Original Challenge</th>
<th width="35%">🏆 DIO Bank Pro</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Architecture</b></td>
<td>Single Script</td>
<td>✨ Clean Architecture (4 Layers)</td>
</tr>
<tr>
<td><b>OOP</b></td>
<td>Basic Classes</td>
<td>✨ Abstraction, Inheritance, Polymorphism</td>
</tr>
<tr>
<td><b>TypeScript</b></td>
<td>Standard Config</td>
<td>✨ Strict Mode, No Implicit Any</td>
</tr>
<tr>
<td><b>Testing</b></td>
<td>None</td>
<td>✨ 39 Automated Tests</td>
</tr>
<tr>
<td><b>CI/CD</b></td>
<td>None</td>
<td>✨ GitHub Actions</td>
</tr>
<tr>
<td><b>Documentation</b></td>
<td>Minimal</td>
<td>✨ Full Technical Docs + Diagrams</td>
</tr>
<tr>
<td><b>Error Handling</b></td>
<td>Console.log</td>
<td>✨ Domain Errors with Codes</td>
</tr>
<tr>
<td><b>Logging</b></td>
<td>None</td>
<td>✨ Structured Console Logger</td>
</tr>
<tr>
<td><b>Code Quality</b></td>
<td>Basic</td>
<td>✨ ESLint + Prettier + Type Strict</td>
</tr>
</tbody>
</table>

</div>

<br>

---

## 🗂️ Project Structure

<div align="center">

```
🌳 dio-bank-pro
├── 📂 src/
│   ├── 💎 domain/              ← Core Business Logic
│   │   ├── 🏦 entities/
│   │   │   ├── 📄 BaseAccount.ts
│   │   │   ├── 📄 DioAccount.ts
│   │   │   ├── 📄 CompanyAccount.ts
│   │   │   ├── 📄 BonusAccount.ts
│   │   │   └── 📄 Transaction.ts
│   │   ├── 🗄️ repositories/
│   │   │   └── 📄 IAccountRepository.ts
│   │   └── ⚠️ errors/
│   │       └── 📄 DomainError.ts
│   │
│   ├── ⚙️ application/         ← Use Cases & Services
│   │   ├── 📄 AccountService.ts
│   │   ├── 📄 TransactionService.ts
│   │   ├── 📄 LoanService.ts
│   │   └── 📂 dto/
│   │       └── 📄 AccountDTOs.ts
│   │
│   ├── 🔧 infrastructure/    ← Technical Implementations
│   │   ├── 🗄️ repositories/
│   │   │   └── 📄 AccountRepository.ts
│   │   └── 📝 logger/
│   │       └── 📄 ConsoleLogger.ts
│   │
│   ├── 🎨 presentation/      ← User Interfaces
│   │   └── 📄 BankConsole.ts
│   │
│   └── 📂 shared/            ← Utilities
│       ├── 📂 enums/
│       ├── 📂 types/
│       └── 📂 utils/
│
├── 🧪 tests/                 ← Test Suite
├── 📚 docs/                  ← Technical Documentation
├── 🎨 assets/                ← Visual Assets
└── ⚙️ configs                ← TypeScript, ESLint, Vitest
```

</div>

<br>

---

## 🎨 Class Diagram

<div align="center">

```mermaid
classDiagram
    class BaseAccount {
        <<abstract>>
        +readonly name: string
        +readonly accountNumber: number
        +readonly accountType: AccountType
        +getBalance() number
        +deposit(amount) ITransaction
        +withdraw(amount) ITransaction
        +getAccountInfo()* Record
    }
    
    class DioAccount {
        +deposit(amount) ITransaction
        +withdraw(amount) ITransaction
        +getAccountInfo() Record
    }
    
    class CompanyAccount {
        -_loanLimit: number
        -_totalLoaned: number
        +loanLimit: number
        +totalLoaned: number
        +availableLoan: number
        +takeLoan(amount) ITransaction
        +getAccountInfo() Record
    }
    
    class BonusAccount {
        -_bonusRate: number
        +bonusRate: number
        +deposit(amount) ITransaction
        +getAccountInfo() Record
    }
    
    class Transaction {
        +readonly id: string
        +readonly type: TransactionType
        +readonly amount: number
        +readonly timestamp: Date
        +readonly description: string
        +readonly balanceAfter: number
    }
    
    BaseAccount <|-- DioAccount
    BaseAccount <|-- CompanyAccount
    BaseAccount <|-- BonusAccount
    BaseAccount --> Transaction
```

</div>

<br>

---

## 📦 Available Scripts

<div align="center">

<table width="80%">
<tr>
<td>

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Run development mode |
| `npm run build` | 📦 Build for production |
| `npm start` | ▶️ Start production build |
| `npm test` | 🧪 Run all tests |
| `npm run test:watch` | 👀 Run tests in watch mode |
| `npm run test:coverage` | 📊 Generate coverage report |
| `npm run lint` | 🔍 Run ESLint |
| `npm run lint:fix` | 🔧 Fix ESLint issues |
| `npm run format` | ✨ Format with Prettier |
| `npm run typecheck` | ✅ Check TypeScript types |
| `npm run clean` | 🗑️ Clean dist folder |

</td>
</tr>
</table>

</div>

<br>

---

## 🧩 Code Examples

<details>
<summary><b>🏦 Creating Accounts</b> — Click to expand</summary>

```typescript
import { AccountService } from './src/application/services/AccountService'
import { AccountRepository } from './src/infrastructure/repositories/AccountRepository'

const service = new AccountService(new AccountRepository())

// Personal Account
const personal = service.createAccount({
  name: 'João Silva',
  accountType: 'PERSONAL',
  initialBalance: 1000
})

// Company Account
const company = service.createAccount({
  name: 'Tech Solutions',
  accountType: 'COMPANY'
})

// Bonus Account (+10% on deposits)
const bonus = service.createAccount({
  name: 'Maria Santos',
  accountType: 'BONUS'
})
```

</details>

<details>
<summary><b>💰 Transactions</b> — Click to expand</summary>

```typescript
import { TransactionService } from './src/application/services/TransactionService'

const txService = new TransactionService(repository)

// Deposit
txService.deposit({ accountNumber: 123456, amount: 500 })

// Withdraw
txService.withdraw({ accountNumber: 123456, amount: 200 })

// Check balance
const balance = txService.getBalance(123456)

// Transaction history
const history = txService.getTransactionHistory(123456)
```

</details>

<details>
<summary><b>💼 Business Loans</b> — Click to expand</summary>

```typescript
import { LoanService } from './src/application/services/LoanService'

const loanService = new LoanService(repository)

// Only CompanyAccount can take loans
loanService.takeLoan({ accountNumber: 100001, amount: 3000 })

// Check loan info
const info = loanService.getLoanInfo(100001)
console.log(info.availableLoan) // Remaining limit
```

</details>

<details>
<summary><b>🎁 Bonus Account</b> — Click to expand</summary>

```typescript
// BonusAccount adds +10% on every deposit
const bonusAccount = service.createAccount({
  name: 'Maria Santos',
  accountType: 'BONUS'
})

service.activateAccount(bonusAccount.accountNumber)

// Deposit 500 → Balance becomes 550 (bonus: 50)
bonusAccount.deposit(500)
console.log(bonusAccount.getBalance()) // 550
```

</details>

<br>

---

## 🏆 Challenge Requirements

<div align="center">

<table width="80%">
<tr>
<th width="50%">Requirement</th>
<th width="20%">Status</th>
<th width="30%">Implementation</th>
</tr>
<tr>
<td>Deposit & Withdraw methods in DioAccount</td>
<td>✅</td>
<td><code>BaseAccount.deposit()</code> & <code>withdraw()</code></td>
</tr>
<tr>
<td>Withdraw only for active accounts with balance</td>
<td>✅</td>
<td><code>validateOperation()</code> checks status & balance</td>
</tr>
<tr>
<td>Loan in CompanyAccount</td>
<td>✅</td>
<td><code>CompanyAccount.takeLoan()</code></td>
</tr>
<tr>
<td>Loan only for active accounts</td>
<td>✅</td>
<td>Validation before loan processing</td>
</tr>
<tr>
<td>New account type with +10% deposit bonus</td>
<td>✅</td>
<td><code>BonusAccount</code> with <code>bonusRate = 0.1</code></td>
</tr>
<tr>
<td>All attributes private</td>
<td>✅</td>
<td>TypeScript <code>private</code> modifier</td>
</tr>
<tr>
<td>Immutable name and accountNumber</td>
<td>✅</td>
<td>TypeScript <code>readonly</code></td>
</tr>
<tr>
<td>Instances and execution in app.ts</td>
<td>✅</td>
<td><code>src/main.ts</code> & <code>BankConsole.ts</code></td>
</tr>
</table>

</div>

<br>

---

## 📚 Documentation

<div align="center">

<table width="80%">
<tr>
<td width="25%" align="center">

<a href="./docs/architecture.md">
<img src="https://img.shields.io/badge/📐-Architecture-blue?style=for-the-badge&labelColor=0a0e1a&color=00f5d4" alt="Architecture" />
</a>

</td>
<td width="25%" align="center">

<a href="./docs/class-diagram.md">
<img src="https://img.shields.io/badge/📊-Class_Diagram-blue?style=for-the-badge&labelColor=0a0e1a&color=00bbf9" alt="Class Diagram" />
</a>

</td>
<td width="25%" align="center">

<a href="./docs/decisions.md">
<img src="https://img.shields.io/badge/🧠-Decisions-blue?style=for-the-badge&labelColor=0a0e1a&color=9b5de5" alt="Decisions" />
</a>

</td>
<td width="25%" align="center">

<a href="./docs/roadmap.md">
<img src="https://img.shields.io/badge/🗺️-Roadmap-blue?style=for-the-badge&labelColor=0a0e1a&color=ff6b35" alt="Roadmap" />
</a>

</td>
</tr>
</table>

</div>

<br>

---

## 👨‍💻 Author

<div align="center">

<img src="https://img.shields.io/badge/Matheus_Florindo-Developer-00f5d4?style=for-the-badge&labelColor=0a0e1a" alt="Author" />

<br><br>

**Matheus Florindo de Deus**

💻 Full Stack Developer | 🎖️ Military Police | 📚 Researcher

<br>

<a href="https://github.com/matheusflorindo32">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0e1a&color=00f5d4" alt="GitHub" />
</a>
<a href="https://www.linkedin.com/in/matheus-florindo-de-deus-b953b017a/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0a0e1a&color=00bbf9" alt="LinkedIn" />
</a>
<a href="mailto:matheusdideusf@gmail.com">
  <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0a0e1a&color=9b5de5" alt="Email" />
</a>

<br><br>

<!-- Profile Views -->
<img src="https://komarev.com/ghpvc/?username=matheusflorindo32&color=00f5d4&style=flat-square&label=Profile+Views" alt="Profile Views" />

</div>

<br>

---

<div align="center">

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

<br>

⭐ **If this project helped you, please give it a star!** ⭐

<br>

<!-- Footer Wave -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00f5d4,50:00bbf9,100:9b5de5&height=120&section=footer&text=Thank%20You!&fontSize=24&fontColor=ffffff&animation=fadeIn" width="100%" alt="Footer" />

</div>
