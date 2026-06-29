# Política de Segurança

## Reportando Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança neste projeto, por favor:

1. **NÃO** abra uma issue pública
2. Envie um email para: matheusdideusf@gmail.com
3. Inclua detalhes suficientes para reproduzir o problema
4. Aguarde uma resposta antes de divulgar publicamente

## Práticas de Segurança

Este projeto segue as seguintes práticas:

- Nenhuma credencial ou token é commitado no repositório
- Variáveis de ambiente usam `.env.example` como template
- Dados sensíveis são validados antes de processamento
- Entradas de usuário são validadas em camadas de aplicação

## Dependências

Mantemos as dependências atualizadas via:

- `npm audit` para verificar vulnerabilidades
- Dependabot para atualizações automáticas
- Revisão manual de dependências críticas

## Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.0.x  | :white_check_mark: |
