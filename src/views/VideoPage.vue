<template>
    <div class="movie">
        <h2 class="movie__title">
            {{this.title}}
        </h2>
        <div class="movie__poster" v-if="posterVisible">
            <img :src="this.poster" alt="">
            <button class="movie__play-bt" v-if="unplayed" @click="playVideo"><img src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png" alt="Play Video Button"></button>
        </div>
        <div class="video__player" v-if="!posterVisible">
          <video-player class="video-js vjs-theme-city" :options="videoOptions"/>
        </div>
    </div>
</template>

<script>
import router from "@/router.js";
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  components: {
    VideoPlayer
  },
  props: ["title", "poster", "video"],
  data() {
    return {
      posterVisible: true,
      unplayed: true,
      videoOptions: {
        autoplay: true,
        controls: false,

        controlBar: {
          fullscreenToggle: false
        },
        sources: [
          {
            src: this.video,
            type: "video/mp4"
          }
        ]
      }
    };
  },
  methods: {
    playVideo() {
      (this.posterVisible = false),
        (this.videoOptions.autoplay = true),
        (this.unplayed = false);
    },
    displaymovie([title, poster, video]) {
      router.push({ name: "video-page", params: { title, poster, video } });
    }
  }
};
</script>

<style lang="scss" scoped>
.video__player {
  width: 600px;
  height: 340px;
}
.movies {
  li {
    list-style-type: none;
  }
}
.movie {
  &__poster {
    position: relative;
    cursor: pointer;
    height: auto;
    /* max-height: 600px; */
  }
  &__play-bt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    background: white;

    border: none;
    background: #ffd700;
  }
  &__title {
    color: #fff;
  }
}
</style>