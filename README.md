# Deploy Web App with Kubernetes

---

<p>
  This is a project for the Network and System Administration course, deploying a full-stack chat application using the MERN Stack (MongoDB, Express.js, React.js, Node.js) on a Kubernetes Cluster. The application supports user registration, login, and real-time messaging.
</p>


## 👥 Team Members

| No. | Full Name               | Student ID | Responsibilities |
|-----|-------------------------|------------|------------------|
| 1   | Đỗ Hồng Ngân            | 23520994   | - Pushed Docker images to Docker Hub<br>- Deployed the entire system to Google Kubernetes Engine (GKE)<br>- Recorded and presented the live demo |
| 2   | Võ Thị Hồng Phúc        | 23521226   | - Wrote optimized Dockerfiles for both frontend (React) and backend (Express)<br>- Built and tested Docker images locally<br>- Ensured images worked correctly before deployment |
| 3   | Huỳnh Thị Phương Nghi   | 23521001   | - Wrote Kubernetes manifests: Deployments, Services, ConfigMaps for all services<br>- Implemented Ingress to expose the application publicly<br>- Debugged deployment issues in the cluster |



## 📁 Based on Open Source
🔗 Original source: [MERN Chat App Source](https://github.com/Nandudumare/MERN-CHAT-APP)

🛠️ This repository: Modified and extended to include Kubernetes YAML files for deploying the app (locally via Minikube or on the cloud).



## 🧱 Directory Structure

```
├── client/                 # Frontend: React (with Dockerfile)
│   └── Dockerfile
├── server/                 # Backend: Express + Socket.io (with Dockerfile)
│   └── Dockerfile
├── k8s/                    # Kubernetes YAML files
│   ├── client-deployment.yaml
│   ├── server-deployment.yaml
│   ├── mongo-deployment.yaml
│   ├── mongo-pv.yaml
│   ├── mongo-pvc.yaml
│   └── ingress.yaml
├── docker-compose.yml      # Local environment setup for quick testing
└── README.md
```



## ⚙️ Deployment Steps

### 1. Clone the Repository

```bash
git clone https://github.com/BooBoo0531/DeployWebAppOnK8s.git
cd DeployWebAppOnK8s
````
### 2. Start Kubernetes Cluster (Minikube)
```bash
minikube start
````
### 3. Apply all Kubernetes Manifests
```bash
kubectl apply -f k8s/
````



## 🌐 Accessing the Application
### With Minikube
```bash
minikube service chat-client
````
### With Ingress
Configure DNS and update your /etc/hosts file to access the app via a domain name.



## 👏 Credits

- Original App: [@Nandudumare](https://github.com/Nandudumare)
- Kubernetes Deployment: Implemented by **Group 14**, course **NT132.P21 - Network and System Administration**, **University of Information Technology – VNU-HCM (UIT)**



## 📄 License
This project is intended for educational purposes only and is not for commercial use.
