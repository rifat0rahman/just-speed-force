<template>
    <section class="w-full bg-gradient-to-b from-gray-900 to-black text-white">

        <!-- HERO WITH SLIDER -->
        <div class="relative min-h-screen overflow-hidden">
            <!-- Slider Images -->
            <div class="absolute inset-0">
                <transition-group name="slide-fade">
                    <div v-for="(image, index) in heroImages" :key="index" v-show="currentSlide === index"
                        class="absolute inset-0 transition-all duration-1000">
                        <img :src="image" class="w-full h-full object-cover transform scale-110 animate-zoom"
                            :alt="`F1 Car ${index + 1}`" />
                        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    </div>
                </transition-group>
            </div>

            <!-- Hero Content -->
            <div class="relative z-10 flex items-center justify-center min-h-screen px-6">
                <div class="max-w-4xl text-left animate-fade-in-up">
                    <div class="mb-4 inline-block px-4 py-2 bg-red-600 text-xs font-bold tracking-widest rounded-full">
                        NEXT-GEN RACING
                    </div>
                    <h1 class="mb-6 text-7xl md:text-8xl font-black uppercase tracking-tight">
                        <span
                            class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient">
                            Speed
                        </span>
                        <span class="block">Redefined</span>
                    </h1>
                    <p class="mb-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                        Engineering the future of Formula 1 with cutting-edge aerodynamics,
                        revolutionary materials, and unstoppable passion.
                    </p>
                    <div class="flex gap-4">
                        <button
                            class="group relative px-8 py-4 bg-red-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-red-700 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                            <span class="relative z-10">Explore Project</span>
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                            </div>
                        </button>
                        <button
                            class="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>

            <!-- Slider Controls -->
            <div class="absolute bottom-10 right-10 z-20 flex gap-4">
                <button @click="previousSlide"
                    class="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button @click="nextSlide"
                    class="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Slider Indicators -->
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                <button v-for="(image, index) in heroImages" :key="index" @click="currentSlide = index"
                    class="h-1 transition-all duration-300"
                    :class="currentSlide === index ? 'w-12 bg-red-600' : 'w-8 bg-white/50'"></button>
            </div>
        </div>

        <!-- STATS BAR -->
        <div class="py-12 bg-gradient-to-r from-red-600 to-orange-600">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="animate-count-up">
                        <div class="text-5xl font-black mb-2">320</div>
                        <div class="text-sm uppercase tracking-wider opacity-90">KM/H Top Speed</div>
                    </div>
                    <div class="animate-count-up animation-delay-200">
                        <div class="text-5xl font-black mb-2">2.4</div>
                        <div class="text-sm uppercase tracking-wider opacity-90">Sec 0-100 KM/H</div>
                    </div>
                    <div class="animate-count-up animation-delay-400">
                        <div class="text-5xl font-black mb-2">850</div>
                        <div class="text-sm uppercase tracking-wider opacity-90">HP Engine Power</div>
                    </div>
                    <div class="animate-count-up animation-delay-600">
                        <div class="text-5xl font-black mb-2">560</div>
                        <div class="text-sm uppercase tracking-wider opacity-90">KG Weight</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ABOUT SECTION -->
        <div class="py-32 container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="relative group">
                    <div
                        class="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500">
                    </div>
                    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000"
                        class="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                        alt="Racing Car" />
                </div>
                <div class="space-y-6">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30">
                        OUR MISSION
                    </div>
                    <h2 class="text-5xl md:text-6xl font-black leading-tight">
                        Engineering <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Excellence</span>
                    </h2>
                    <p class="text-xl text-gray-400 leading-relaxed">
                        A student-led revolution in motorsports engineering. We're not just building a car—we're
                        crafting a legacy of innovation, pushing boundaries with aggressive aerodynamics,
                        cutting-edge materials, and relentless determination.
                    </p>
                    <p class="text-lg text-gray-500 leading-relaxed">
                        Every component, every calculation, every test drives us closer to perfection.
                        This is where passion meets precision.
                    </p>
                    <button
                        class="group relative px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded-lg overflow-hidden transition-all hover:text-white">
                        <span class="relative z-10">Discover More</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- CAR SHOWCASE -->
        <div class="py-32 bg-gradient-to-b from-black to-gray-900">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                        INNOVATION
                    </div>
                    <h2 class="text-5xl md:text-6xl font-black mb-6">
                        Engineered to <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Dominate</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                alt="Aerodynamics" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                            </div>
                        </div>
                        <div class="relative p-8">
                            <div class="mb-4 text-red-500">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">Aerodynamics</h3>
                            <p class="text-gray-400 leading-relaxed">Ultra-low drag coefficient with maximum downforce
                                generation. Wind tunnel perfected for track dominance.</p>
                        </div>
                    </div>

                    <div
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                alt="Chassis" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                            </div>
                        </div>
                        <div class="relative p-8">
                            <div class="mb-4 text-red-500">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">Carbon Chassis</h3>
                            <p class="text-gray-400 leading-relaxed">Aerospace-grade carbon fiber monocoque.
                                Uncompromising safety meets featherweight performance.</p>
                        </div>
                    </div>

                    <div
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                alt="Engine" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                            </div>
                        </div>
                        <div class="relative p-8">
                            <div class="mb-4 text-red-500">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-3">Power Unit</h3>
                            <p class="text-gray-400 leading-relaxed">850 HP of pure adrenaline. High-revving engineering
                                marvel delivering instant throttle response.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- TEAM SECTION -->
        <div class="py-32 bg-black">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                        THE CREW
                    </div>
                    <h2 class="text-5xl md:text-6xl font-black mb-6">
                        Meet the <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Champions</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="member in teamMembers" :key="member.name" class="group relative">
                        <div class="relative overflow-hidden rounded-2xl">
                            <img :src="member.image"
                                class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                :alt="member.name" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                            </div>
                            <div
                                class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-2xl font-bold mb-1">{{ member.name }}</h3>
                                <p class="text-red-500 font-semibold">{{ member.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SPONSORS -->
        <div class="py-32 bg-gradient-to-b from-gray-900 to-black">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                        PARTNERS
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black">Powered by Excellence</h2>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-6 gap-12 items-center">
                    <div class="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src="https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png"
                            class="h-20 mx-auto" alt="Red Bull" />
                    </div>
                    <div class="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png" class="h-20 mx-auto"
                            alt="Mercedes" />
                    </div>
                    <div class="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src="https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png"
                            class="h-20 mx-auto" alt="Ferrari" />
                    </div>
                    <div class="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Ferrari-logo.png"
                            class="h-20 mx-auto" alt="BMW" />
                    </div>
                    <div class="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src="https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo.png" class="h-20 mx-auto"
                            alt="BMW" />
                    </div>
                    <div class="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png" class="h-20 mx-auto"
                            alt="BMW" />
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA SECTION -->
        <div class="relative py-32 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600"></div>
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0"
                    style="background-image: url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80'); background-size: cover; background-position: center;">
                </div>
            </div>
            <div class="relative container mx-auto px-6 text-center">
                <h2 class="text-5xl md:text-6xl font-black mb-6">Ready to Join the Race?</h2>
                <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
                    Be part of the next generation of motorsports engineering. Support our mission to push the limits.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button
                        class="px-10 py-5 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all hover:scale-105 hover:shadow-2xl">
                        Become a Sponsor
                    </button>
                    <button
                        class="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-all hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "LandingPage",
    data() {
        return {
            currentSlide: 0,
            heroImages: [
                'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000',
                'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2000',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000'
            ],
            teamMembers: [
                {
                    name: 'Rifat',
                    role: 'Team Leader',
                    image: 'https://randomuser.me/api/portraits/men/32.jpg'
                },
                {
                    name: 'Sarah',
                    role: 'Aerodynamics Engineer',
                    image: 'https://randomuser.me/api/portraits/women/55.jpg'
                },
                {
                    name: 'Rahim',
                    role: 'Mechanical Engineer',
                    image: 'https://randomuser.me/api/portraits/men/44.jpg'
                },
                {
                    name: 'Meher',
                    role: 'Electronics Engineer',
                    image: 'https://randomuser.me/api/portraits/women/68.jpg'
                }
            ]
        };
    },
    mounted() {
        this.startSlideshow();
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.heroImages.length;
        },
        previousSlide() {
            this.currentSlide = this.currentSlide === 0
                ? this.heroImages.length - 1
                : this.currentSlide - 1;
        },
        startSlideshow() {
            setInterval(() => {
                this.nextSlide();
            }, 5000);
        }
    }
};
</script>

<style scoped>
@keyframes gradient {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

@keyframes zoom {

    0%,
    100% {
        transform: scale(1.1);
    }

    50% {
        transform: scale(1.15);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes countUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
}

.animate-zoom {
    animation: zoom 20s ease-in-out infinite;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
}

.animate-count-up {
    animation: countUp 0.8s ease-out;
}

.animation-delay-200 {
    animation-delay: 0.2s;
    opacity: 0;
    animation-fill-mode: forwards;
}

.animation-delay-400 {
    animation-delay: 0.4s;
    opacity: 0;
    animation-fill-mode: forwards;
}

.animation-delay-600 {
    animation-delay: 0.6s;
    opacity: 0;
    animation-fill-mode: forwards;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 1s ease;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
</style>