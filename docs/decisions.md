# Decisões Técnicas

## Por que Clean Architecture?

O desafio original era um script simples. A evolução para Clean Architecture demonstra:

- **Escalabilidade**: Fácil adicionar novos tipos de conta, serviços ou interfaces
- **Testabilidade**: Camadas desacopladas permitem testes unitários isolados
- **Manutenibilidade**: Mudanças em uma camada não afetam as outras
- **Profissionalismo**: Arquitetura usada em sistemas bancários reais

## Por que TypeScript Strict?

- Elimina `any` implícito
- Força tratamento de null/undefined
- Tipagem em tempo de compilação reduz bugs em runtime
- Melhor DX (Developer Experience) com autocomplete

## Por que Vitest ao invés de Jest?

- Nativo para ESM (ES Modules)
- Configuração zero com Vite
- API compatível com Jest
- Mais rápido
- TypeScript support nativo

## Por que Repositório In-Memory?

- Foco no domínio e regras de negócio
- Fácil substituir por SQLite/PostgreSQL depois
- Testes rápidos sem dependências externas
- Demonstra Repository Pattern sem complexidade de infra

## Por que Classes ao invés de Functions?

O desafio pedia POO. Além disso:

- Encapsulamento natural com private/protected
- Herança para especialização de contas
- Polimorfismo para comportamentos diferentes
- Estado interno gerenciado

## Decisões de Design

### Atributos Privados

Todos os atributos sensíveis são privados:
- `_balance`: protegido contra modificação direta
- `_transactions`: histórico imutável externamente
- `_status`: controle via métodos

### Name e AccountNumber como readonly

Garante imutabilidade via TypeScript:
- `readonly name`: identidade da conta não muda
- `readonly accountNumber`: número único e fixo

### Erros de Domínio

Cada erro é uma classe específica:
- Facilita tratamento diferenciado
- Mensagens claras para o usuário
- Códigos para internacionalização

## Trade-offs

| Decisão | Pró | Contra |
|---------|-----|--------|
| Clean Architecture | Manutenível, testável | Mais boilerplate |
| In-Memory DB | Simples, rápido | Não persiste entre execuções |
| Classes POO | Encapsulamento | Mais verboso que functions |
| TypeScript Strict | Segurança | Curva de aprendizado |
