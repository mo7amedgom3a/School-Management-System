# Use the official ASP.NET Core runtime as a parent image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use the SDK image for building the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["SchoolManagement/SchoolManagement.csproj", "SchoolManagement/"]
RUN dotnet restore "SchoolManagement/SchoolManagement.csproj"
COPY . .
WORKDIR "/src/SchoolManagement"
RUN dotnet build "SchoolManagement.csproj" -c Release -o /app/build 

# Stage 2: Set up MySQL and the .NET application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Install MySQL client
RUN apt-get update && apt-get install -y mysql-client

# Copy the SQL script to the image
COPY SchoolDB.sql /docker-entrypoint-initdb.d/

# Set up the MySQL database
RUN service mysql start && \
    mysql -u root -e "CREATE DATABASE SchoolDB" && \
    mysql -u root SchoolDB < /docker-entrypoint-initdb.d/SchoolDB.sql



# Publish the app to the /app/publish directory
FROM build AS publish
RUN dotnet publish "SchoolManagement.csproj" -c Release -o /app/publish

# Use the base image to run the app
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SchoolManagement/bin/Debug/net8.0/SchoolManagement.dll"]