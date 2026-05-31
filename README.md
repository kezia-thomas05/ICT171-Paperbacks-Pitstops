ICT171 Cloud Server Project — Paperbacks & Pitstops

Student Details:
Name: Kezia Mariam Thomas
Student Number: 35117059
Unit: ICT171 - Introduction to Server Environments and Architectures
Project: Cloud-hosted web server using Azure VM + Nginx

Live System Information
Website URL: https://www.paperbacks-and-pitstops.com
Server IP Address: 20.248.241.196
Cloud Provider: Microsoft Azure
Operating System: Ubuntu Server

Project Overview

This project demonstrates the deployment and configuration of a cloud-based web server using Infrastructure as a Service (IaaS). The server hosts a custom website and includes system monitoring functionality through a Bash script.

Key features include:

Nginx web server configuration
Domain name configuration via DNS
SSL/TLS encryption using HTTPS
Server monitoring script (system-status.sh)
GitHub-based version control and documentation

Server Architecture
Azure Virtual Machine (Ubuntu)
Nginx Web Server
GitHub repository for version control
Domain name mapped via DNS (A record)

Encrypt SSL certificate for HTTPS
etup Instructions (Rebuild Guide)
1. Update system
sudo apt update && sudo apt upgrade -y
2. Install Nginx
sudo apt install nginx -y

Check service:

systemctl status nginx
3. Configure firewall
sudo ufw allow 'Nginx Full'
sudo ufw enable
4. Deploy website files
cd /var/www/html
sudo git clone https://github.com/kezia-thomas05/ICT171-Paperbacks-Pitstops.git

OR manually copy:

sudo cp -r ~/ICT171-Paperbacks-Pitstops/* /var/www/html/
5. Set permissions
sudo chown -R www-data:www-data /var/www/html
6. Configure DNS
Create an A record
Point domain to Azure VM public IP
Wait for propagation
7. Enable HTTPS (SSL/TLS)
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d paperbacks-and-pitstops.com

Auto-renew test:

sudo certbot renew --dry-run
System Monitoring Script
File location:
Documentation/system-status.sh

Purpose:
This script displays system health information including CPU usage, memory usage, disk usage, uptime, and Nginx service status.

How to run:
bash Documentation/system-status.sh
Example output:


SSL/TLS Configuration
SSL provided by Let’s Encrypt (Certbot)
HTTPS enabled for domain:
https://paperbacks-and-pitstops.com
Certificate is valid and verified (no browser warnings)

Evidence:


DNS Configuration
Domain configured using A record
Points to Azure VM public IP
Verified via browser access


GitHub Repository

https://github.com/kezia-thomas05/ICT171-Paperbacks-Pitstops

Features:

Iterative commits over development period
Full project documentation
Script and deployment instructions


References
Nginx Documentation: https://nginx.org/en/docs/
Certbot: https://certbot.eff.org/
Microsoft Azure Docs: https://learn.microsoft.com/azure/ICT171-Paperbacks-Pitstops


