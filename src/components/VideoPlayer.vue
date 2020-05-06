<template>
    <div class="video-container">
        <video @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused" id="videoElement" ref="videoPlayer" class="video-js"></video>

        <button class="play-bt vd-bts" v-if="showPlay" @click="play"><img src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png" alt="Play Video Button"></button>
        <button class="pause-bt vd-bts" v-if="!showPlay" @click="pause"><img src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-pause.png" alt="Pause Video Button"></button>
    </div>
</template>

<script>
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null,
      showPlay: false
    };
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  methods: {
    pauseVideo() {
      this.player.pause();
    },
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    play() {
      this.videoElement.play();
      this.showPlay = false;
    },
    pause() {
      this.videoElement.pause();
      this.showPlay = true;
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  computed: {
    playing() {
      return !this.paused;
    }
  }
};
</script>

<style lang="scss">
.video-container {
  min-width: 600px;
  height: auto;
  position: relative;
}

.vd-bts {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background-color: transparent;
  &:focus {
    background-color: #ffd700;
  }
}
.play-bt {
  opacity: 1;
}
.video-js {
  width: 600px;
  height: 340px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    .vd-bts {
      opacity: 1;
    }
  }
}
</style>
