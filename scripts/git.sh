#!/bin/bash

# Ensure you're in the right directory
REPO_DIR="."
cd "$REPO_DIR" || exit

# Function to handle git pull, merge, and push
git_operations() {
    # Pull the latest changes from the remote repository
    echo "Pulling latest changes from remote repository..."
    git pull origin main

    # Check for merge conflicts
    if [ $? -ne 0 ]; then
        echo "Merge conflicts detected. Please resolve them and try again."
        exit 1
    fi

    # Add all changes to staging
    echo "Adding changes to staging..."
    git add .

    # Commit the changes
    echo "Committing changes..."
    git commit -m "Automated commit"

    # Push the changes to the remote repository
    echo "Pushing changes to remote repository..."
    git push origin main
}

# Execute the function
git_operations
