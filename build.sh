#!/bin/bash
echo "**********************************************************"
echo "* Installing dev dependencies for transpiling typescript *"
echo "**********************************************************"
echo ""
#npm install --only=dev
echo "Removing old build folder"
rm -R ./build
echo "********** Done installing dev dependencies **************"
echo ""
echo "**********************************************************"
echo "*                Transpiling typescript                  *"
echo "**********************************************************"
echo ""
npm run tsc
echo "****************** Done transpiling **********************"
echo ""
echo "**********************************************************"
echo "*                Preparing build folder                  *"
echo "**********************************************************"
echo ""
bash -c  "cp -rf ./resources ./build"
bash -c  "cp ./package.json ./build/package.json"
# bash -c  "cp ./server.cert ./build/server.cert"
# bash -c  "cp ./server.key ./build/server.key"
echo ""
echo ""
echo "**********************************************************"
echo "*                Installing build dependencies           *"
echo "**********************************************************"
cd build
# npm install --only=prod
npm install
echo "**********************************************************"
echo "*********************** Finished *************************"
echo "**********************************************************"
