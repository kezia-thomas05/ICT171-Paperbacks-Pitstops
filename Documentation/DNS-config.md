# DNS Configuration

## Objective

To make the website accessible through a memorable domain name rather than an IP address, a domain was purchased and configured using Crazy Domains.

## Domain Name

The domain selected for this project was:

paperbacks-and-pitstops.com

The domain reflects the theme of the personal blog, which focuses on books, music, poetry and Formula 1 content.

## DNS Records

The Azure virtual machine was assigned the following public IP address:

20.248.241.196

DNS A records were configured within the Crazy Domains DNS management console.

### Root Domain Record

| Type | Host | Value          |
| ---- | ---- | -------------- |
| A    | @    | 20.248.241.196 |

### WWW Record

| Type | Host | Value          |
| ---- | ---- | -------------- |
| A    | www  | 20.248.241.196 |

## DNS Propagation

After updating the DNS records, propagation time was required before the domain correctly resolved to the Azure virtual machine.

The DNS configuration was verified using:

```bash
nslookup paperbacks-and-pitstops.com
nslookup www.paperbacks-and-pitstops.com
```

Expected result:

```text
paperbacks-and-pitstops.com -> 20.248.241.196
www.paperbacks-and-pitstops.com -> 20.248.241.196
```

## Verification

Successful DNS resolution was confirmed when the website became accessible through:

https://paperbacks-and-pitstops.com

and

https://www.paperbacks-and-pitstops.com

rather than requiring direct access via the server IP address.

## Outcome

The domain name was successfully linked to the Azure virtual machine, allowing visitors to access the website using a professional and memorable web address.
