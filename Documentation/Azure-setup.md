# Azure Virtual Machine Setup

## Objective

The objective of this project was to create a cloud-hosted personal blog called **Paperbacks & Pitstops** using Microsoft Azure Infrastructure as a Service (IaaS). The server was configured manually using a Linux virtual machine to demonstrate practical server administration skills.

## Azure Environment

The virtual machine was created using Microsoft Azure under the Azure for Students subscription.

### Virtual Machine Configuration

| Setting              | Value                   |
| -------------------- | ----------------------- |
| Virtual Machine Name | ICT171-blog-server      |
| Operating System     | Ubuntu Server 24.04 LTS |
| Region               | Australia East          |
| VM Size              | Standard B1ls           |
| Public IP Address    | 20.248.241.196          |
| Virtual Network      | ICT171-blog-server-vnet |

## Server Access

Secure Shell (SSH) was used to remotely administer the Linux server from a Windows workstation.

Example SSH connection command:

```bash
ssh -i "ICT171-blog-server_key.pem" ICT171-blogserver-key@20.248.241.196
```

The private key generated during deployment was used for authentication rather than a password.

## Initial Server Verification

After connecting to the server, system information was verified using Linux commands.

Examples:

```bash
free -h
df -h
uname -a
```

These commands were used to confirm available memory, disk space and operating system details.

## Server Updates

The operating system package repository was updated before software installation.

```bash
sudo apt update
sudo apt upgrade -y
```

Keeping the server updated helps reduce security vulnerabilities and ensures the latest software packages are installed.

## Outcome

A functioning Ubuntu Server 24.04 virtual machine was successfully deployed within Microsoft Azure and configured for remote administration using SSH. This server became the foundation for hosting the Paperbacks & Pitstops website and supporting additional services such as HTTPS encryption and custom monitoring scripts.
