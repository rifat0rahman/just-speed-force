<template>
    <section class="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">

        <!-- HERO SECTION -->
        <div class="relative overflow-hidden py-32 px-6">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0"
                    style="background-image: url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80'); background-size: cover; background-position: center;">
                </div>
            </div>

            <!-- Animated Background Elements -->
            <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000">
            </div>

            <div class="relative container mx-auto text-center max-w-5xl animate-fade-in-up">
                <div class="mb-6 inline-block px-4 py-2 bg-red-600 text-xs font-bold tracking-widest rounded-full">
                    INNOVATION LAB
                </div>
                <h1 class="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                    <span class="block">Research &</span>
                    <span
                        class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient">
                        Development
                    </span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Pushing the boundaries of motorsports engineering through cutting-edge research
                    and innovative solutions.
                </p>
            </div>
        </div>

        <!-- RESEARCH OVERVIEW -->
        <div class="container mx-auto px-6 py-20">
            <div class="max-w-4xl mx-auto text-center mb-20">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                    OUR APPROACH
                </div>
                <h2 class="text-4xl md:text-5xl font-black mb-6">
                    Research <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Philosophy</span>
                </h2>
                <p class="text-lg text-gray-400 leading-relaxed">
                    At Just Speed Force, we believe in data-driven engineering and rigorous testing.
                    Every component of our F1 car undergoes extensive research, simulation, and validation
                    to ensure peak performance. Our research spans multiple disciplines, from computational
                    fluid dynamics to advanced materials science.
                </p>
            </div>
        </div>

        <!-- RESEARCH AREAS -->
        <div class="bg-gradient-to-b from-black to-gray-900 py-32">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                        FOCUS AREAS
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black mb-6">
                        Research <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Domains</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div v-for="(area, index) in researchAreas" :key="index"
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <!-- Image Section -->
                        <div class="relative overflow-hidden h-64">
                            <img :src="area.image"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                :alt="area.title" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        </div>

                        <!-- Content Section -->
                        <div class="relative p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div
                                    class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                                    <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            :d="area.icon" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                                        {{ area.title }}
                                    </h3>
                                    <p class="text-sm text-gray-500 mb-4">{{ area.subtitle }}</p>
                                </div>
                            </div>

                            <p class="text-gray-400 leading-relaxed mb-6">
                                {{ area.description }}
                            </p>

                            <!-- Key Points -->
                            <div class="space-y-2">
                                <div v-for="(point, idx) in area.keyPoints" :key="idx"
                                    class="flex items-center gap-2 text-sm text-gray-400">
                                    <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span>{{ point }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- METHODOLOGY -->
        <div class="container mx-auto px-6 py-32">
            <div class="text-center mb-20">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                    PROCESS
                </div>
                <h2 class="text-4xl md:text-5xl font-black mb-6">
                    Research <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Methodology</span>
                </h2>
            </div>

            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(step, index) in methodology" :key="index" class="relative">
                        <!-- Step Card -->
                        <div
                            class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 h-full hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 transform hover:-translate-y-2">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>

                            <div class="relative">
                                <!-- Step Number -->
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/50 group-hover:scale-110 transition-transform">
                                    <span class="text-2xl font-black">{{ index + 1 }}</span>
                                </div>

                                <h3 class="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                                    {{ step.title }}
                                </h3>
                                <p class="text-gray-400 leading-relaxed text-sm">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>

                        <!-- Connecting Arrow (except last item) -->
                        <div v-if="index < methodology.length - 1"
                            class="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- PUBLICATIONS & FINDINGS -->
        <div class="bg-gradient-to-b from-black to-gray-900 py-32">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <div
                        class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                        INSIGHTS
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black mb-6">
                        Key <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Findings</span>
                    </h2>
                </div>

                <div class="max-w-5xl mx-auto space-y-6">
                    <div v-for="(finding, index) in findings" :key="index"
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative flex flex-col md:flex-row gap-6">
                            <!-- Date Badge -->
                            <div class="flex-shrink-0">
                                <div
                                    class="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/50">
                                    <div class="text-center">
                                        <div class="text-xs font-bold">{{ finding.month }}</div>
                                        <div class="text-2xl font-black">{{ finding.year }}</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                                    {{ finding.title }}
                                </h3>
                                <p class="text-sm text-gray-500 mb-4">{{ finding.category }}</p>
                                <p class="text-gray-400 leading-relaxed mb-4">
                                    {{ finding.description }}
                                </p>

                                <!-- Tags -->
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="(tag, idx) in finding.tags" :key="idx"
                                        class="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-xs font-bold border border-red-500/30">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>

                            <!-- Download Icon -->
                            <div class="flex-shrink-0 self-start">
                                <button
                                    class="p-3 bg-gray-700/50 rounded-lg hover:bg-red-600 transition-colors group/btn">
                                    <svg class="w-5 h-5 group-hover/btn:animate-bounce" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- TOOLS & EQUIPMENT -->
        <div class="container mx-auto px-6 py-32">
            <div class="text-center mb-20">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                    FACILITIES
                </div>
                <h2 class="text-4xl md:text-5xl font-black mb-6">
                    Research <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Tools</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div v-for="(tool, index) in tools" :key="index"
                    class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 transform hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <div class="relative">
                        <div
                            class="mb-6 text-red-500 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto w-16 h-16">
                            <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tool.icon" />
                            </svg>
                        </div>

                        <h3 class="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                            {{ tool.name }}
                        </h3>
                        <p class="text-gray-400 leading-relaxed text-sm">
                            {{ tool.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- STATS BAR -->
        <div class="py-20 bg-gradient-to-r from-red-600 to-orange-600">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="animate-count-up">
                        <div class="text-5xl md:text-6xl font-black mb-2">15+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Research Papers</div>
                    </div>
                    <div class="animate-count-up animation-delay-200">
                        <div class="text-5xl md:text-6xl font-black mb-2">500+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">CFD Simulations</div>
                    </div>
                    <div class="animate-count-up animation-delay-400">
                        <div class="text-5xl md:text-6xl font-black mb-2">1000+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Test Hours</div>
                    </div>
                    <div class="animate-count-up animation-delay-600">
                        <div class="text-5xl md:text-6xl font-black mb-2">50+</div>
                        <div class="text-sm md:text-base uppercase tracking-wider opacity-90">Prototypes Built</div>
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

            <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000">
            </div>

            <div class="relative container mx-auto px-6 text-center">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-8">
                    COLLABORATE
                </div>
                <h2 class="text-5xl md:text-6xl font-black mb-6">
                    Partner in <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Innovation</span>
                </h2>
                <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
                    Interested in collaborating on research or accessing our findings? Get in touch with our research
                    team.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button
                        class="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                        <span class="relative z-10">Contact Research Team</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                        </div>
                    </button>
                    <button
                        class="px-10 py-5 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105">
                        View Publications
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "ResearchPage",

    data() {
        return {
            researchAreas: [
                {
                    title: "Aerodynamics",
                    subtitle: "Computational Fluid Dynamics & Wind Tunnel Testing",
                    description: "Advanced aerodynamic research focusing on downforce optimization, drag reduction, and airflow management. Using state-of-the-art CFD simulations and wind tunnel validation.",
                    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    keyPoints: [
                        "CFD analysis using ANSYS Fluent",
                        "1:5 scale wind tunnel testing",
                        "Front & rear wing optimization",
                        "Diffuser performance studies"
                    ]
                },
                {
                    title: "Materials Science",
                    subtitle: "Advanced Composites & Lightweight Structures",
                    description: "Research into carbon fiber composites, honeycomb structures, and advanced alloys to achieve optimal strength-to-weight ratios while maintaining safety standards.",
                    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                    keyPoints: [
                        "Carbon fiber layup techniques",
                        "FEA stress analysis",
                        "Impact resistance testing",
                        "Weight reduction strategies"
                    ]
                },
                {
                    title: "Powertrain Engineering",
                    subtitle: "Engine Performance & Thermal Management",
                    description: "Comprehensive powertrain research including engine mapping, turbocharger efficiency, cooling systems, and exhaust optimization for maximum power output.",
                    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    keyPoints: [
                        "Dynamometer testing & tuning",
                        "Thermal analysis simulations",
                        "Fuel efficiency optimization",
                        "Turbocharger performance mapping"
                    ]
                },
                {
                    title: "Vehicle Dynamics",
                    subtitle: "Suspension Systems & Handling Optimization",
                    description: "Advanced research on suspension geometry, tire dynamics, and vehicle stability through mathematical modeling and real-world testing.",
                    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
                    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                    keyPoints: [
                        "Double wishbone suspension design",
                        "Spring rate calculations",
                        "Anti-roll bar optimization",
                        "Tire contact patch analysis"
                    ]
                }
            ],

            methodology: [
                {
                    title: "Concept Design",
                    description: "Initial ideation and theoretical modeling using CAD software and mathematical simulations."
                },
                {
                    title: "Simulation",
                    description: "Virtual testing through CFD, FEA, and multi-body dynamics analysis to validate concepts."
                },
                {
                    title: "Prototyping",
                    description: "Building scaled or full-size prototypes for physical testing and validation."
                },
                {
                    title: "Validation",
                    description: "Real-world testing, data collection, and iterative refinement based on results."
                }
            ],

            findings: [
                {
                    title: "Aerodynamic Efficiency Breakthrough",
                    category: "Aerodynamics Research",
                    description: "Achieved a 15% increase in downforce while reducing drag by 8% through innovative front wing endplate design and rear diffuser optimization.",
                    month: "NOV",
                    year: "2024",
                    tags: ["CFD", "Wind Tunnel", "Downforce"]
                },
                {
                    title: "Lightweight Chassis Structure",
                    category: "Materials Engineering",
                    description: "Developed a carbon fiber monocoque design that reduced chassis weight by 12kg while maintaining FIA safety standards through advanced layup techniques.",
                    month: "SEP",
                    year: "2024",
                    tags: ["Carbon Fiber", "FEA", "Safety"]
                },
                {
                    title: "Thermal Management Optimization",
                    category: "Powertrain Systems",
                    description: "Improved cooling efficiency by 20% through redesigned radiator placement and airflow ducting, enabling sustained peak performance.",
                    month: "JUL",
                    year: "2024",
                    tags: ["Cooling", "CFD", "Engine"]
                },
                {
                    title: "Suspension Geometry Analysis",
                    category: "Vehicle Dynamics",
                    description: "Optimized double wishbone suspension geometry resulting in 25% improvement in cornering stability and reduced tire wear.",
                    month: "MAY",
                    year: "2024",
                    tags: ["Suspension", "Handling", "Kinematics"]
                }
            ],

            tools: [
                {
                    name: "ANSYS Fluent",
                    description: "Industry-leading CFD software for aerodynamic analysis and fluid flow simulations.",
                    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                },
                {
                    name: "SolidWorks",
                    description: "Professional CAD software for 3D modeling and detailed engineering design.",
                    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                },
                {
                    name: "Wind Tunnel",
                    description: "1:5 scale wind tunnel facility for real-world aerodynamic validation and testing.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                    name: "Dynamometer",
                    description: "High-precision dyno for engine testing, tuning, and performance measurement.",
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                    name: "MATLAB/Simulink",
                    description: "Mathematical modeling and simulation platform for complex system analysis.",
                    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                {
                    name: "3D Printer Lab",
                    description: "Rapid prototyping facility for creating test components and concept models.",
                    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
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