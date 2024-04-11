!#/bin/bash

#install docker && docker-compose, if not installed
if ! command -v docker &> /dev/null; then
	echo "Docker not found. Installing..."
	sudo apt update
	sudo apt install -y docker.io
	sudo usermod -aG docker $USER
	echo "Docker installed successfully."
else
	echo "Docker already installed"
fi

if ! command -v docker-compose &> /dev/null; then
	echo "Docker-compose not found. Installing..."
	sudo apt install -y docker-compose
	echo "Docker-compose installed successfully."
else
	echo "Docker-compose already installed"
fi

sudo systemctl start docker

docker-compose up -d --build 
