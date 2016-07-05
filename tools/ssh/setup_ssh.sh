# step 1: on your local machine
ssh-keygen -t rsa -b 2048 -f ~/.ssh/id_rsa -C "Comment about your key goes here."
# ssh-kegen is normally install on Mac OS


# setp 2: #ssh login as root first to create the ~/.ssh folder 
ssh root@162.249.4.230 -p 7822
# when you type the complex password, pause 2s after each character

# step 3: copy the local public key to server ~/.ssh folder
ssh-keygen -t rsa -b 2048 -f ~/.ssh/id_rsa -C "Comment about your key goes here."

# step 4: ssh login
ssh root@162.249.4.230 -p 7822
# -p is port number, if don't specify root@, ssh will try to login as your current user name

