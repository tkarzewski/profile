# TODO Doc


# ===== get version from package.json or param =====
profile_version=$1
if [ -z $1 ]; then
  profile_version=$(grep '"version":' ./package.json |cut -d: -f2|tr -d ','|tr -d ' '|tr -d '"')
fi
echo "Profile Version is $profile_version\n"


# ===== delete old dist folder =====
echo "===== Delete old dist folder ====="
rm -rf ./dist


# ===== build version =====
echo "===== Build $profile_version with --prod --base-href / ====="
ng build --prod --base-href /


# ===== check for failure =====
returnValue=$?
if [ $returnValue != 0 ];then
   echo "===== Angular Build failed :(  ====="
   exit
fi


# ===== replace base-href =====
echo "===== Replace Tag base-href with / ====="
sed -ri 's/(base href=")[^"]+"/\1\/"/' ./dist/index.html


# ===== zip dist folder =====
echo "===== Create ZIP-File with contents of dist-Folder ====="
cd dist/
zip -r ../dist-$profile_version.zip *
returnValue=$?
cd ..


# ssh u72846928@life-is-a-book.de 'mkdir /karzewski_workdir'
# copy dist.zip to webspace '/karzewski_workdir'
# empty 'karzewski'-dir
# scp foobar.txt u72846928@life-is-a-book.de:/karzewski_workdir
# unzip dist.zip into 'profile'-dir


# ===== delete uipped dist file =====
echo "===== Delete uipped dist file ====="
rm -f ./dist-$profile_version.zip


return $returnValue
