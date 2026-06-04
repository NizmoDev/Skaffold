# JavaScript Skaffold Kubernetes Project

This project demonstrates how to develop and deploy a JavaScript application on a local Kubernetes cluster using **Skaffold** and **Kind**.

It provides a simple workflow for building, deploying, and exposing a service locally with hot reload support.

---

## 🚀 Prerequisites 
 
Before starting, make sure you have installed:

* Docker → https://www.docker.com/
* Kind (Kubernetes in Docker) → https://kind.sigs.k8s.io/
* kubectl → https://kubernetes.io/docs/tasks/tools/
* Skaffold → https://skaffold.dev/

---

## 📦 Clone the repository

```bash
git clone https://github.com/NizmoDev/javascript-skaffold.git
cd javascript-skaffold
```

---

## ☸️ Create a local Kubernetes cluster

We use **Kind** to run Kubernetes locally inside Docker.

```bash
kind create cluster --name dev
```

To verify the cluster:

```bash
kubectl cluster-info
```

---

## ⚙️ Run the application with Skaffold

Start the full development pipeline:

```bash
skaffold dev
```

What this does:

* Builds the Docker image automatically
* Deploys Kubernetes manifests
* Watches file changes
* Automatically rebuilds and redeploys the app

---

## 🌐 Access the application

Once deployed, expose the service locally:

```bash
kubectl port-forward service/demo-service 8080:80
```

Then open in your browser:

http://localhost:8080

---

## 🔁 Skaffold workflow

Skaffold handles the full CI/CD loop locally:

1. Detect file changes
2. Rebuild Docker image
3. Push image to local cluster
4. Redeploy Kubernetes manifests

---

## 🛑 Stop the project

To stop Skaffold:

```bash
CTRL + C
```

To delete Kubernetes resources:

```bash
skaffold delete
```

To remove the Kind cluster:

```bash
kind delete cluster --name dev
```

---

## 🧪 Useful commands

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get svc
```

Check deployments:

```bash
kubectl get deployments
```

Check Skaffold status:

```bash
skaffold dev
```

---

## 🧑‍💻 VS Code Debug Setup

### Extensions required

Install the following VS Code extensions:

* Kubernetes extension
* Docker extension

---

### Debug workflow

Open VS Code debug panel:

```bash
Ctrl + Shift + D
```

---

### Terminals (4 required)

Terminal 1:

```bash
skaffold dev
```

Terminal 2:

```bash
skaffold debug
```

Terminal 3:

```bash
kubectl port-forward deployment/demo 9229:9229
```

Terminal 4:

```bash
kubectl port-forward service/demo-service 8081:80
```

---

### VS Code Debug

Attach debugger: "Attach Skaffold"

---

### URLs

* http://localhost:8081/
* http://127.0.0.1:9229/

---

### Debug Console

Look for:
request received

---

## 📚 Tech stack

* JavaScript (Node.js)
* Docker
* Kubernetes
* Kind
* Skaffold
