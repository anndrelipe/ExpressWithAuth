# Express With Auth
Um sistema completo de autenticação desenvolvido com foco em boas práticas, segurança e separação de camadas. Inclui cadastro com verificação por e-mail, login com senha criptografada, recuperação de senha, proteção de rotas e fluxo completo de validação de tokens. Criado como projeto de estudo para consolidar conhecimento em back-end.

> Projeto guia: sistema completo de autenticação com cadastro, login, verificação por e-mail, refresh tokens, recuperação de senha e rotas protegidas.

## Visão Geral

Este repositório contém um projeto de referência para um sistema de autenticação construído com Node e Express. O objetivo é servir como um ambiente de aprendizado e prática para conceitos fundamentais de backend: estruturação de projeto, segurança, fluxos de autenticação modernos, validação de dados, e teste.

O design do projeto é modular e pensado para facilitar a migração futura para TypeScript e frameworks mais opinados (por exemplo, NestJS).

---

## Funcionalidades Principais

- Cadastro de usuários com validação de dados
- Verificação de e-mail pós-cadastro
- Login com geração de Access Token (curto prazo) e Refresh Token (longo prazo)
- Rotas protegidas por middleware de autenticação
- Fluxo de refresh token e política de rotacionamento/invalidação
- Logout (revogação de tokens)
- Recuperação de senha via token temporário enviado por e-mail
- Papel/roles para autorização (ex.: user, admin)
- Observabilidade mínima: logs e captura de erros

---

## Requisitos

- Node.js 22.17.0
- Banco de dados: PostgreSQL
- Serviço de envio de e-mail (SMTP ou provider como SendGrid/SES)
- Ambiente local com variáveis de ambiente para segredos e conexões

---

## Princípio de Bibliotecas e Ferramentas

- Framework HTTP: Express  
- DB / ORM: Mongoose (MongoDB) ou Sequelize / TypeORM (Postgres/MySQL)  
- Hash de senha: bcrypt (ou argon2)  
- JWT: jsonwebtoken  
- Validação: Zod ou Joi  
- Segurança HTTP: helmet e cors  
- Rate limiting: express-rate-limit (ou soluções com Redis)  
- E-mail: Nodemailer ou serviços externos (SendGrid, SES, Mailgun)  
- Logs: Winston ou Pino  
- Documentação: Swagger  
- Cache / blacklist: Redis (opcional)  
- Testes: Jest + Supertest
