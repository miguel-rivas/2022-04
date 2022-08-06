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

  "capital"
  "car"
  "carrousel"
  "cube"
  "css"

  "dollhouse"
  "drakkar"
  "drlogic-home"
  "drlogic-team"
  "drlogic-services"
  "drlogic-support"
  "drlogic-contact"
  "drlogic-404"
  "drlogic-testimonials"

  "evolution"

  "flat"
  "formability-401"
  "formability-404"
  "formability-500"
  "formability-demo"

  "gallery"
  "game"
  "grid"
  "grid-gallery"

  "hello"
  "house"
  "html"

  "links"
  "list"

  "map"
  "mineros"
  "minivan"

  "nanogrid-documentation"
  "nanogrid-home"
  "nanogrid-tests"

  "pills"
  "pixelpt-404"
  "pixelpt-500"
  "portfolio2017"
  "popkern-icons"
  "popkern-colors"
  "presidente-carnaval-filter"
  "presidente-carnaval-home"
  "presidente-verano-filter"
  "presidente-verano-loader"
  "presidente-destapa"

  "soundboard"
  "spirit"
  "stargazer"

  "threejs"
  "timeline"

  "ui"

  "voxel"

  "window"

  "xwing"
)

for f in ${files[@]}; do
  rm -r -f -v ${f}.html
  echo "<meta http-equiv='refresh' content='0; URL=index.html?route=${f}'>" >>${f}.html
done
