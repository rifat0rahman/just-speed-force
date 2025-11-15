<template>
    <section class="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
        <!-- HERO SECTION -->
        <div class="relative overflow-hidden py-32 px-6">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0"
                    style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80'); background-size: cover; background-position: center;">
                </div>
            </div>

            <!-- Animated Background Elements -->
            <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000">
            </div>

            <div class="relative container mx-auto text-center max-w-5xl animate-fade-in-up">
                <div class="mb-6 inline-block px-4 py-2 bg-green-600 text-xs font-bold tracking-widest rounded-full">
                    FINANCIAL TRANSPARENCY
                </div>
                <h1 class="text-6xl md:text-7xl font-black uppercase tracking-tight mb-6">
                    <span class="block">Financial</span>
                    <span
                        class="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 animate-gradient">
                        Transparency
                    </span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Complete visibility into our finances. Every dollar accounted for, every transaction visible.
                </p>
            </div>
        </div>

        <!-- FINANCIAL SUMMARY -->
        <div class="container mx-auto px-6 -mt-16 mb-20 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-green-500/20 hover:border-green-500/50 transition-all">
                    <div class="text-green-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">৳{{ totalRevenue.toLocaleString() }}</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">Total Revenue</div>
                </div>

                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-red-500/20 hover:border-red-500/50 transition-all">
                    <div class="text-red-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">৳{{ totalExpenses.toLocaleString() }}</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">Total Expenses</div>
                </div>

                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                    <div class="text-blue-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">৳{{ currentBalance.toLocaleString() }}</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">Current Balance</div>
                </div>

                <div
                    class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <div class="text-purple-500 mb-4">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <div class="text-4xl font-black mb-2">{{ transactions.length }}</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wider">Total Transactions</div>
                </div>
            </div>
        </div>

        <!-- FILTERS & SEARCH -->
        <div class="container mx-auto px-6 mb-12">
            <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Search -->
                    <div class="relative">
                        <input v-model="searchQuery" type="text" placeholder="Search transactions..."
                            class="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors" />
                        <svg class="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <!-- Type Filter -->
                    <select v-model="filterType"
                        class="bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors">
                        <option value="all">All Types</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>

                    <!-- Category Filter -->
                    <select v-model="filterCategory"
                        class="bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors">
                        <option value="all">All Categories</option>
                        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                    </select>

                    <!-- Sort -->
                    <select v-model="sortOrder"
                        class="bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none transition-colors">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="highest">Highest Amount</option>
                        <option value="lowest">Lowest Amount</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- TRANSACTIONS LIST -->
        <div class="container mx-auto px-6 pb-20">
            <div class="text-center mb-12">
                <div
                    class="inline-block px-4 py-2 bg-green-600/20 text-green-500 text-xs font-bold tracking-widest rounded-full border border-green-600/30 mb-6">
                    TRANSACTION HISTORY
                </div>
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    All <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Transactions</span>
                </h2>
                <p class="text-gray-400">{{ filteredTransactions.length }} transactions found</p>
            </div>

            <div class="max-w-6xl mx-auto space-y-4">
                <div v-for="(transaction, index) in filteredTransactions" :key="index"
                    class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 hover:shadow-2xl transition-all duration-500 border"
                    :class="transaction.type === 'income' ? 'border-green-500/20 hover:border-green-500/50' : 'border-red-500/20 hover:border-red-500/50'">
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        :class="transaction.type === 'income' ? 'bg-gradient-to-br from-green-600/10 to-emerald-600/10' : 'bg-gradient-to-br from-red-600/10 to-orange-600/10'">
                    </div>

                    <div class="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <!-- Icon & Date -->
                        <div class="flex items-center gap-4 flex-shrink-0">
                            <div class="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                                :class="transaction.type === 'income' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path v-if="transaction.type === 'income'" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                </svg>
                            </div>

                            <div class="text-left">
                                <div class="text-sm text-gray-400">{{ transaction.date }}</div>
                                <div class="text-xs text-gray-500">{{ transaction.time }}</div>
                            </div>
                        </div>

                        <!-- Transaction Details -->
                        <div class="flex-1">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div>
                                    <h3 class="text-xl font-bold mb-1">{{ transaction.description }}</h3>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="px-3 py-1 rounded-full text-xs font-bold"
                                            :class="transaction.type === 'income' ? 'bg-green-500/20 text-green-500 border border-green-500/30' : 'bg-red-500/20 text-red-500 border border-red-500/30'">
                                            {{ transaction.category }}
                                        </span>
                                        <span class="text-xs text-gray-500">{{ transaction.method }}</span>
                                    </div>
                                </div>

                                <div class="text-right">
                                    <div class="text-3xl font-black"
                                        :class="transaction.type === 'income' ? 'text-green-500' : 'text-red-500'">
                                        {{ transaction.type === 'income' ? '+' : '-' }}৳{{
                                        transaction.amount.toLocaleString() }}
                                    </div>
                                    <div v-if="transaction.reference" class="text-xs text-gray-500 mt-1">
                                        Ref: {{ transaction.reference }}
                                    </div>
                                </div>
                            </div>

                            <!-- Additional Info -->
                            <div v-if="transaction.notes" class="mt-4 p-3 bg-gray-700/30 rounded-lg">
                                <p class="text-sm text-gray-400">{{ transaction.notes }}</p>
                            </div>
                        </div>

                        <!-- Status Badge -->
                        <div class="flex-shrink-0">
                            <span class="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
                                :class="getStatusClass(transaction.status)">
                                {{ transaction.status }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="filteredTransactions.length === 0" class="text-center py-20">
                    <svg class="w-24 h-24 mx-auto text-gray-600 mb-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 class="text-2xl font-bold mb-2">No Transactions Found</h3>
                    <p class="text-gray-400">Try adjusting your filters or search query</p>
                </div>
            </div>
        </div>

        <!-- EXPENSE BREAKDOWN -->
        <div class="bg-gradient-to-b from-black to-gray-900 py-32">
            <div class="container mx-auto px-6">
                <div class="text-center mb-20">
                    <div
                        class="inline-block px-4 py-2 bg-green-600/20 text-green-500 text-xs font-bold tracking-widest rounded-full border border-green-600/30 mb-6">
                        SPENDING ANALYSIS
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black mb-6">
                        Expense <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Breakdown</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div v-for="(item, index) in expenseBreakdown" :key="index"
                        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <div class="relative">
                            <div class="flex items-center justify-between mb-6">
                                <div class="text-red-500">
                                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            :d="item.icon" />
                                    </svg>
                                </div>
                                <div class="text-right">
                                    <div class="text-3xl font-black text-red-500">৳{{ item.amount.toLocaleString() }}
                                    </div>
                                    <div class="text-sm text-gray-400">{{ item.percentage }}%</div>
                                </div>
                            </div>

                            <h3 class="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                                {{ item.category }}
                            </h3>
                            <p class="text-gray-400 text-sm mb-4">{{ item.description }}</p>

                            <!-- Progress Bar -->
                            <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-1000"
                                    :style="{ width: item.percentage + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- DOWNLOAD REPORT CTA -->
        <div class="relative py-32 overflow-hidden bg-black">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0"
                    style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80'); background-size: cover; background-position: center;">
                </div>
            </div>

            <div class="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
                class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000">
            </div>

            <div class="relative container mx-auto px-6 text-center">
                <div
                    class="inline-block px-4 py-2 bg-green-600/20 text-green-500 text-xs font-bold tracking-widest rounded-full border border-green-600/30 mb-8">
                    COMPLETE RECORDS
                </div>
                <h2 class="text-5xl md:text-6xl font-black mb-6">
                    Download <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Financial
                        Reports</span>
                </h2>
                <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
                    Access detailed financial reports and transaction history for complete transparency.
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button
                        class="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
                        <span class="relative z-10 flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Full Report (PDF)
                        </span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                        </div>
                    </button>
                    <button
                        class="px-10 py-5 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105">
                        Export to Excel
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "TransparencyPage",

    data() {
        return {
            searchQuery: '',
            filterType: 'all',
            filterCategory: 'all',
            sortOrder: 'newest',

            transactions: [
                {
                    date: 'Nov 10, 2024',
                    time: '10:30 AM',
                    description: 'Sponsorship Payment - Red Bull Racing',
                    amount: 50000,
                    type: 'income',
                    category: 'Sponsorship',
                    method: 'Bank Transfer',
                    reference: 'SP-2024-001',
                    status: 'Completed',
                    notes: 'Annual sponsorship agreement Q4 2024'
                },
                {
                    date: 'Nov 08, 2024',
                    time: '02:15 PM',
                    description: 'Carbon Fiber Materials Purchase',
                    amount: 12500,
                    type: 'expense',
                    category: 'Materials',
                    method: 'Credit Card',
                    reference: 'PO-2024-089',
                    status: 'Completed',
                    notes: 'High-grade carbon fiber sheets for chassis construction'
                },
                {
                    date: 'Nov 05, 2024',
                    time: '09:45 AM',
                    description: 'Wind Tunnel Testing Fee',
                    amount: 8500,
                    type: 'expense',
                    category: 'Testing',
                    method: 'Bank Transfer',
                    reference: 'INV-WT-445',
                    status: 'Completed',
                    notes: '20 hours of wind tunnel testing at 1:5 scale'
                },
                {
                    date: 'Nov 03, 2024',
                    time: '11:20 AM',
                    description: 'University Grant Disbursement',
                    amount: 25000,
                    type: 'income',
                    category: 'Grant',
                    method: 'Bank Transfer',
                    reference: 'GR-UNIV-2024',
                    status: 'Completed',
                    notes: 'Engineering department research grant'
                },
                {
                    date: 'Oct 28, 2024',
                    time: '03:30 PM',
                    description: 'CNC Machining Services',
                    amount: 6800,
                    type: 'expense',
                    category: 'Manufacturing',
                    method: 'Bank Transfer',
                    reference: 'PO-2024-082',
                    status: 'Completed',
                    notes: 'Custom suspension components machining'
                },
                {
                    date: 'Oct 25, 2024',
                    time: '01:00 PM',
                    description: 'Crowdfunding Campaign - Batch 3',
                    amount: 15000,
                    type: 'income',
                    category: 'Crowdfunding',
                    method: 'PayPal',
                    reference: 'CF-2024-003',
                    status: 'Completed',
                    notes: 'Community support campaign October'
                },
                {
                    date: 'Oct 22, 2024',
                    time: '10:15 AM',
                    description: 'Electronics Components Order',
                    amount: 4200,
                    type: 'expense',
                    category: 'Electronics',
                    method: 'Credit Card',
                    reference: 'PO-2024-076',
                    status: 'Completed',
                    notes: 'Sensors, ECU modules, and wiring harnesses'
                },
                {
                    date: 'Oct 18, 2024',
                    time: '04:45 PM',
                    description: 'Team Travel - Competition',
                    amount: 5500,
                    type: 'expense',
                    category: 'Travel',
                    method: 'Bank Transfer',
                    reference: 'TR-2024-04',
                    status: 'Completed',
                    notes: 'Transportation and accommodation for 12 team members'
                },
                {
                    date: 'Oct 15, 2024',
                    time: '09:00 AM',
                    description: 'Sponsorship Payment - Mercedes-Benz',
                    amount: 35000,
                    type: 'income',
                    category: 'Sponsorship',
                    method: 'Bank Transfer',
                    reference: 'SP-2024-002',
                    status: 'Completed',
                    notes: 'Technical partnership sponsorship'
                },
                {
                    date: 'Oct 12, 2024',
                    time: '02:30 PM',
                    description: 'Software Licenses Annual Renewal',
                    amount: 3800,
                    type: 'expense',
                    category: 'Software',
                    method: 'Credit Card',
                    reference: 'SUB-2024-SW',
                    status: 'Completed',
                    notes: 'ANSYS, SolidWorks, and MATLAB licenses'
                },
                {
                    date: 'Oct 08, 2024',
                    time: '11:45 AM',
                    description: 'Engine Components Purchase',
                    amount: 18500,
                    type: 'expense',
                    category: 'Powertrain',
                    method: 'Bank Transfer',
                    reference: 'PO-2024-068',
                    status: 'Completed',
                    notes: 'Turbocharger, fuel system, and cooling components'
                },
                {
                    date: 'Oct 05, 2024',
                    time: '03:15 PM',
                    description: 'Workshop Equipment Lease',
                    amount: 2500,
                    type: 'expense',
                    category: 'Facilities',
                    method: 'Bank Transfer',
                    reference: 'LEASE-2024-Q4',
                    status: 'Completed',
                    notes: 'Monthly workshop space and equipment rental'
                }
            ],

            expenseBreakdown: [
                {
                    category: 'Materials',
                    amount: 28500,
                    percentage: 35,
                    description: 'Carbon fiber, alloys, composites',
                    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                },
                {
                    category: 'Testing & Research',
                    amount: 18200,
                    percentage: 22,
                    description: 'Wind tunnel, dyno, track testing',
                    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                },
                {
                    category: 'Manufacturing',
                    amount: 15800,
                    percentage: 19,
                    description: 'CNC machining, 3D printing, assembly',
                    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                },
                {
                    category: 'Electronics',
                    amount: 9600,
                    percentage: 12,
                    description: 'Sensors, ECU, telemetry systems',
                    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                },
                {
                    category: 'Software & Tools',
                    amount: 6400,
                    percentage: 8,
                    description: 'CAD, CFD, simulation licenses',
                    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                },
                {
                    category: 'Other Expenses',
                    amount: 3500,
                    percentage: 4,
                    description: 'Travel, facilities, miscellaneous',
                    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                }
            ]
        };
    },

    computed: {
        totalRevenue() {
            return this.transactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0);
        },

        totalExpenses() {
            return this.transactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0);
        },

        currentBalance() {
            return this.totalRevenue - this.totalExpenses;
        },

        categories() {
            const cats = new Set(this.transactions.map(t => t.category));
            return Array.from(cats).sort();
        },

        filteredTransactions() {
            let filtered = this.transactions;

            // Filter by search query
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(t =>
                    t.description.toLowerCase().includes(query) ||
                    t.category.toLowerCase().includes(query) ||
                    t.reference.toLowerCase().includes(query)
                );
            }

            // Filter by type
            if (this.filterType !== 'all') {
                filtered = filtered.filter(t => t.type === this.filterType);
            }

            // Filter by category
            if (this.filterCategory !== 'all') {
                filtered = filtered.filter(t => t.category === this.filterCategory);
            }

            // Sort
            switch (this.sortOrder) {
                case 'newest':
                    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'oldest':
                    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
                    break;
                case 'highest':
                    filtered.sort((a, b) => b.amount - a.amount);
                    break;
                case 'lowest':
                    filtered.sort((a, b) => a.amount - b.amount);
                    break;
            }

            return filtered;
        }
    },

    methods: {
        getStatusClass(status) {
            const classes = {
                'Completed': 'bg-green-500/20 text-green-500',
                'Pending': 'bg-yellow-500/20 text-yellow-500',
                'Failed': 'bg-red-500/20 text-red-500'
            };
            return classes[status] || 'bg-gray-500/20 text-gray-400';
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
