# http://askubuntu.com/questions/594656/how-to-install-the-latest-versions-of-nodejs-and-npm-for-ubuntu-14-04-lts


#step 1: To install NPM

sudo apt-get install npm
#step 2: Then for Node

sudo npm cache clean -f
sudo npm install -g n
sudo n 6.2.2  // here is the version what you want.. 

#step 3 : update npm
curl -L https://www.npmjs.com/install.sh | sh
#https://github.com/npm/npm

