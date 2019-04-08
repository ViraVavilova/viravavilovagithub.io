<template>
    <div class="themes">
        <button @click="active=!active">Change Theme</button>
        <div class="menu" v-if="active">
            <div class="theme" @click="resetTheme('red')">Theme 1</div>
            <div class="theme" @click="resetTheme('green')">Theme 2</div>
            <div class="theme" @click="resetTheme('orange')">Theme 3</div>
            <div class="theme" @click="resetTheme('none')">Default</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                active: false,
                color:""
            }
        },
        methods:{
            resetTheme: function (color) {
                this.color = color + "Theme";
                this.$emit('themeWasReset', this.color);
            },
        }
    }
</script>

<style>
    .theme{
        border: 1px solid black;
        margin: 5%;
    }
    :hover.theme{
        cursor: pointer;
    }
</style>