<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br>
            <router-view name="header-top"></router-view>
            <transition name="slyde" mode="out-in">
            <router-view ></router-view>
            </transition>
            <router-view name="header-bottom"></router-view>
        </div>
    </div>
</div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    components:{
        appHeader: Header,

    }
}
</script>

<style>
/* ///////// */
</style>
