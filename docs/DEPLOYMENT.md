
# Deployment Guide

## Prerequisites
- Docker & Docker Compose
- Node.js 18+
- MongoDB (Local or Atlas)

## Local Development (Docker)
1. Ensure Docker Desktop is running.
2. Run the application stack:
   ```bash
   docker compose up --build
   ```
3. Access:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## Production Deployment

### Frontend (Vercel)
1. Fork/Clone the repo.
2. Connect Vercel to your GitHub repo.
3. Configure Build Settings:
   - Root Directory: `frontend`
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

### Backend Deployment (AWS EC2 Free Tier)

This guide uses a standard **Ubuntu EC2 instance** with Docker.

#### 1. Database Setup (MongoDB Atlas Free Tier)
1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up/login.
2.  Create a **New Project**.
3.  Click **Create a Deployment** -> select **M0 Sandbox** (Free Tier).
4.  **Security Quickstart**:
    *   **Username/Password**: Create a user (e.g., `vera_admin`). **Save this password!**
    *   **IP Access List**: Select "Allow Access from Anywhere" (`0.0.0.0/0`) for simplicity, or add your EC2 IP later.
5.  **Connect**:
    *   Click "Connect" -> "Drivers" -> Node.js.
    *   Copy the connection string (e.g., `mongodb+srv://vera_admin:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`).
    *   Replace `<password>` with your actual password.

#### 2. AWS EC2 Instance Setup
1.  Login to [AWS Console](https://console.aws.amazon.com/).
2.  Go to **EC2 Dashboard** -> **Launch Instance**.
3.  **Name**: `Vera-Backend`.
4.  **AMI**: "Ubuntu Server 24.04 LTS" (Free tier eligible).
5.  **Instance Type**: `t2.micro` or `t3.micro` (Free tier eligible).
6.  **Key Pair**: Create new key pair (`vera-key`), download `.pem` file.
7.  **Network Settings** -> **create security group**:
    *   Allow SSH traffic from "Anywhere" (or My IP).
    *   Allow HTTP traffic from the internet.
    *   Allow HTTPS traffic from the internet.
    *   **Custom TCP**: Port `5000` (Source: Anywhere `0.0.0.0/0`).
8.  **Launch Instance**.

#### 3. Deploy to EC2
1.  **Connect via SSH**:
    ```bash
    # From your local terminal where the key is located
    chmod 400 vera-key.pem
    ssh -i "vera-key.pem" ubuntu@<YOUR_EC2_PUBLIC_IP>
    ```
2.  **Install Docker on EC2**:
    ```bash
    sudo apt-get update
    sudo apt-get install -y docker.io docker-compose-v2 git
    sudo usermod -aG docker $USER
    # Exit and reconnect for group changes to take effect
    exit
    ssh -i "vera-key.pem" ubuntu@<YOUR_EC2_PUBLIC_IP>
    ```
3.  **Clone & Configure**:
    ```bash
    git clone https://github.com/abhisheksinha20p/Vera.git
    cd Vera
    
    # Create production env file
    nano backend/.env
    ```
    *   Paste your variables:
        ```bash
        PORT=5000
        MONGO_URI=mongodb+srv://... (Your Atlas String)
        JWT_SECRET=super_secure_secret_change_me
        NODE_ENV=production
        CORS_ORIGIN=https://vera-steel-eight.vercel.app
        ```
    *   Press `Ctrl+X`, `Y`, `Enter` to save.

4.  **Start Backend**:
    ```bash
    # Build and run using Docker Compose (only backend service)
    docker compose -f docker-compose.yml up -d --build backend
    ```
5.  **Verify**:
    *   Visit `http://<YOUR_EC2_PUBLIC_IP>:5000/api/tasks`.
    *   It should respond (likely 401 Unauthorized or empty list).
    *   It should respond (likely 401 Unauthorized or empty list).

#### 4. Secure with SSL (Requires Custom Domain)
**Crucial Step:** To fix "Mixed Content" errors, your backend must be HTTPS.
1.  **DNS Setup (Your Domain Registrar)**:
    *   Create an **A Record** pointing `@` to your EC2 Public IP (`51.21.2.182`).
    *   Create a **CNAME Record** pointing `www` to `@` (or an A record to the IP).
2.  **Install Nginx & Certbot on EC2**:
    ```bash
    sudo apt update
    sudo apt install -y nginx certbot python3-certbot-nginx
    ```
3.  **Configure Nginx Proxy**:
    *   Create config: `sudo nano /etc/nginx/sites-available/vera`
    *   Paste this:
        ```nginx
        server {
            server_name mewtwo.online www.mewtwo.online;
            location / {
                proxy_pass http://localhost:5000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }
        }
        ```
    *   Enable site:
        ```bash
        sudo ln -s /etc/nginx/sites-available/vera /etc/nginx/sites-enabled/
        sudo rm /etc/nginx/sites-enabled/default
        sudo nginx -t
        sudo systemctl restart nginx
        ```
4.  **Enable SSL**:
    ```bash
    sudo certbot --nginx -d mewtwo.online -d www.mewtwo.online
    ```
    *   Follow the prompts.

#### 5. Final Connection (Vercel)
The last step is to tell your Frontend where the secure Backend is.

1.  **Go to Vercel Dashboard**:
    *   Select your `Vera` project.
    *   Go to **Settings** -> **Environment Variables**.
2.  **Update Variable**:
    *   Find `VITE_API_URL` (or create it).
    *   Set Value: `https://mewtwo.online/api`
    *   *Note: Must be `https` and no port 5000 (Nginx handles that).*
3.  **Redeploy**:
    *   Go to **Deployments** tab.
    *   Click the **three dots** (...) next to the latest deployment -> **Redeploy**.
    *   (Or just push a new commit to GitHub).

**Done!** Your app is now fully secure and deployed.

### CI/CD
GitHub Actions are configured in `.github/workflows/ci.yml` to automatically:
- Lint and Test code.
- Verify Docker builds on every push to `main`.
