cd dist

files=(
  "2014"
  "2014-home"
  "2014-projects"
  "2014-contact"
  "2016"
  "2018"
  "2018-home"
  "2018-presidente"
  "2018-drlogic"
  "2018-apap"
  "2018-bpr"
  "2022"

  "audio2"

  "car"
  "carrousel"
  "colors"
  "cube"
  "css"

  "dollhouse"
  "drakkar"

  "formability-401"
  "formability-404"
  "formability-500"
  "formability-demo"
    
  "gallery"
  "game"
  "grid"
  "grid-gallery"

  "house"

  "icons"
  "images"

  "links"
  "list"
  "locations"
  
  "mineros"
  "minivan"

  "pills"
  "portfolio2017"
  "projects"

  "resume"
  
  "soundboard"
  "spirit"
  "stargazer"
  "statistics"
  
  "timeline"
  "threejs"

  "ui"

  "videos"
  
  "window"

  "xwing"
)

for f in ${files[@]}; do
  rm -r -f -v ${f}.html
  echo "<meta http-equiv='refresh' content='0; URL=index.html?route=${f}'>" >> ${f}.html
done