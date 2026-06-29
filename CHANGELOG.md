# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2024-XX-XX

### Adicionado

- Implementação completa do sistema bancário DIO Bank Pro
- Arquitetura Clean Architecture com separação em camadas
- Entidades de domínio: BaseAccount, DioAccount, CompanyAccount, BonusAccount
- Sistema de transações com histórico completo
- Serviços de aplicação: AccountService, TransactionService, LoanService
- Repositório em memória com interface desacoplada
- Logger estruturado em console
- CLI interativa para demonstração
- Tratamento de erros de domínio robusto
- Testes unitários cobrindo todas as entidades e serviços
- Testes de integração para fluxos completos
- Configuração de CI/CD com GitHub Actions
- Documentação técnica completa
- README premium com badges, diagramas e exemplos

### Implementações do Desafio DIO

- ✅ Métodos de depósito e saque na classe DioAccount
- ✅ Saque apenas para contas ativas com saldo suficiente
- ✅ Empréstimo na CompanyAccount
- ✅ Empréstimo apenas para contas ativas
- ✅ Novo tipo de conta (BonusAccount) com bônus de +10% no depósito
- ✅ Todos os atributos privados
- ✅ name e accountNumber imutáveis
- ✅ Instâncias e execução no app.ts

### Melhorias Premium

- Clean Architecture com Domain, Application, Infrastructure, Presentation
- Princípios SOLID aplicados
- Inversão de dependência via interfaces
- Tipagem forte com TypeScript strict
- Testes automatizados com Vitest
- Cobertura de código com v8
- ESLint e Prettier configurados
- GitHub Actions para CI
- Documentação extensiva

## [0.1.0] - 2024-XX-XX

### Adicionado

- Estrutura inicial do projeto
- Configuração do TypeScript
- Entidade base DioAccount
