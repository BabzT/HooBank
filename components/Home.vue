<template>
    <div class="home" id="home">
        <div class="home_main">
            <img class="absolute h-4/5 w-1/2 left-0 z-40" src="~/assets/images/ellipse.png">
            <div class="home_secone">
                <div class="discount">
                    <img src="~/assets/images/discount.png" alt="discount icon">
                    <p class="md:text-lg ml-1">20% 
                        <span class="text-lightgray">DISCOUNT FOR</span> 1 MONTH 
                        <span class="text-lightgray">ACCOUNT</span> 
                    </p>
                </div>

                <div class="relative mt-3 py-3">
                    <a href="#"><img class="getstarted" src="~/assets/images/getstarted.png" alt="getstarted"></a>
                    <p class="md:text-[68px] text-5xl leading-normal font-semibold">The Next
                        <span><img src="~/assets/images/generation.png" alt=""></span>
                        Payment Method.</p>
                </div>

                <p class="home_seconetext">
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.
                </p>
            </div>

            <div class="home_sectwo">
                <img class="absolute right-0" src="~/assets/images/vector.png">
                <img src="~/assets/images/bank.png" alt="banking">
            </div>
        </div>
            <a href="#"><img class="getstarted2" src="~/assets/images/getstarted.png" alt="getstarted"></a>
        <div class="statistics">
            <div class="stat">
                <p class="stat_text">3800+</p>
                <img src="~/assets/images/useractive.png" alt="">
            </div>

            <img class="hidden md:flex" src="~/assets/images/line.png" alt="">

            <div class="stat">
                <p class="stat_text">230+</p>
                <img src="~/assets/images/trusted.png" alt="">
            </div>

            <img class="hidden md:flex" src="~/assets/images/line.png" alt="">

            <div class="stat">
                <p class="stat_text">$230M+</p>
                <img src="~/assets/images/transaction.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home'
    }
</script>


