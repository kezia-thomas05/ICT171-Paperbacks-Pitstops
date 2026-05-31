# Website Deployment

## Objective

The purpose of this stage was to deploy the Paperbacks & Pitstops website from GitHub to the Azure-hosted Ubuntu web server.

## Source Code Repository

The website source code was maintained using Git and GitHub.

Repository:

https://github.com/kezia-thomas05/ICT171-Paperbacks-Pitstops

Version control allowed all website changes to be tracked and documented throughout development.

## Website Components

The website consists of three primary files:

| File       | Purpose                       |
| ---------- | ----------------------------- |
| index.html | Website structure and content |
| style.css  | Website styling and layout    |
| script.js  | Interactive functionality     |

## Cloning the Repository

The GitHub repository was cloned onto the Ubuntu server.

```bash
git clone https://github.com/kezia-thomas05/ICT171-Paperbacks-Pitstops.git
```

## Deployment Directory

The Nginx web server was configured to serve content from:

```text
/var/www/html
```

This was verified using:

```bash
sudo nginx -T | grep root
```

## Updating Website Content

Website files were copied from the repository directory into the web server document root.

```bash
sudo cp index.html /var/www/html/
sudo cp style.css /var/www/html/
sudo cp script.js /var/www/html/
```

## Configuration Validation

The Nginx configuration was tested before reloading the service.

```bash
sudo nginx -t
```

Expected output:

```text
syntax is ok
test is successful
```

## Applying Changes

The web server was reloaded to apply updates.

```bash
sudo systemctl reload nginx
```

## Verification

The deployment was verified by accessing:

https://paperbacks-and-pitstops.com

The website displayed the latest version of the Paperbacks & Pitstops homepage hosted on the Azure virtual machine.

## Outcome

The GitHub repository was successfully integrated into the deployment workflow. Website updates could be committed locally, pushed to GitHub, pulled onto the server, and deployed to the production environment.
