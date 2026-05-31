# Server Monitoring Script

## Objective

The purpose of this script was to monitor the health and performance of the Azure virtual machine hosting the Paperbacks & Pitstops website.

It provides real-time system information such as CPU usage, memory usage, disk usage, and system uptime.

## Script Location

The monitoring script was stored in the project repository under:

```text id="m2k9vn"
Documentation/system-status.sh
```

## Script Content

The script contains basic system monitoring commands:

```bash id="q7n2pd"
#!/bin/bash

echo "===== ICT171 SERVER STATUS REPORT ====="

echo "Date: $(date)"
echo ""

echo "Uptime:"
uptime
echo ""

echo "Memory Usage:"
free -h
echo ""

echo "Disk Usage:"
df -h
echo ""

echo "Active Users:"
who
echo ""

echo "Top Processes:"
top -b -n 1 | head -n 10
echo ""

echo "===== END REPORT ====="
```

## Execution Permissions

Before running the script, execution permissions were granted:

```bash id="v4k9lx"
chmod +x system-status.sh
```

## Running the Script

The script can be executed using:

```bash id="z9k3mp"
./system-status.sh
```

## Output Example

The script generates a readable system report similar to:

```text id="r3t8qa"
===== SYSTEM STATUS REPORT =====
Date: Sat May 30 23:00:00 UTC 2026

Uptime:
 23:00:00 up 1 day, 3:45, 1 user, load average: 0.00, 0.01, 0.05

Memory Usage:
 total used free ...

Disk Usage:
 /dev/root 29G 2.6G 26G ...

Active Users:
 ICT171-blogserver-key pts/0

Top Processes:
 ...
```

## Purpose in Project

This script demonstrates basic server administration and monitoring skills. It provides a quick snapshot of server performance and can be used for troubleshooting or verifying system health.

## Outcome

A custom monitoring script was successfully implemented and integrated into the project repository, supporting ongoing server maintenance and system visibility.
