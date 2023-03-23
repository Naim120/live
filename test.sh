sudo apt install wget
wget https://launchpad.net/ubuntu/+archive/primary/+sourcefiles/ffmpeg/7:5.1.1-1ubuntu2.1/ffmpeg_5.1.1.orig.tar.xz
tar -xf ffmpeg_5.1.1.orig.tar.xz
cd ffmpeg_5.1.1
./configure
make
sudo make install
ffmpeg --version
