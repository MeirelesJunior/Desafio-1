# MeirelesBank 🏦

Bem-vindo ao MeirelesBank, um sistema bancário simplificado implementado em TypeScript!

## Visão Geral

O MeirelesBank oferece três tipos de conta para atender às suas necessidades financeiras: `CompanyAccount`, `PeopleAccount` e `SpecialAccount`.

## Funcionalidades

### PeopleAccount

A `DioAccount` é uma conta bancária básica com suporte a depósitos e saques.

#### Métodos

- `deposit(amount: number): void`: Realiza um depósito na conta.
- `withdraw(amount: number): void`: Realiza um saque na conta.

### CompanyAccount

A `CompanyAccount` é uma conta para empresas, com suporte a depósitos, saques e solicitação de empréstimos.

#### Métodos

- `deposit(amount: number): void`: Realiza um depósito na conta.
- `withdraw(amount: number): void`: Realiza um saque na conta.
- `getLoan(amount: number): void`: Solicita um empréstimo.

### SpecialAccount

A `EnhancedDioAccount` é um tipo de conta especial derivado de `DioAccount`, com um método de depósito personalizado.

#### Métodos

- `deposit(amount: number): void`: Realiza um depósito na conta, acrescido de um bônus.

## Atributos

Todos os atributos de conta são privados. `name` e `accountNumber` são imutáveis.
