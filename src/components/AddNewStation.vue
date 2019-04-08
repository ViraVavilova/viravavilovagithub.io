<template>
    <div class="add-station">
        <button @click="active=!active">Add Station</button>
        <div class="menu" v-if="active">
            <div>
                <label for="name">Name</label>
                <input
                        type="text"
                        id="name"
                        v-model.lazy="newStation.name">
            </div>
            <div>
               <div>
                   <label for="jazz">
                       <input
                               type="radio"
                               id="jazz"
                               value="jazz"
                               v-model.lazy="newStation.type">Jazz
                   </label>
               </div>
                <div>
                    <label for="rock">
                        <input
                                type="radio"
                                id="rock"
                                value="rock"
                                v-model.lazy="newStation.type">Rock
                    </label>
                </div>
                <div>
                    <label for="blues">
                        <input
                                type="radio"
                                id="blues"
                                value="blues"
                                v-model.lazy="newStation.type">Blues
                    </label>
                </div>
            </div>
           <button @click="addNewStation">Add New Station</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                active: false,
                newStation:{
                    name:"",
                    type:"",
                    isFavourite: false
                },
            }
        },
        methods:{
            addNewStation: function () {
                if((this.newStation.name !== "")&(this.newStation.type !== "")){
                    this.$emit('newStationWasAdded', this.newStation);
                    this.newStation={
                        name:"",
                        type:"",
                        isFavourite: false
                    }
                }
            }
        }
    }
</script>

<style>
    .menu{
        text-align: left;
    }

</style>