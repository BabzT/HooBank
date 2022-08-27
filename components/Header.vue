<template>
    <div class="navbar">
        <div class="flex md:items-center justify-center w-fit">
            <img src="~/assets/images/icon.png" alt="icon">
            <h1 class="text-lg font-semibold">Hoo<span class="text-lightblue">Bank</span></h1>
        </div>
        <div class="mobile">
            <div class="menu" @click="menuToggle">
                <div v-if="open" class="flex flex-col items-end">
                    <div class="w-3 h-0.5 bg-white rounded-2xl"></div>
                    <div class="w-5 h-0.5 bg-lightblue my-1.5 rounded-2xl"></div>
                    <div class="w-7 h-0.5 bg-white rounded-2xl"></div>
                </div>
                <span v-else class="material-symbols-rounded text-4xl">close</span>
            </div>
            <transition name="mobilenavlink_div">
                <ul v-if="mobileNav" class="mobilenavlink_div">
                    <li @click="home" :class="{active : Home}" class="navlink my-2"><a href="#home">Home</a></li>
                    <li @click="aboutus" :class="{active : Aboutus}" class="navlink my-2"><a href="#aboutus">About Us</a></li>
                    <li @click="features" :class="{active : Features}" class="navlink my-2"><a href="#features">Features</a></li>
                    <li @click="solution" :class="{active : Solution}" class="navlink my-2"><a href="#solution">Solution</a></li>
                </ul>
            </transition>
        </div>

        <ul class="navlink_div">
            <li @click="home" :class="{active : Home}" class="navlink"><a href="#home">Home</a></li>
            <li @click="aboutus" :class="{active : Aboutus}" class="navlink"><a href="#aboutus">About Us</a></li>
            <li @click="features" :class="{active : Features}" class="navlink"><a href="#features">Features</a></li>
            <li @click="solution" :class="{active : Solution}" class="navlink"><a href="#solution">Solution</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data(){
            return {
                Home:true,
                Aboutus:false,
                Features: false,
                Solution:false,
                open:true,
                mobileNav:null
            }
        },
        methods:{
            home(){
                this.Home = true,this.Aboutus = false,this.Features = false,this.Solution = false
            },
            aboutus(){
                this.Home = false,this.Aboutus = true,this.Features = false,this.Solution = false
            },
            features(){
                this.Home = false,this.Aboutus = false,this.Features = true,this.Solution = false
            },
            solution(){
                this.Home = false,this.Aboutus = false,this.Features = false,this.Solution = true
            },
            menuToggle(){
                this.open = !this.open
                this.mobileNav = !this.mobileNav
            },
        }
    }
</script>
