🚀 CI/CD Containerized Application using Jenkins & Docker

📌 Project Overview

This project demonstrates a complete CI/CD (Continuous Integration & Continuous Deployment) pipeline using Git, GitHub, Docker, and Jenkins on Ubuntu.

The application is a simple Node.js web server that is containerized with Docker and automatically built and deployed through a Jenkins Pipeline.

---

🛠️ Technologies Used

- Ubuntu
- Git
- GitHub
- Node.js
- Docker
- Jenkins

---

📁 Project Structure

cicd-project/
│── app.js
│── package.json
│── Dockerfile
│── Jenkinsfile
└── README.md

---

⚙️ Project Workflow

1. Create a Node.js application.
2. Initialize a Git repository.
3. Push the source code to GitHub.
4. Build a Docker image.
5. Run the application inside a Docker container.
6. Configure Jenkins Pipeline.
7. Jenkins automatically builds and deploys the application.

---

🚀 How to Run the Project

Clone the Repository

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd cicd-project

Build Docker Image

docker build -t cicd-app .

Run Docker Container

docker run -d -p 3000:3000 cicd-app

Open in Browser

http://localhost:3000

---

🔄 Jenkins Pipeline Stages

- Build Docker Image
- Run Docker Container

---

📷 Expected Output

Hello from CI/CD Pipeline Project

---

🎯 Learning Outcomes

- Git version control
- GitHub repository management
- Docker containerization
- Jenkins Pipeline (CI/CD)
- Automated application deployment
- DevOps workflow implementation

---

👨‍💻 Author

Bhumireddy Karthik Reddy

Aspiring DevOps Engineer passionate about Cloud Computing, AWS, Docker, Kubernetes, Jenkins, Terraform, Git, GitHub, Linux, and CI/CD automation.

---
