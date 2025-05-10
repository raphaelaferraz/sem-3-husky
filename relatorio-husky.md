# Relatório de Configuração do Husky

## Introdução

Este relatório documenta o processo de configuração do Husky em um repositório GitHub, implementando hooks pré-commit e pré-push para garantir a qualidade do código.

## Configuração Inicial

1. Criação do repositório no GitHub
2. Inicialização do projeto Node.js
3. Instalação das dependências necessárias:
   ```bash
   npm install --save-dev husky lint-staged jest eslint
   ```

## Configuração do Husky

### Hook Pré-commit

O hook pré-commit foi configurado para:

- Executar a compilação do código
- Verificar a qualidade do código com ESLint
- Executar testes relacionados aos arquivos modificados

### Hook Pré-push

O hook pré-push foi configurado para:

- Executar todos os testes do projeto
- Garantir que nenhum teste falhe antes do push

## Estrutura do Projeto

- `teste.js`: Arquivo principal com a função de exemplo
- `teste.test.js`: Arquivos de teste usando Jest
- `.husky/`: Diretório com as configurações dos hooks
- `package.json`: Configurações do projeto e dependências

## Evidências de Funcionamento

### Pré-commit

[Adicionar screenshot do terminal mostrando a execução do pré-commit]

### Pré-push

[Adicionar screenshot do terminal mostrando a execução do pré-push]

## Conclusão

A configuração do Husky foi realizada com sucesso, garantindo a qualidade do código através de:

- Compilação automática
- Execução de testes
- Verificação de boas práticas de codificação
