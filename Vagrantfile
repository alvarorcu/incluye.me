Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "192.168.33.30"
  config.vm.provision "shell", path: "provision.sh"
end
