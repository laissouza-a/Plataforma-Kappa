# Plataforma Kappa

Plataforma SaaS gamificada de ensino técnico de programação. Alunos avançam por missões de código, ganham XP, sobem de nível e competem em rankings globais.

---

## Executando com Docker

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (incluso no Docker Desktop)

### Passo a passo

```bash
# 1. Clone o repositório
git clone <url-do-repositório>
cd Plataforma-Kappa

# 2. Configure as variáveis de ambiente
cp .env.example .env

# 3. Suba o projeto
docker compose up
```

Acesse **http://localhost:5173** no navegador.

O container usa hot-reload: qualquer alteração nos arquivos locais é refletida automaticamente no browser.

### Parar o projeto

```bash
docker compose down
```

---

## Variáveis de ambiente

| Variável | Descrição | Padrão |
|---|---|---|
| `VITE_API_URL` | URL base da API backend | `http://localhost:8000` |

Edite o arquivo `.env` para apontar para outra instância do backend quando necessário.

---

## Desenvolvimento local (sem Docker)

Requer **Node.js 20+**.

```bash
npm install
cp .env.example .env
npm run dev
```

Acesse **http://localhost:5173**.

---

## Build de produção

```bash
# Gera o bundle estático em /dist
npm run build

# Ou via Docker (imagem nginx)
docker build --target prod -t kappa-frontend .
docker run -p 80:80 kappa-frontend
```

---

## Estrutura do projeto

```
src/
├── components/        # Componentes globais (PrivateRoute, etc.)
├── context/           # Contextos React (AuthContext)
├── services/          # Camada de serviço / API (api.js)
└── features/
    ├── auth/
    │   └── pages/     # LoginPage
    └── student/
        ├── components/ # Layout, Header, Sidebar, widgets
        └── pages/      # StudentDashboard, SubmissionModule
```
