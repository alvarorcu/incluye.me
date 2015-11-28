base:
	sudo apt-get update & sudo apt-get upgrade -y
	sudo apt-get install python-software-properties
	sudo apt-get install vim

apache:
	sudo apt-get install apache2

php:
	sudo add-apt-repository ppa:ondrej/php5-5.6
	sudo apt-get update
	sudo apt-get install -y php5 php5-pgsql 
	
