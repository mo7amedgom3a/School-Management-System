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

# Publish the app to the /app/publish directory
FROM build AS publish
RUN dotnet publish "SchoolManagement.csproj" -c Release -o /app/publish

# Use the base image to run the app
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SchoolManagement.dll"]