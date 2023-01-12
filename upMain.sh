cd /var/www/html/Final-Year-Project
g++ main.cpp -lmariadbcpp -lcgicc -o main.cgi
sudo chmod +x main.cgi
sudo cp main.cgi /usr/lib/cgi-bin/
