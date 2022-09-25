<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  aside.texture
  main
    section#woods
      .contrain
        span#plane
        #base
          img.house(:src="getZapp(`img/journey/pt_base.png`)")
          img.road.below(:src="getZapp(`img/journey/pt_road.png`)")

    section#mountains
      .contrain
        img.mountain_01(:src="getZapp(`img/journey/pt_mountain.png`)")
        img.mountain_02(:src="getZapp(`img/journey/pt_mountain.png`)")

    section#sea
      .contrain
        img.boat_02(:src="getZapp(`img/journey/pt_boat_02.png`)")
        img.turtle(:src="getZapp(`img/journey/pt_turtle.png`)")
        img.whirlpool(:src="getZapp(`img/journey/pt_whirlpool.png`)")
        #island
          img.boat_01(:src="getZapp(`img/journey/pt_boat_01.png`)")
          img.house_01(:src="getZapp(`img/journey/pt_house.png`)")
          img.house_02(:src="getZapp(`img/journey/pt_house.png`)")
          img.house_03(:src="getZapp(`img/journey/pt_house.png`)")
          img.house_04(:src="getZapp(`img/journey/pt_house.png`)")

    section#sky
      #cloudBarrier
      .contrain
        img.cloud_01(:src="getZapp(`img/journey/pt_cloud_01.png`)")
        img.cloud_02(:src="getZapp(`img/journey/pt_cloud_02.png`)")
        img.cloud_03(:src="getZapp(`img/journey/pt_cloud_01.png`)")

    section#land
      #cave
      .contrain
        img.umbrella_01(:src="getZapp(`img/journey/pt_umbrella_01.png`)")
        img.umbrella_02(:src="getZapp(`img/journey/pt_umbrella_02.png`)")
        img.umbrella_03(:src="getZapp(`img/journey/pt_umbrella_01.png`)")
        img.umbrella_04(:src="getZapp(`img/journey/pt_umbrella_02.png`)")
</template>