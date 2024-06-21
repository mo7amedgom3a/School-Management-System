# Ensure MySQL is installed and running
package { 'mysql-server':
  ensure => installed,
}

service { 'mysql':
  ensure    => running,
  enable    => true,
  require   => Package['mysql-server'],
}

# Ensure Git is installed
package { 'git':
  ensure => installed,
}

# Ensure necessary packages are installed and updated
package { ['build-essential', 'python3', 'python3-pip', 'python3-venv', 'libmysqlclient-dev']:
  ensure => installed,
}

# Update all packages
exec { 'update_packages':
  command => 'apt-get update && apt-get upgrade -y',
  path    => '/usr/bin',
  require => Package['build-essential'],
}
