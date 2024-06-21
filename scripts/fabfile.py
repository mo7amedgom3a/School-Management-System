from fabric import Connection, task

# Define your servers
servers = [
    'server1.example.com',
    'server2.example.com',
    'server3.example.com'
]

# Define the SSH user
user = 'your_ssh_user'

@task
def deploy(c):
    for server in servers:
        # Connect to the server
        conn = Connection(host=server, user=user)
        
        # Pull latest changes from the repository
        conn.run('cd /path/to/your/repo && git pull origin main')
        
        # Install or update necessary packages
        conn.sudo('apt-get update && apt-get install -y mysql-server git')
        
        # Start MySQL service
        conn.sudo('service mysql start')
        
        # Apply migrations (if using migrations)
        conn.run('cd /path/to/your/repo && dotnet ef database update')

        print(f"Deployment completed on {server}")
