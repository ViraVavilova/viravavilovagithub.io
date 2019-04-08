<template>
    <div class="select-station">
        <button @click="active = !active">Select Station</button>
        <div v-if="active">
            <div class="stationTable" >
                <button @click="filterValue = null">All</button>
                <button @click="filterValue = 'blues'">Blues</button>
                <button @click="filterValue = 'rock'">Rock</button>
                <button @click="filterValue = 'jazz'">Jazz</button>
                <button @click="filterValue = true ">Favourite</button>
            </div>
            <div class="filteredValues"
                 @click="selectedValue(station)"
                 v-for="station in filteredStations">{{station.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: false,
				filterValue: null,
            }
        },
        computed: {
            filteredStations: function () {
				let self = this;
				return this.stations.filter(function (station) {
				    if(self.filterValue === true){
                        return (station.isFavourite == self.filterValue);
                    }
					return (station.type == self.filterValue) || (self.filterValue === null);
				});
			}
        },
        props: {
            stations: {
                type: Array,
                default: function () {
                    return {}
                }
            }
        },
        methods:{
            selectedValue: function (station) {
                this.$emit('selectedValue', station);
            }
        }
    }
</script>

<style>
    .stationTable{
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }
    .filteredValues{
        border: 1px solid black;
    }
    :hover.filteredValues{
        cursor: pointer;
    }
</style>