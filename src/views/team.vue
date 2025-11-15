<template>
    <section class="w-full bg-gradient-to-b from-gray-900 to-black text-white">

        <!-- HERO -->
        <div class="relative min-h-[70vh] overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1502872364588-b0adf6c6a568?q=80&w=2000"
                    class="w-full h-full object-cover transform scale-110 animate-zoom" alt="Team Background" />
                <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
            </div>

            <div class="relative z-10 flex items-center justify-center min-h-[70vh] px-6">
                <div class="text-center max-w-4xl animate-fade-in-up">
                    <div class="mb-6 inline-block px-4 py-2 bg-red-600 text-xs font-bold tracking-widest rounded-full">
                        THE ENGINEERS
                    </div>
                    <h1 class="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                        <span class="block">Meet</span>
                        <span
                            class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient">
                            Our Team
                        </span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        The engineers, designers, and innovators powering our Formula 1 dream.
                    </p>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg class="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>

        <!-- TEAM STRUCTURE -->
        <div class="container mx-auto px-6 py-32">
            <div class="text-center mb-20">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                    ORGANIZATION
                </div>
                <h2 class="text-5xl md:text-6xl font-black mb-6">
                    Team <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Structure</span>
                </h2>
                <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                    Our multi-disciplinary approach combines expertise across engineering domains
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(dept, index) in departments" :key="index"
                    class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500"
                    :class="`animation-delay-${index * 200}`">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative">
                        <div
                            class="mb-6 text-red-500 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="dept.icon" />
                            </svg>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                            {{ dept.title }}
                        </h3>
                        <p class="text-gray-400 leading-relaxed">
                            {{ dept.description }}
                        </p>
                    </div>

                    <div
                        class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700">
                    </div>
                </div>
            </div>
        </div>

        <!-- TEAM MEMBERS -->
        <div class="bg-gradient-to-b from-black to-gray-900 py-32">
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

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(member, index) in teamMembers" :key="index"
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/30">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <!-- Image Container -->
                        <div class="relative overflow-hidden h-80">
                            <img :src="member.photo"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                :alt="member.name" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                            <!-- Overlay Content -->
                            <div
                                class="absolute inset-0 flex items-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div class="w-full">
                                    <h3 class="text-2xl font-bold mb-2">{{ member.name }}</h3>
                                    <p class="text-red-500 font-semibold mb-4">{{ member.role }}</p>

                                    <!-- Social Icons (appear on hover) -->
                                    <div
                                        class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            class="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-red-600 transition-colors">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </button>
                                        <button
                                            class="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-red-600 transition-colors">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Profile Button -->
                        <div class="relative p-6">
                            <button
                                class="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105">
                                View Profile
                            </button>
                        </div>

                        <!-- Decorative Corner -->
                        <div
                            class="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-red-500/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- STATS SECTION -->
        <div class="py-20 bg-gradient-to-r from-red-600 to-orange-600">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="animate-count-up">
                        <div class="text-5xl md:text-6xl font-black mb-2">25+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Team Members</div>
                    </div>
                    <div class="animate-count-up animation-delay-200">
                        <div class="text-5xl md:text-6xl font-black mb-2">4</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Departments</div>
                    </div>
                    <div class="animate-count-up animation-delay-400">
                        <div class="text-5xl md:text-6xl font-black mb-2">1000+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Engineering Hours</div>
                    </div>
                    <div class="animate-count-up animation-delay-600">
                        <div class="text-5xl md:text-6xl font-black mb-2">100%</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Dedication</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA SECTION -->
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
                    JOIN US
                </div>
                <h2 class="text-5xl md:text-6xl font-black mb-6">
                    Ready to <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Join the
                        Team?</span>
                </h2>
                <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
                    We're always looking for passionate engineers and designers who want to push the boundaries of
                    motorsports innovation.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button
                        class="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                        <span class="relative z-10">Apply Now</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                        </div>
                    </button>
                    <button
                        class="px-10 py-5 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105">
                        Learn More
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "TeamPage",
    data() {
        return {
            departments: [
                {
                    title: "Leadership",
                    description: "Team management & overall workflow coordination.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                    title: "Mechanical Team",
                    description: "Chassis, suspension, powertrain & structural design.",
                    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                },
                {
                    title: "Electronics",
                    description: "Sensor systems, microcontrollers, and data acquisition.",
                    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                },
                {
                    title: "Aerodynamics",
                    description: "Wing design, airflow simulation & body optimization.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                }
            ],
            teamMembers: [
                {
                    name: "Ragib Ishrak",
                    role: "Team Leader",
                    photo: "https://scontent.fjsr18-1.fna.fbcdn.net/v/t39.30808-6/577005862_122111967525017220_4101774396913376416_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFIjI3lv444cuoHCB1t6Uq-YYmL4rYd3ZFhiYvith3dkao2IdGWjj1Z9NC-The4IfkJ0m0GojrUhJFMhW-H2cxI&_nc_ohc=dhWJbLOhk5oQ7kNvwF_pOaZ&_nc_oc=AdnbpLhwuUfCqUYrSS7xSrEmqiUBe3iBsI6Jms-t0yhwcFVRc7OWMqOOi3jmmPajrg4&_nc_zt=23&_nc_ht=scontent.fjsr18-1.fna&_nc_gid=nE0ENqz9AgssQsyiPv3YHQ&oh=00_Afim_9c_tFtQy_csrElWzdF8RZjgzxM_qQfAOc8K2GBscg&oe=691E16FE",
                },
                {
                    name: "Siam Minhaj",
                    role: "Aerodynamics Engineer",
                    photo: "https://scontent.fdac181-1.fna.fbcdn.net/v/t39.30808-6/574437221_804565245701462_7504903121816024173_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzaRX5KuelTZDweETZAIBtBGtEJF1bZ5kEa0QkXVtnmb5L7La-_1Cn1ZoAeXzL4anRSD6wtYyKifmSDqy281pz&_nc_ohc=p4VehBSXm9cQ7kNvwH0FoXx&_nc_oc=AdkmcOvP7BBObAiZwyOeYUYcjhZ9yj6wulV9RJe8tQY6cHDNXnLwBmo5kj0fnpwK5pY&_nc_zt=23&_nc_ht=scontent.fdac181-1.fna&_nc_gid=d3KJgujMGuSO3Y2Zt-EgIw&oh=00_AfhMMUfyDUrLPys6DpDW4Me_nJR-cqC8ieKcwOPuiNjIeg&oe=691E0F0D",
                },
                {
                    name: "Arikuzzaman",
                    role: "Mechanical Designer",
                    photo: "https://scontent.fdac181-1.fna.fbcdn.net/v/t39.30808-1/480577064_1683316499287023_3564364721851127216_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGk8Y2Nq_viaV2_1mDASuTTXV1FC89cfN1dXUULz1x83dECWS1xXMuqmpVOjFnkZF96zyuIPBbg5YEVsI1FkQmH&_nc_ohc=jpqFJsDLNc0Q7kNvwGE5f63&_nc_oc=AdlOmVjPIYDfj0eQJXdUZxKsQcI_uKW8etIlRnorUgJj1JGUlbVu0AuAoEB9EoCWa38&_nc_zt=24&_nc_ht=scontent.fdac181-1.fna&_nc_gid=d5VO_HoGoZFs2iqD5dLGAw&oh=00_AfjotBVqhN4b8Qpxuc11jOD9mH8NeTk9eofLdonWj2gFGw&oe=691E274E",
                },
                {
                    name: "Rifat Rahman",
                    role: "Electronics Engineer",
                    photo: "https://scontent.fjsr18-2.fna.fbcdn.net/v/t39.30808-6/480669092_2035332083639123_2599913038205254924_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGhcw5GGpp8iGTXtyhcaY3QYYUEWrtfZzthhQRau19nO68DiXIrNvieeUk77UX70UPSbfLlmUA--4fWjWLHBmbO&_nc_ohc=41spMMUO4FIQ7kNvwEqtTWK&_nc_oc=AdkE6ttoxr2vXt2nWzeVB6aULuU1oDnpTdw4QUpvC16obQaRYqXZG0FlddeIvNijw6Q&_nc_zt=23&_nc_ht=scontent.fjsr18-2.fna&_nc_gid=Z7bJ9E7FCAdp9RHgi0zX3w&oh=00_AfiFUy3OZHE3TaHRyKMFrV7wOYBqWxexNeFaiSj32rjHHQ&oe=691E0F49",
                },
                {
                    name: "Naimul Islam",
                    role: "Suspension Engineer",
                    photo: "https://randomuser.me/api/portraits/men/15.jpg",
                },
                {
                    name: "Ayesha Khan",
                    role: "CFD Specialist",
                    photo: "https://randomuser.me/api/portraits/women/23.jpg",
                },
                {
                    name: "Arif Chowdhury",
                    role: "Engine Developer",
                    photo: "https://randomuser.me/api/portraits/men/51.jpg",
                },
                {
                    name: "Sadia Noor",
                    role: "Chassis Designer",
                    photo: "https://randomuser.me/api/portraits/women/12.jpg",
                },
            ],
        };
    },
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

.animation-delay-1000 {
    animation-delay: 1s;
}

</style>
