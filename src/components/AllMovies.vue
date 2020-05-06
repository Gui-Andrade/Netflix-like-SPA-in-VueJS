<template>
    
  <div>
    <div class="movie" v-for="(movie, index) in listOfMovies" v-bind:key="index">
      <agile>
        <div v-for="(movie, index) in movie" @keyup.enter="displaymovie([movie.title, movie.poster, movie.video])" v-bind:key="index" @click="displaymovie([movie.title, movie.poster, movie.video])" class="slide" tabindex="0">
            <div class="movie__poster">
              <img :src="movie.poster" class="movie__poster-image" :alt="movie.title">
            </div>    
        </div>
      </agile>
    </div>
  </div>

</template>

<script>
import router from "@/router.js";
import MovieService from "@/services/MovieService.js";

export default {
  data() {
    return {
      movies: [],
      listOfMovies: []
    };
  },
  methods: {
    displaymovie([title, poster, video]) {
      router.push({ name: "video-page", params: { title, poster, video } });
    }
  },
  created() {
    MovieService.getMoviesDb()
      .then(response => {
        this.listOfMovies = response.data;
      })
      .catch(error => {
        console.log("There was an error: " + error.response);
      });
  }
};
</script>

<style lang="scss">
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  margin: 0 20px;
  margin-top: -50%;
  z-index: 20;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dots {
  z-index: 20;
}
.agile__dot {
  margin: 0 10px;
  min-height: 20px;
  color: gray;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  display: -webkit-box;
  display: flex;
  height: auto;
  overflow: hidden;
  -webkit-box-pack: center;
  justify-content: center;
  &:focus {
    .movie__poster-image {
      border: 2px solid #ffd700;
    }
  }
}

.slide h3 {
  font-size: 32px;
  font-weight: 300;
}

.slide--1 {
  background-color: #f1c40f;
}

.slide--2 {
  background-color: #e67e22;
}

.slide--3 {
  background-color: #e74c3c;
}

.slide--4 {
  background-color: #9b59b6;
}

.slide--5 {
  background-color: #3498db;
}

.slide--6 {
  background-color: #2ecc71;
}

.movie {
  &__poster {
    &-link {
      cursor: pointer;
    }
    &-image {
      cursor: pointer;
      margin: 40px;
    }
  }
}
</style>

