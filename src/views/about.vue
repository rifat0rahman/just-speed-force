<template>
    <section class="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">

        <!-- HERO SECTION -->
        <div class="relative overflow-hidden py-32 px-6">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0"
                    style="background-image: url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80'); background-size: cover; background-position: center;">
                </div>
            </div>

            <!-- Animated Background Elements -->
            <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000">
            </div>

            <div class="relative container mx-auto text-center max-w-5xl animate-fade-in-up">
                <div class="mb-6 inline-block px-4 py-2 bg-red-600 text-xs font-bold tracking-widest rounded-full">
                    WHO WE ARE
                </div>
                <h1 class="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                    <span class="block">About</span>
                    <span
                        class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient">
                        Just Speed Force
                    </span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    A student-led team pushing the boundaries of motorsports engineering,
                    one innovation at a time.
                </p>
            </div>
        </div>

        <!-- STORY SECTION -->
        <div class="container mx-auto px-6 py-32">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="relative group order-2 lg:order-1">
                    <div
                        class="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500">
                    </div>
                    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000"
                        class="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                        alt="Our Story" />
                </div>
                <div class="space-y-6 order-1 lg:order-2">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30">
                        OUR STORY
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black leading-tight">
                        From Dream to <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Reality</span>
                    </h2>
                    <p class="text-lg text-gray-400 leading-relaxed">
                        Founded in 2023, Just Speed Force began as a passion project among engineering students
                        who shared a common dream: to build a competitive Formula 1 prototype from the ground up.
                    </p>
                    <p class="text-lg text-gray-400 leading-relaxed">
                        What started in a small workshop has evolved into a comprehensive engineering program,
                        bringing together expertise in aerodynamics, mechanical design, electronics, and materials
                        science. Every member brings unique skills, united by our relentless pursuit of speed.
                    </p>
                    <p class="text-lg text-gray-400 leading-relaxed">
                        Today, we stand as a testament to what determination, innovation, and teamwork can achieve
                        when young minds dare to challenge the impossible.
                    </p>
                </div>
            </div>
        </div>

        <!-- MISSION & VISION -->
        <div class="bg-gradient-to-b from-black to-gray-900 py-32">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                        OUR PURPOSE
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black mb-6">
                        Mission & <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Vision</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <!-- Mission Card -->
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-10 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <div class="mb-6 text-red-500 transform group-hover:scale-110 transition-all duration-300">
                                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>

                            <h3 class="text-3xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                                Our Mission
                            </h3>
                            <p class="text-gray-400 leading-relaxed text-lg">
                                To design, engineer, and build a world-class Formula 1 prototype that demonstrates
                                the power of student innovation. We aim to bridge the gap between academic knowledge
                                and real-world motorsports engineering through hands-on learning and cutting-edge
                                research.
                            </p>
                        </div>

                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700">
                        </div>
                    </div>

                    <!-- Vision Card -->
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-10 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <div
                                class="mb-6 text-orange-500 transform group-hover:scale-110 transition-all duration-300">
                                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>

                            <h3 class="text-3xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                                Our Vision
                            </h3>
                            <p class="text-gray-400 leading-relaxed text-lg">
                                To become a leading student motorsports engineering team, inspiring the next generation
                                of automotive innovators. We envision a future where our work contributes to
                                advancements
                                in sustainable racing technology and sets new standards for student engineering
                                excellence.
                            </p>
                        </div>

                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- VALUES SECTION -->
        <div class="container mx-auto px-6 py-32">
            <div class="text-center mb-20">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                    WHAT DRIVES US
                </div>
                <h2 class="text-4xl md:text-5xl font-black mb-6">
                    Core <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Values</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(value, index) in values" :key="index"
                    class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 transform hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative">
                        <div
                            class="mb-6 text-red-500 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mx-auto w-16 h-16">
                            <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.icon" />
                            </svg>
                        </div>

                        <h3 class="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                            {{ value.title }}
                        </h3>
                        <p class="text-gray-400 leading-relaxed">
                            {{ value.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ACHIEVEMENTS SECTION -->
        <div class="bg-gradient-to-b from-black to-gray-900 py-32">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                        OUR JOURNEY
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black mb-6">
                        Key <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Achievements</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div v-for="(achievement, index) in achievements" :key="index"
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <div class="text-5xl font-black text-red-500 mb-4">{{ achievement.year }}</div>
                            <h3 class="text-xl font-bold mb-3">{{ achievement.title }}</h3>
                            <p class="text-gray-400 leading-relaxed">{{ achievement.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- STATS BAR -->
        <div class="py-20 bg-gradient-to-r from-red-600 to-orange-600">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="animate-count-up">
                        <div class="text-5xl md:text-6xl font-black mb-2">25+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Team Members</div>
                    </div>
                    <div class="animate-count-up animation-delay-200">
                        <div class="text-5xl md:text-6xl font-black mb-2">2</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Years Active</div>
                    </div>
                    <div class="animate-count-up animation-delay-400">
                        <div class="text-5xl md:text-6xl font-black mb-2">5000+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Engineering Hours</div>
                    </div>
                    <div class="animate-count-up animation-delay-600">
                        <div class="text-5xl md:text-6xl font-black mb-2">10+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Sponsors</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- JOIN US CTA -->
        <div class="relative py-32 overflow-hidden bg-black">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0"
                    style="background-image: url('https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80'); background-size: cover; background-position: center;">
                </div>
            </div>

            <!-- Animated Background Elements -->
            <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000">
            </div>

            <div class="relative container mx-auto px-6 text-center">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-8">
                    BE PART OF SOMETHING GREAT
                </div>
                <h2 class="text-5xl md:text-6xl font-black mb-6">
                    Join Our <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Journey</span>
                </h2>
                <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
                    Whether you're a student, sponsor, or enthusiast, there's a place for you in our mission
                    to revolutionize motorsports engineering.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button
                        class="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                        <span class="relative z-10">Join the Team</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                        </div>
                    </button>
                    <button
                        class="px-10 py-5 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105">
                        Become a Sponsor
                    </button>
                    <button
                        class="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "AboutPage",

    data() {
        return {
            values: [
                {
                    title: "Innovation",
                    description: "Constantly pushing boundaries with creative engineering solutions.",
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                {
                    title: "Excellence",
                    description: "Maintaining the highest standards in every component we design.",
                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                },
                {
                    title: "Collaboration",
                    description: "Working together across disciplines to achieve our goals.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                    title: "Passion",
                    description: "Driven by an unwavering love for motorsports and engineering.",
                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                }
            ],

            achievements: [
                {
                    year: "2023",
                    title: "Team Formation",
                    description: "Just Speed Force officially established with 15 founding members."
                },
                {
                    year: "2024",
                    title: "First Prototype",
                    description: "Completed our first full-scale chassis design and aerodynamic package."
                },
                {
                    year: "2025",
                    title: "Testing Phase",
                    description: "Successfully completed wind tunnel testing and track simulations."
                }
            ]
        };
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

.animation-delay-1000 {
    animation-delay: 1s;
}
</style>