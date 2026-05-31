#!/bin/bash

# ICT171 Server Status Script
# Displays basic information about the server

echo "================================="
echo " ICT171 SERVER STATUS REPORT"
echo "================================="

echo ""
echo "Current Date and Time:"
date

echo ""
echo "Server Uptime:"
uptime

echo ""
echo "Memory Usage:"
free -h

echo ""
echo "Disk Usage:"
df -h

echo ""
echo "Nginx Status:"
systemctl status nginx --no-pager | head -n 5

echo ""
echo "Report Complete"