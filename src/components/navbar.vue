<template>
    <nav class="fixed top-0 left-0 right-0 z-50">
        <!-- Main Navbar -->
        <div class="bg-black/95 backdrop-blur-md border-b border-red-500/20 shadow-2xl">
            <div class="container mx-auto px-6">
                <div class="flex items-center justify-between h-20">

                    <!-- Logo -->
                    <router-link to="/" class="flex items-center gap-3 group">
                        <div class="relative">
                            <!-- Logo Icon -->
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-red-500/50">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <!-- Glow Effect -->
                            <div
                                class="absolute inset-0 bg-red-500/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>

                        <div>
                            <div class="text-2xl font-black text-white uppercase tracking-tight leading-none">
                                Just Speed
                            </div>
                            <div class="text-xs text-red-500 font-bold tracking-widest uppercase">
                                Force
                            </div>
                        </div>
                    </router-link>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center gap-2">
                        <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
                            class="group relative px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                            :class="isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'">
                            <!-- Text -->
                            <span class="relative z-10">{{ link.name }}</span>

                            <!-- Active Background -->
                            <div v-if="isActive(link.path)"
                                class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg"></div>

                            <!-- Hover Background -->
                            <div
                                class="absolute inset-0 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <!-- Bottom Border on Active -->
                            <div v-if="isActive(link.path)"
                                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent">
                            </div>
                        </router-link>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button @click="toggleMobileMenu"
                        class="md:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition-colors">
                        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <transition name="mobile-menu">
            <div v-if="mobileMenuOpen" class="md:hidden bg-black/98 backdrop-blur-md border-b border-red-500/20">
                <div class="container mx-auto px-6 py-4 space-y-2">
                    <router-link v-for="link in navLinks" :key="link.path" :to="link.path" @click="closeMobileMenu"
                        class="block px-6 py-4 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
                        :class="isActive(link.path)
                            ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'">
                        <div class="flex items-center justify-between">
                            <span>{{ link.name }}</span>
                            <svg v-if="isActive(link.path)" class="w-5 h-5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </router-link>
                </div>
            </div>
        </transition>

        <!-- Progress Indicator Bar (optional - shows on scroll) -->
        <div v-if="showProgressBar"
            class="h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 transform origin-left transition-transform duration-300"
            :style="{ transform: `scaleX(${scrollProgress})` }"></div>
    </nav>
</template>

<script>
export default {
    name: "NavigationBar",

    data() {
        return {
            mobileMenuOpen: false,
            scrollProgress: 0,
            showProgressBar: false,
            navLinks: [
                { name: 'Home', path: '/' },
                { name: 'Progress', path: '/progress' },
                { name: 'Team', path: '/team' },
                { name: 'Research', path: '/research' },
                { name: 'About Us', path: '/about' }
            ]
        };
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        isActive(path) {
            return this.$route.path === path;
        },

        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },

        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },

        handleScroll() {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.scrollProgress = winScroll / height;
            this.showProgressBar = winScroll > 100;
        }
    }
};
</script>

<style scoped>
/* Mobile Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease;
}

.mobile-menu-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>