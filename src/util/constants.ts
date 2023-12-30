import { BarChartHorizontalBig, LayoutDashboard, Settings } from "lucide-react"

export const pricingPlan = [
    {
        id: 1,
        name: 'Basic Plan',
        subtitle: 'Best for learning how to use our app',
        price: '$4',
        properties: [
            {
                name: 'Up to 10 graphs',
                isActive: true,
            },
            {
                name: 'Up to 500 chatbot queries',
                isActive: true,
            },
            {
                name: 'Upload custom PDFs',
                isActive: false,
            },
            {
                name: 'Email support',
                isActive: false,
            },
        ]
    },
    {
        id: 2,
        name: 'Pro Plan',
        subtitle: 'Best for growing your user base',
        price: '$8',
        properties: [
            {
                name: 'Up to 50 graphs',
                isActive: true,
            },
            {
                name: 'Up to 1000 chatbot queries',
                isActive: true,
            },
            {
                name: 'Upload custom PDFs',
                isActive: false,
            },
            {
                name: 'Email + live chat support',
                isActive: false,
            },
        ]
    },
    {
        id: 3,
        name: 'Enterprise Plan',
        subtitle: 'Best for scaling up your real life projects',
        price: 'Contact us',
        properties: [
            {
                name: 'Unlimited graphs',
                isActive: true,
            },
            {
                name: 'Unlimited chatbot queries',
                isActive: true,
            },
            {
                name: 'Upload custom PDFs',
                isActive: true,
            },
            {
                name: '24/7 call + email support',
                isActive: true,
            },
        ]
    }
]

export const sidebarMenu = [
    {
        name: 'Dashboard',
        redirectTo: '/profile',
        Icon: LayoutDashboard
    },
    {
        name: 'Graphs',
        redirectTo: '/profile/graphs',
        Icon: BarChartHorizontalBig
    },
    {
        name: 'Settings',
        redirectTo: '/profile/settings',
        Icon: Settings
    },
];

export const userPersonalDetail = [
    {
        name: 'Name',
        value: 'Amrish Kumar',
        type: 'text'
    },
    {
        name: 'Bio',
        value: 'AI Influencer',
        type: 'text'
    },
    {
        name: 'Password',
        value: 'password',
        type: 'password'
    },
    {
        name: 'Email',
        value: 'amrish@gmail.com',
        type: 'email'
    }
]