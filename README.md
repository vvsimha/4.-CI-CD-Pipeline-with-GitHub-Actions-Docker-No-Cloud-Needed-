# CI/CD Pipeline with GitHub Actions & Docker (Local Deployment)

This project demonstrates a complete CI/CD pipeline that:
- Builds the application
- Runs automated tests
- Builds a Docker image
- Pushes to Docker Hub
- Deploys locally using Docker or Kubernetes (optional)

## 🚀 Tech Stack
- Node.js
- Docker
- GitHub Actions
- Jest Testing
- Minikube (optional)

---

## ✅ CI/CD Pipeline Steps
1. Checkout source code
2. Install dependencies
3. Run tests
4. Build Docker image
5. Push to Docker Hub

---

## 🐳 Build and Run Locally (Docker Compose)

```bash
docker-compose up --build
