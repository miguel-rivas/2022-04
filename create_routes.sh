cd dist

files=("dollhouse" "game" "stargazer" "soundboard" "projects" "list" "statistics" "github" "gallery" "images" "videos" "ui" "colors" "icons" "grid" "grid-gallery" "timeline" "2014" "2014-home" "2014-projects" "2014-contact" "2016" "2018" "2018-home" "2018-presidente" "2018-drlogic" "2018-apap" "2018-bpr" "2022" "threejs" "cube" "spirit" "car" "xwing" "drakkar" "portfolio2017" "audio2" "carrousel" "css" "house" "pills" "minivan" "window" "resume")

for f in ${files[@]}; do
  rm -r -f -v ${f}.html
  echo "<meta http-equiv='refresh' content='0; URL=index.html?route=${f}'>" >> ${f}.html
done