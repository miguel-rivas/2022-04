echo "Getting ready for deployment"
./create-routes.sh
git push git@github.com:miguel-rivas/matryoshka.git --delete gh-pages
npm run build
cd dist || exit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/matryoshka.git master:gh-pages