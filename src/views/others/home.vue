<template>
  <nn-scroll-area nn-color="royal-purple">
    <img
      v-if="weather"
      class="background"
      :src="getAsset(weather)"
      :alt="getDescription(weather)"
    />
    <div class="content">
      <time class="time" v-if="time"
        >{{ time.c.hour }}:{{ time.c.minute < 10 ? "0" : ""
        }}{{ time.c.minute }}
        <small class="date" v-if="time && weekday">
          {{ weekday }}, {{ time.c.month }}/{{ time.c.day }}</small
        >
      </time>

      <span v-if="degree" class="temperature"
        >{{ degree }}<small>°f</small></span
      >
    </div>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { DateTime } from "luxon";

export default Vue.extend({
  data: () => ({
    interval: undefined,
    time: undefined,
    degree: "--",
    weather: "warm",
    weekday: "--",
    weatherDic: {
      cloudy: "cloudy",
      dreary: "cloudy",
      fog: "cloudy",
      "partly cloudy": "cloudy",
      "intermittent clouds": "cloudy",
      "mostly cloudy": "cloudy",

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
      return this.getZapp(`img/home/${name}.png`);
    },
    getDescription(name) {
      return `${name} Weather`;
    },
    getTime() {
      this.time = DateTime.now().setZone("UTC-7");
    },
    getData() {
      fetch("https://weatherdbi.herokuapp.com/data/weather/Spokane,WA", {
        mode: "cors",
      })
        .then(function (response) {
          return response.text();
        })
        .then((text) => {
          const request = JSON.parse(text);

          this.degree = request.currentConditions.temp.f;
          this.weather =
            this.weatherDic[request.currentConditions.comment.toLowerCase()] ||
            "warm";
          this.weekday = request.next_days[0].day;

          const isNightTime = this.time.c.hour < 6 || this.time.c.hour > 19;

          if (this.weather === "warm" && isNightTime) {
            this.weather = "night";
          }

          const isRegularWeather =
            this.weather === "warm" ||
            this.weather === "night" ||
            this.weather === "cloudy";

          const isWindy = request.currentConditions.wind.mile >= 21;
          const isCold = request.currentConditions.temp.f <= 65;

          if (isRegularWeather) {
            if (isWindy) {
              this.weather = "windy";
            } else if (isCold) {
              this.weather = "cold";
            }
          }
        })
        .catch(function (error) {
          console.log("Request failed", error);
        });
    },
  },
  mounted() {
    this.getTime();
    this.getData();
    this.interval = {
      weather: setInterval(() => this.getData(), 5000),
      time: setInterval(() => this.getTime(), 1000),
    };
  },
  beforeDestroy() {
    clearInterval(this.interval.weather, this.interval.time);
  },
});
</script>