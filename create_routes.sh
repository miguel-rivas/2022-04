cd dist

files=(
  "2014-home"
  "2014-projects"
  "2014-contact"
  "2016-home"
  "2018-home"
  "2018-presidente"
  "2018-drlogic"
  "2018-apap"
  "2018-bpr"

  "2022-projects"
  "2022-statistics"
  "2022-images"
  "2022-videos"
  "2022-resume"

  "audio2"

  "car"
  "carrousel"
  "cube"
  "css"

  "drlogic-home"
  "drlogic-team"
  "drlogic-services"
  "drlogic-support"
  "drlogic-contact"
  "drlogic-404"
  "drlogic-testimonials"

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

  "links"
  "list"

  "map"
  "mineros"
  "minivan"

  "pills"
  "portfolio2017"

  "popkern-icons"
  "popkern-colors"

  "presidente-carnaval-filter"
  "presidente-carnaval-home"

  "soundboard"
  "spirit"
  "stargazer"

  "timeline"
  "threejs"

  "ui"

  "window"

  "xwing"
)

for f in ${files[@]}; do
  rm -r -f -v ${f}.html
  echo "<meta http-equiv='refresh' content='0; URL=index.html?route=${f}'>" >>${f}.html
done
