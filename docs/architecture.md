# Arquitetura do DIO Bank Pro

## Visão Geral

O DIO Bank Pro utiliza **Clean Architecture** com separação em 4 camadas principais:

```
┌─────────────────────────────────────────┐
│           Presentation Layer            │
│     (CLI, Console, Interfaces UI)       │
├─────────────────────────────────────────┤
│         Application Layer               │
│  (Services, Use Cases, DTOs)            │
├─────────────────────────────────────────┤
│         Domain Layer                    │
│  (Entities, Repositories Interfaces,    │
│   Errors, Value Objects)                │
├─────────────────────────────────────────┤
│       Infrastructure Layer              │
│  (Database, Repositories Concrete,      │
│   Logger, External APIs)                │
└─────────────────────────────────────────┘
```

## Camadas

### Domain (Núcleo)

A camada mais interna, independente de frameworks. Contém:

- **Entities**: Regras de negócio encapsuladas (BaseAccount, DioAccount, CompanyAccount, BonusAccount, Transaction)
- **Repository Interfaces**: Contratos para persistência (IAccountRepository)
- **Domain Errors**: Erros específicos do domínio (InsufficientBalanceError, InactiveAccountError, etc.)

### Application

Orquestração dos casos de uso. Contém:

- **Services**: AccountService, TransactionService, LoanService
- **Use Cases**: Operações específicas do sistema
- **DTOs**: Objetos de transferência de dados

### Infrastructure

Implementações técnicas. Contém:

- **Repositories**: AccountRepository (in-memory, extensível para DB real)
- **Logger**: ConsoleLogger (extensível para Winston, Pino, etc.)
- **Database**: JSONDatabase (persistência simples em arquivo)

### Presentation

Interface com o usuário. Contém:

- **CLI**: Interface de linha de comando interativa
- **Console**: Demonstração via terminal

## Fluxo de Dependências

```
Presentation → Application → Domain ← Infrastructure
```

**Regra de Ouro**: Dependências apontam para dentro. Domain não conhece nada externo.

## Princípios SOLID Aplicados

| Princípio | Aplicação |
|-----------|-----------|
| **S**ingle Responsibility | Cada classe tem uma responsabilidade única |
| **O**pen/Closed | Extensível via novos tipos de conta sem modificar código existente |
| **L**iskov Substitution | BonusAccount substitui BaseAccount sem quebrar |
| **I**nterface Segregation | IAccountRepository é focada e coesa |
| **D**ependency Inversion | Services dependem de interfaces, não implementações |

## Padrões de Projeto

- **Repository Pattern**: Abstração de persistência
- **Factory Method**: Criação de contas via AccountService
- **Strategy**: Diferentes comportamentos por tipo de conta
- **Template Method**: BaseAccount define fluxo, subclasses especializam
