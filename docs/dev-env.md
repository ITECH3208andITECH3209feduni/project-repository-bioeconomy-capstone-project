# Development Environment Setup
## VMware Workstation Player

An ideal utility for running a single virtual machine on a Windows or Linux PC.

Assumptions:
- Windows OS

Download VMware here: https://www.vmware.com/go/getplayer-win

Download ubuntu-22.04.3-live-server OS here: https://old-releases.ubuntu.com/releases/22.04/ubuntu-22.04.3-live-server-amd64.iso

VMware Settings:
- Memory: 8GB
- CPU: 4
- Hard Disk: 60GB
- Network Adapter: NAT
- Network Adapter 2: Host-only

Ubuntu Installation guide: https://ubuntu.com/server/docs/basic-installation
Take note of your credentials.

## Docker

Platform designed to help developers build, share, and run container applications.

Assumptions:
- Ubuntu OS

docker and docker-compose Installation guide: https://docs.docker.com/engine/install/ubuntu/

## Integrating VSCode with VMware Virtual Machine

- Install VSCode Extension: Remote Explorer
- Create a public/private SSH key pair inside the virtual machine

```bash
#Obtain VM Ip Address. Take note of the IP Addresses as there many network interfaces.  
ip a | grep inet

#Open Windows command prompt. Generate public/private key pair using the command below.
ssh-keygen #keep pressing enter until files are generated. Take note of the file location for the public and private keys. Copy the contents of the public key.

#note: file names are as follows
$public_key_file_name = "id_ed25519.pub"
$private_key_file_name = "id_ed25519"

#Execute SSH using the below command.
ssh $username@$ipaddress #eg. ssh migz@192.168.59.128

#Save the public key into the VM.
echo -n "$public_key_contents" > ~/.ssh/authorized_keys #note: right click in windows command prompt to paste the contents from the clip board.

#Ensure that the authorized_keys file has the correct permission.
chmod 600 ~/.ssh/authorized_keys

#Validate authorized_keys permissions.
ls -la ~/.ssh/authorized_keys #it should look like this: -rw------- 
```
- At the Remote Explorer tab, click on the + sign to add a remote host.
```bash
#Enter SSH command on the dialog box.
ssh $username@$ipaddress #eg. ssh migz@192.168.59.128
#Then press enter.
```
## Integrating VSCode with Github

```bash
#Copy the private key from windows to linux. Type the following commands in the VSCode terminal.
echo -n "$private_key_contents" > ~/.ssh/id_ed25519

#Ensure that the id_ed25519 file has the correct permission.
chmod 600 ~/.ssh/id_ed25519

#Validate id_ed25519 permissions.
ls -la ~/.ssh/id_ed25519 #it should look like this: -rw------- 

#Install Git command
apt update -y && apt install -y git

#Validate the Git installation
git --version

#Copy the public key and store it in Github
cat ~/.ssh/authorized_keys

#Follow Github documentations for storing SSH public keys. Skip step 1 as you have already copied the public key.

#https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows

#Clone the repository
git clone git@github.com:ITECH3208andITECH3209feduni/project-repository-bioeconomy-capstone-project.git
```


