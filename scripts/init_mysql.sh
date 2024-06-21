#!/bin/bash

# Check if MySQL is installed
if ! command -v mysql &> /dev/null; then
    echo "MySQL is not installed. Please install it and try again."
    exit 1
fi

# Start MySQL service
echo "Starting MySQL service..."
sudo service mysql start

# Check MySQL service status
SERVICE_STATUS=$(sudo service mysql status | grep 'Active:' | awk '{print $2}')

if [ "$SERVICE_STATUS" == "active" ]; then
    echo "MySQL service started successfully."
else
    echo "Failed to start MySQL service."
    exit 1
fi
