<template>
    <div class="footer">
        <div class="footer_secone">
            <div class="footer_logo">
                <div class="flex md:items-center justify-center w-fit">
                    <img class="w-[72px]" src="~/assets/images/footericon.svg" alt="icon">
                    <h1 class="text-3xl font-semibold">Hoo<span class="text-lightblue">Bank</span></h1>
                </div>
                <p class="text-lg mt-8 text-lightgray">
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div class="links_div">
                <p>Useful Links</p>
                <ul class="links">
                    <li><a href="#">Content</a></li>
                    <li><a href="#">How it Works</a></li>
                    <li><a href="#">Create</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Terms & Services</a></li>
                </ul>
            </div>

            <div class="links_div">
                <p>Community</p>
                <ul class="links">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Suggestions</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Newsletters</a></li>
                </ul>
            </div>

            <div class="links_div">
                <p>Partner</p>
                <ul class="links">
                    <li><a href="#">Our Partner</a></li>
                    <li><a href="#">Become a Partner</a></li>
                </ul>
            </div>
        </div>

        <hr class="my-10">

        <div class="footer_sectwo">
            <p class="text-lightgray text-sm"><span class="font-thin text-lightgray">Copyright</span> <span class="text-lightgray">&copy;</span> 2021 HooBank. All Rights Reserved.</p>
            <div class="social">
                <a href="https://www.instagram.com" target="_blank"><img src="~/assets/images/instagram.svg" alt="facebook"></a>
                <a href="https://www.facebook.com" target="_blank"><img src="~/assets/images/fb.svg" alt="facebook"></a>
                <a href="https://www.twitter.com" target="_blank"><img src="~/assets/images/twitter.svg" alt="twitter"></a>
                <a href="https://www.linkedin.com" target="_blank"><img src="~/assets/images/linkedin.svg" alt="linkedIn"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Footer'
    }
</script>
