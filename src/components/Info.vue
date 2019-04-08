<template>
    <div class="info">
        <button @click="active=!active">Show Info</button>
        <div v-if="active">
            <p>Current station is: </p>
            <p>Name: {{currentStation.name}}</p>
            <p>Type: {{currentStation.type}}</p>
            <p>Favourite: {{currentStation.isFavourite}}</p>
            <button @click="randomCurrentTrack"> Show the track</button>
            <p>Some track: {{currentTrack}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                active:false,
                currentTrack: "",
            }
        },
        props:['currentStation', 'tracks'],
        methods:{
            randomCurrentTrack: function () {
                let arr = [];
                switch (this.currentStation.type) {
                    case "rock":{
                        arr = this.tracks.rockTracks;
                        break;
                    }
                    case "jazz":{
                        arr = this.tracks.jazzTracks;
                        break;
                    }
                    case "blues":{
                        arr = this.tracks.bluesTracks;
                        break;
                    }
                }
                 let index = Math.floor(Math.random() * arr.length);
                 this.currentTrack = arr[index];
            }
        }
    }
</script>

<style>

</style>