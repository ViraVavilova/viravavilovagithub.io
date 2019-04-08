<template>
    <div class="volume">
        <div>Volume</div>
        <div class="panel">{{volume}}</div>
        <button @click="increaseVolume()">+</button>
        <button @click="decreaseVolume()">-</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                volume: 0,
            }
        },
        methods:{
            increaseVolume: function () {
                if(this.volume<=95){
                    this.volume = this.volume + 5;
                }
            },
            decreaseVolume: function () {
                if(this.volume>=5){
                    this.volume = this.volume - 5;
                }
            },
        }
    }
</script>

<style>
    .panel{
        color:black;
    }
</style>