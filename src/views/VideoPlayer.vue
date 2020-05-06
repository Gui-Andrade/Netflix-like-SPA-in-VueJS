<template>
    <div>
      <video-player class="video-js vjs-theme-city" :options="videoOptions"/>
      <button class="movie__play-bt"><img src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-pause.png" alt="Pause Video Button"></button>
    </div>
    
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: false,

        controlBar: {
          fullscreenToggle: false
        },
        sources: [
          {
            src: this.selectedVideo,
            type: "video/mp4"
          }
        ]
      },
      videoElement: null,
      paused: null
    };
  }
};
</script>

<style lang="scss" scoped>
.movies {
  li {
    list-style-type: none;
  }
}
.movie {
  &__poster {
    position: relative;
    cursor: pointer;
  }
  &__play-bt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  &__title {
    color: #fff;
  }
}

#instructions {
  max-width: 100vw;
  text-align: left;
  margin: 30px auto;
}

.video-js .vjs-control-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
</style>