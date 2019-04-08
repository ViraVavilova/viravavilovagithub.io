<template>
    <div>
        <div class="container" :class= "theme">
            <app-themes @themeWasReset = "newTheme"></app-themes>
            <app-info :currentStation = "currentStation"
                      :tracks = "tracks"
                        ></app-info>
            <app-volume></app-volume>
            <div class="main">
                <h1>Radio Player</h1>
                <div class="panel"> {{currentStation.name}}</div>
                <button @click="playing">Play / Stop</button>
                <div v-if="currentStation.name">
                    <div v-if="play ">playing..</div>
                    <div v-if="!play">stopped..</div>
                </div>
                <div>
                    <button @click="addToFavourite">Add / Remove as favourite</button>
                </div>
            </div>
            <app-select-station :stations="stations"
                                @selectedValue = "selectCurrentStation"
                                ></app-select-station>
            <app-add-station @newStationWasAdded = "addStation"></app-add-station>
        </div>
    </div>
</template>

<script>
    import Themes from './components/Themes.vue';
    import Info from './components/Info.vue';
    import Volume from './components/Volume.vue';
    import SelectStation from './components/SelectStation.vue';
    import AddStation from './components/AddNewStation.vue';

    export default {
        data(){
          return{
              theme: "noneTheme",
              stations:[
                  {
                      name:"100,8",
                      type: "rock",
                      isFavourite: true,
                  },
                  {
                      name:"101,8",
                      type: "jazz",
                      isFavourite: true
                  },
                  {
                      name:"109,4",
                      type: "blues",
                      isFavourite: false
                  },
                  {
                      name:"100,48",
                      type: "blues",
                      isFavourite: true
                  },
              ],
              tracks:{
                  rockTracks:["First Rock track","Second Rock track","Third Rock track"],
                  jazzTracks:["First Jazz track","Second Jazz track","Third Jazz track"],
                  bluesTracks:["First Blues track","Second Blues track","Third Blues track"],
              },
              currentStation: {},
              play: true,
          }
        },
        components:{
            "app-themes": Themes,
            "app-info": Info,
            "app-volume": Volume,
            "app-select-station": SelectStation,
            "app-add-station": AddStation
        },
        methods:{
            newTheme: function(newTheme){
                this.theme = newTheme;
            },
            playing: function () {
                if(this.currentStation.name){
                    this.play = !this.play;
                }
            },
            addStation: function (newStation) {
                this.stations.push(newStation);
            },
            selectCurrentStation(station){
                this.currentStation = station;
            },
            addToFavourite(){
                if(this.currentStation.name){
                    this.currentStation.isFavourite = !this.currentStation.isFavourite;
                }
            }
        }
    }
</script>

<style>
    .container{
        margin: 0 auto;
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
    .panel{
        width: 50%;
        min-height: 1em;
        background-color: white;
        border: 1px solid black;
        margin: 5% auto;
    }
    .redTheme{
        background-color: darkred;
        color: aliceblue;
    }
    .greenTheme{
        background-color: darkolivegreen;
        color: aliceblue;
    }
    .orangeTheme{
        background-color: darkorange;
        color: aliceblue;
    }
    @media screen and (min-width: 769px) {/*BIG*/
        .container {
            flex-direction: row;
        }
    }
    @media screen and (max-width: 319px) {/*SMALLEST*/
        .container {
            min-width: 319px;
            overflow: auto;
        }
    }
    @media screen and (min-width: 1281px) {/*BIGGEST*/
        .container {
            max-width: 1280px;
            flex-direction: row;
        }
    }
</style>