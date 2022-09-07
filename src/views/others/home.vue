<template>
  <nn-scroll-area color="royal-purple">
    <img
      class="background"
      :src="getAsset(weather)"
      :alt="getDescription(weather)"
    />
    <div class="content">
      <time v-if="time">{{ time.c.hour }}:{{ time.c.minute }}</time
      >
      <span>{{ degree }}°</span>
    </div>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { DateTime } from "luxon";

export default Vue.extend({
  data: () => ({
    time: undefined,
    degree: undefined,
    weather: undefined,
    weatherDic: {
      cloudy: "cloudy",
      dreary: "cloudy",
      fog: "cloudy",
      "partly cloudy": "cloudy",
      "intermittent clouds": "cloudy",
      "mostly cloudy": "cloudy",

      sunny: "sunny",
      "partly sunny": "sunny",
      "mostly sunny": "sunny",
      "hazy sunshine": "sunny",

      rain: "rainy",
      rainy: "rainy",
      showers: "rainy",
      "mostly cloudy with showers": "rainy",
      "partly sunny with showers": "rainy",

      thunderstorms: "stormy",
      stormy: "stormy",
      "mostly cloudy with thunder showers": "stormy",
      "partly sunny with thunder showers": "stormy",

      windy: "windy",

      sleet: "snowy",
      ice: "snowy",
      snow: "snowy",
      flurries: "snowy",
      snowy: "snowy",
      "rain and snow mixed": "snowy",
      "freezing rain": "snowy",
      "mostly cloudy with snow": "snowy",
      "partly sunny with flurries": "snowy",
      "mostly cloudy with flurries": "snowy",
    },
  }),
  methods: {
    getAsset(name) {
      return name ? this.getZapp(`img/home/${name}.png`) : "";
    },
    getDescription(name) {
      return name ? `${name} Weather` : "";
    },
  },
  mounted() {
    fetch("https://weatherdbi.herokuapp.com/data/weather/Spokane,WA", {
      mode: "cors",
    })
      .then(function (response) {
        return response.text();
      })
      .then((text) => {
        const request = JSON.parse(text);

        this.time = DateTime.now().setZone("UTC-7");
        this.degree = request.currentConditions.temp.f;
        this.weather =
          this.weatherDic[request.currentConditions.comment.toLowerCase()] ||
          "sunny";

        // console.log(request);
      })
      .catch(function (error) {
        log("Request failed", error);
      });
  },
});
</script>