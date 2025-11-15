<template>
    <section class="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen">

        <!-- HERO SECTION -->
        <div class="relative overflow-hidden py-32 px-6">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0"
                    style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80'); background-size: cover; background-position: center;">
                </div>
            </div>

            <!-- Animated Background Elements -->
            <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000">
            </div>

            <div class="relative container mx-auto text-center max-w-5xl animate-fade-in-up">
                <div class="mb-6 inline-block px-4 py-2 bg-red-600 text-xs font-bold tracking-widest rounded-full">
                    DEVELOPMENT TRACKER
                </div>
                <h1 class="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                    <span class="block">Project</span>
                    <span
                        class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient">
                        Progress
                    </span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Track our Formula 1 car development in real-time. From concept to completion.
                </p>
            </div>
        </div>

        <!-- OVERALL PROGRESS STATS -->
        <div class="container mx-auto px-6 -mt-16 mb-20 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-red-500/20 hover:border-red-500/50 transition-all">
                    <div class="text-red-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">{{ overallProgress }}%</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">Overall Progress</div>
                </div>

                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-green-500/20 hover:border-green-500/50 transition-all">
                    <div class="text-green-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">{{ completedTasks }}</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">Completed Tasks</div>
                </div>

                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
                    <div class="text-yellow-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">{{ inProgressTasks }}</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">In Progress</div>
                </div>

                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-500/20 hover:border-gray-500/50 transition-all">
                    <div class="text-gray-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">{{ pendingTasks }}</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">Pending</div>
                </div>
            </div>
        </div>

        <!-- PROGRESS TIMELINE -->
        <div class="container mx-auto px-6 pb-32">
            <div class="text-center mb-16">
                <div
                    class="inline-block px-4 py-2 bg-red-600/20 text-red-500 text-xs font-bold tracking-widest rounded-full border border-red-600/30 mb-6">
                    MILESTONES
                </div>
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    Development <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Roadmap</span>
                </h2>
            </div>

            <!-- TASK CARDS -->
            <div class="space-y-8 max-w-5xl mx-auto">
                <div v-for="(task, index) in progressList" :key="index" class="group relative"
                    :class="`animation-delay-${index * 100}`">
                    <!-- Card Container -->
                    <div
                        class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">

                        <!-- Header Section -->
                        <div class="p-8 cursor-pointer" @click="toggleTask(index)">
                            <div class="flex items-start justify-between gap-6">
                                <!-- Left Content -->
                                <div class="flex-1">
                                    <div class="flex items-center gap-4 mb-3">
                                        <div class="w-12 h-12 rounded-xl flex items-center justify-center"
                                            :class="getStatusColor(task.status).bg">
                                            <svg class="w-6 h-6" :class="getStatusColor(task.status).text" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    :d="task.icon" />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 class="text-2xl font-bold group-hover:text-red-500 transition-colors">
                                                {{ task.title }}
                                            </h3>
                                            <p class="text-gray-400 text-sm mt-1">{{ task.description }}</p>
                                        </div>
                                    </div>

                                    <!-- Progress Bar -->
                                    <div class="mt-6">
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-sm text-gray-400">Progress</span>
                                            <span class="text-sm font-bold" :class="getStatusColor(task.status).text">
                                                {{ calculateProgress(task) }}%
                                            </span>
                                        </div>
                                        <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div class="h-full rounded-full transition-all duration-1000"
                                                :class="getStatusColor(task.status).progress"
                                                :style="{ width: calculateProgress(task) + '%' }"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Content -->
                                <div class="flex flex-col items-end gap-4">
                                    <span class="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
                                        :class="getStatusColor(task.status).badge">
                                        {{ task.status }}
                                    </span>

                                    <!-- Expand Icon -->
                                    <button class="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                                        <svg class="w-6 h-6 transition-transform duration-300"
                                            :class="{ 'rotate-180': task.expanded }" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Expandable Content -->
                        <transition name="expand">
                            <div v-if="task.expanded" class="border-t border-gray-700/50">
                                <div class="p-8 bg-black/30">
                                    <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                                        <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        Sub Tasks
                                    </h4>

                                    <div class="space-y-4">
                                        <div v-for="(sub, subIndex) in task.subTasks" :key="subIndex"
                                            class="flex items-center justify-between p-5 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group/subtask border border-gray-700/30">
                                            <div class="flex items-center gap-4 flex-1">
                                                <!-- Checkbox -->
                                                <div class="relative w-6 h-6 cursor-pointer"
                                                    @click="toggleSubtask(task, subIndex)">
                                                    <input type="checkbox" v-model="sub.done" class="peer sr-only" />
                                                    <div class="w-6 h-6 border-2 rounded-md transition-all"
                                                        :class="sub.done ? 'bg-green-500 border-green-500' : 'border-gray-600 group-hover/subtask:border-gray-500'">
                                                        <svg v-if="sub.done" class="w-full h-full text-white p-0.5"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <!-- Text Content -->
                                                <div class="flex-1">
                                                    <p class="font-semibold transition-all"
                                                        :class="sub.done ? 'line-through text-gray-500' : 'text-white'">
                                                        {{ sub.title }}
                                                    </p>
                                                    <p class="text-sm text-gray-400 mt-1">{{ sub.description }}</p>
                                                </div>

                                                <!-- Status Badge -->
                                                <span v-if="sub.done"
                                                    class="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-bold">
                                                    Completed
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Subtask Summary -->
                                    <div class="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                                        <div class="flex items-center justify-between text-sm">
                                            <span class="text-gray-400">Subtask Completion</span>
                                            <span class="font-bold text-white">
                                                {{ completedSubtasks(task) }} / {{ task.subTasks.length }} tasks
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- Connecting Line (except for last item) -->
                    <div v-if="index < progressList.length - 1"
                        class="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-gray-700 to-transparent"></div>
                </div>
            </div>
        </div>

        <!-- BOTTOM CTA -->
        <div class="bg-gradient-to-r from-red-600 to-orange-600 py-20">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-4xl md:text-5xl font-black mb-4">Stay Updated</h2>
                <p class="text-xl mb-8 opacity-90">
                    Follow our journey as we build the future of racing
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button
                        class="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all hover:scale-105">
                        Subscribe to Updates
                    </button>
                    <button
                        class="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-all hover:scale-105">
                        View Timeline
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "ProgressPage",

    data() {
        return {
            progressList: [
                {
                    title: "Chassis Design",
                    description: "Frame, monocoque structure, safety cells.",
                    status: "In Progress",
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                    expanded: false,
                    subTasks: [
                        { title: "3D CAD Modeling", description: "Complete SolidWorks model design", done: true },
                        { title: "Material Testing", description: "Carbon fiber durability analysis", done: true },
                        { title: "Crash Simulation", description: "High-speed impact FEA analysis", done: false },
                        { title: "Weight Optimization", description: "Reduce chassis weight while maintaining strength", done: false },
                    ],
                },

                {
                    title: "Aerodynamics",
                    description: "Front wing, rear wing, diffuser optimization.",
                    status: "In Progress",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    expanded: false,
                    subTasks: [
                        { title: "CFD Simulation", description: "Computational fluid dynamics analysis", done: true },
                        { title: "Wind Tunnel Testing", description: "1:5 scale model validation", done: false },
                        { title: "Diffuser Design", description: "Optimize rear downforce generation", done: false },
                    ],
                },

                {
                    title: "Powertrain Development",
                    description: "Engine, cooling system, power mapping.",
                    status: "In Progress",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    expanded: false,
                    subTasks: [
                        { title: "Engine Block Assembly", description: "Complete mechanical build", done: true },
                        { title: "Cooling System Testing", description: "Thermal regulation validation", done: true },
                        { title: "Dyno Tuning", description: "Optimize power output and fuel efficiency", done: false },
                        { title: "ECU Programming", description: "Engine management system setup", done: false },
                    ],
                },

                {
                    title: "Electronics & Sensors",
                    description: "Telemetry, ECU wiring, temperature sensors.",
                    status: "Done",
                    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                    expanded: false,
                    subTasks: [
                        { title: "ECU Setup", description: "Microcontroller programming complete", done: true },
                        { title: "Sensor Calibration", description: "All sensors tested and calibrated", done: true },
                        { title: "Telemetry System", description: "Real-time data acquisition system", done: true },
                    ],
                },

                {
                    title: "Suspension System",
                    description: "Independent suspension, dampers, spring rates.",
                    status: "Pending",
                    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                    expanded: false,
                    subTasks: [
                        { title: "Suspension Geometry", description: "Design double wishbone layout", done: false },
                        { title: "Damper Selection", description: "Choose appropriate shock absorbers", done: false },
                        { title: "Spring Rate Calculation", description: "Optimize for track conditions", done: false },
                    ],
                },

                {
                    title: "Braking System",
                    description: "Disc brakes, calipers, brake-by-wire technology.",
                    status: "Pending",
                    icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    expanded: false,
                    subTasks: [
                        { title: "Brake Disc Design", description: "Carbon-ceramic disc specification", done: false },
                        { title: "Caliper Integration", description: "Mount 6-piston calipers", done: false },
                        { title: "Brake Balance Testing", description: "Front-rear distribution optimization", done: false },
                    ],
                },
            ],
        };
    },

    computed: {
        overallProgress() {
            const totalSubtasks = this.progressList.reduce((sum, task) => sum + task.subTasks.length, 0);
            const completedSubtasks = this.progressList.reduce(
                (sum, task) => sum + task.subTasks.filter(s => s.done).length,
                0
            );
            return Math.round((completedSubtasks / totalSubtasks) * 100);
        },

        completedTasks() {
            return this.progressList.filter(task => task.status === 'Done').length;
        },

        inProgressTasks() {
            return this.progressList.filter(task => task.status === 'In Progress').length;
        },

        pendingTasks() {
            return this.progressList.filter(task => task.status === 'Pending').length;
        },
    },

    methods: {
        completedSubtasks(task) {
            return task.subTasks.filter((s) => s.done).length;
        },

        calculateProgress(task) {
            const completed = this.completedSubtasks(task);
            return Math.round((completed / task.subTasks.length) * 100);
        },

        toggleTask(index) {
            this.progressList[index].expanded = !this.progressList[index].expanded;
        },

        toggleSubtask(task, subIndex) {
            task.subTasks[subIndex].done = !task.subTasks[subIndex].done;
        },

        getStatusColor(status) {
            const colors = {
                'Done': {
                    badge: 'bg-green-500/20 text-green-500',
                    bg: 'bg-green-500/20',
                    text: 'text-green-500',
                    progress: 'bg-gradient-to-r from-green-500 to-emerald-500'
                },
                'In Progress': {
                    badge: 'bg-yellow-500/20 text-yellow-500',
                    bg: 'bg-yellow-500/20',
                    text: 'text-yellow-500',
                    progress: 'bg-gradient-to-r from-yellow-500 to-orange-500'
                },
                'Pending': {
                    badge: 'bg-gray-500/20 text-gray-400',
                    bg: 'bg-gray-500/20',
                    text: 'text-gray-400',
                    progress: 'bg-gradient-to-r from-gray-500 to-gray-600'
                }
            };
            return colors[status] || colors['Pending'];
        }
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

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
}

.animation-delay-100 {
    animation-delay: 0.1s;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: fadeInUp;
    animation-duration: 0.6s;
}

.animation-delay-200 {
    animation-delay: 0.2s;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: fadeInUp;
    animation-duration: 0.6s;
}

.animation-delay-300 {
    animation-delay: 0.3s;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: fadeInUp;
    animation-duration: 0.6s;
}

.animation-delay-400 {
    animation-delay: 0.4s;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: fadeInUp;
    animation-duration: 0.6s;
}

.animation-delay-500 {
    animation-delay: 0.5s;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: fadeInUp;
    animation-duration: 0.6s;
}

.animation-delay-1000 {
    animation-delay: 1s;
}

/* Expand/Collapse Animation */
.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease;
    max-height: 1000px;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>