ICT171 Cloud Server Project — Paperbacks & Pitstops

Student Name: Kezia Mariam Thomas
Student Number: 35117059
Unit: ICT171 – Introduction to Server Environments and Architectures
Project: Cloud-hosted web server using Microsoft Azure (IaaS)

Live System:
Website URL: https://www.paperbacks-and-pitstops.com
Server IP Address: 20.248.241.196
Cloud Provider: Microsoft Azure
Operating System: Ubuntu Server 24.04 LTS
Web Server: Nginx
SSL Provider: Let’s Encrypt (Certbot)

Project Overview
This project demonstrates the deployment of a cloud-hosted web server using Infrastructure as a Service (IaaS) on Microsoft Azure.

The system hosts a personal blog website and includes server administration, DNS configuration, SSL encryption, and system monitoring using a custom Bash script.

Key Features
Nginx web server deployment on Ubuntu VM
Domain name configuration using DNS A records
HTTPS encryption using Let’s Encrypt (Certbot)
Custom server monitoring script (system-status.sh)
Version control using Git and GitHub
Manual deployment workflow from GitHub repository to server

Server Architecture
Azure Virtual Machine (Ubuntu 24.04 LTS)
Nginx Web Server
GitHub repository for version control
DNS A records pointing domain to Azure public IP
Certbot for SSL/TLS certificate management

Deployment Process
1. System Update
sudo apt update && sudo apt upgrade -y
2. Install Nginx
sudo apt install nginx -y

Check service:

systemctl status nginx
3. Deploy Website Files

Website files were transferred manually from the GitHub repository to the server:

sudo cp index.html /var/www/html/
sudo cp style.css /var/www/html/
sudo cp script.js /var/www/html/
4. Set File Permissions
sudo chown -R www-data:www-data /var/www/html
5. DNS Configuration
Domain configured using A records
Domain points to Azure VM public IP (20.248.241.196)
DNS propagation verified via nslookup
6. Enable HTTPS (SSL/TLS)
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d paperbacks-and-pitstops.com -d www.paperbacks-and-pitstops.com

SSL certificate is automatically managed and renewed by Certbot.

System Monitoring Script

File location:
Documentation/system-status.sh

Purpose

The script provides a snapshot of server health, including:

Uptime
Memory usage
Disk usage
Active users
Nginx service status
Execution
bash Documentation/system-status.sh

OR (if executable):

chmod +x system-status.sh
./system-status.sh

SSL/TLS Configuration
SSL provided by Let’s Encrypt (Certbot)
HTTPS successfully enabled for:
https://paperbacks-and-pitstops.com
https://www.paperbacks-and-pitstops.com

Certificate is automatically renewed via system timer.

DNS Configuration Evidence
A records configured for domain mapping
Verified via:
nslookup paperbacks-and-pitstops.com

GitHub Repository

https://github.com/kezia-thomas05/ICT171-Paperbacks-Pitstops

Repository Features:
Full version control of website source code
Structured documentation folder
Iterative commits during development

References
Nginx Documentation: https://nginx.org/en/docs/
Certbot Documentation: https://certbot.eff.org/
Microsoft Azure Docs: https://learn.microsoft.com/azure/
