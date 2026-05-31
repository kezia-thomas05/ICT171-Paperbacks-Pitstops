# SSL/TLS Configuration

## Objective

To improve website security and provide encrypted communication between users and the web server, HTTPS was implemented using Let's Encrypt SSL certificates.

## Initial Challenges

The server initially experienced memory limitations due to the Azure Standard B1ls virtual machine having only 0.5 GB of RAM.

During installation of Certbot and Apache-related packages, package installation processes were terminated because insufficient memory was available.

Memory utilisation was checked using:

```bash
free -h
```

## Swap File Creation

To overcome the memory limitation, a 2 GB swap file was created.

Commands used:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Verification:

```bash
free -h
```

The swap file provided additional virtual memory and allowed package installation to complete successfully.

## Certbot Installation

Certbot was installed using the Ubuntu package manager.

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

## DNS Verification

Prior to certificate generation, DNS records were verified using:

```bash
nslookup paperbacks-and-pitstops.com
nslookup www.paperbacks-and-pitstops.com
```

Both domains were required to resolve correctly to the Azure virtual machine.

## Certificate Generation

A Let's Encrypt SSL certificate was generated using Certbot.

```bash
sudo certbot --nginx
```

The following domains were included:

* paperbacks-and-pitstops.com
* [www.paperbacks-and-pitstops.com](http://www.paperbacks-and-pitstops.com)

## Result

Certbot successfully generated and installed the SSL certificate.

Certificate location:

```text
/etc/letsencrypt/live/paperbacks-and-pitstops.com/
```

Automatic renewal was also configured by Certbot.

## Verification

HTTPS functionality was verified by accessing:

https://paperbacks-and-pitstops.com

and

https://www.paperbacks-and-pitstops.com

The browser displayed a secure padlock icon, confirming successful SSL deployment.

## Outcome

HTTPS encryption was successfully implemented, ensuring secure communication between visitors and the server while improving website professionalism and security.
