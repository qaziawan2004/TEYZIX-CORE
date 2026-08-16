export const productFeatures = [
  {
    id: 1,
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Built with performance in mind. Your users will love the speed.',
    color: 'blue',
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption.',
    color: 'green',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Beautiful UI',
    description: 'Modern, clean, and customizable design system.',
    color: 'purple',
  },
  {
    id: 4,
    icon: '📱',
    title: 'Responsive',
    description: 'Works seamlessly on all devices – desktop, tablet, and mobile.',
    color: 'orange',
  },
  {
    id: 5,
    icon: '🔌',
    title: 'Easy Integrations',
    description: 'Connect with your favorite tools and services.',
    color: 'pink',
  },
  {
    id: 6,
    icon: '📊',
    title: 'Analytics Ready',
    description: 'Built-in analytics to track user behavior and growth.',
    color: 'indigo',
  },
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams just getting started.',
    features: ['5 Team Members', '10GB Storage', 'Basic Support', 'API Access', 'Community Forum'],
    isPopular: false,
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 79,
    description: 'For growing teams that need more power.',
    features: ['20 Team Members', '50GB Storage', 'Priority Support', 'Advanced API Access', 'Team Collaboration', 'Custom Integrations'],
    isPopular: true,
    buttonText: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations with advanced needs.',
    features: ['Unlimited Team Members', '500GB Storage', '24/7 Dedicated Support', 'Full API Access', 'Custom Training', 'SLA Guarantee', 'White Label Option'],
    isPopular: false,
    buttonText: 'Contact Sales',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'This product completely transformed our workflow. We saw a 300% increase in productivity within the first month!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateLab',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    text: 'The best investment we made this year. The team behind this is truly exceptional.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CTO, CloudSphere',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4,
    text: 'Reliable, fast, and incredibly intuitive. Our developers love using this platform.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder, AI Solutions',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
    text: "Game-changer for our business. We've been able to scale faster than ever before.",
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Head of Design, StudioX',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'Beautiful design and rock-solid performance. Exactly what we were looking for.',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'What is this product and how does it work?',
    answer: 'This is a modern platform designed to help teams build and scale their products faster. It combines powerful features with an intuitive interface to streamline your workflow.',
  },
  {
    id: 2,
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial on our Professional plan. No credit card required. You can cancel anytime during the trial period.',
  },
  {
    id: 3,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans.',
  },
  {
    id: 4,
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your billing cycle.',
  },
  {
    id: 5,
    question: 'Is my data secure and private?',
    answer: 'Yes, we take security seriously. All data is encrypted at rest and in transit. We comply with GDPR and CCPA regulations. Your data is never shared with third parties.',
  },
  {
    id: 6,
    question: 'Do you offer customer support?',
    answer: 'Yes, all plans include customer support. Starter and Professional plans get email support, and Enterprise plans get 24/7 dedicated support with a personal account manager.',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Boost Your Team's Productivity",
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    excerpt: 'Discover practical strategies to help your team work smarter, not harder. These proven techniques will transform your workflow.',
    date: '2026-06-28',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Future of AI in Product Development',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    excerpt: "How artificial intelligence is revolutionizing the way we build and ship products. Learn what's coming next.",
    date: '2026-06-22',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Design Systems: A Complete Guide for 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800',
    excerpt: 'Everything you need to know about building and maintaining a design system that scales with your team.',
    date: '2026-06-15',
    readTime: '6 min read',
  },
];

export const contactInfo = {
  address: '123 Tech Park, Silicon Valley, CA 94025',
  phone: '+1 (555) 123-4567',
  email: 'qaziawan@gmail.com',
  socialLinks: {
    twitter: 'https://twitter.com/product',
    facebook: 'https://facebook.com/product',
    instagram: 'https://instagram.com/product',
    linkedin: 'https://linkedin.com/company/product',
    github: 'https://github.com/product',
  },
};

export const featureComparison = {
  headers: ['Feature', 'Starter', 'Professional', 'Enterprise'],
  rows: [
    { feature: 'Team Members', values: ['5', '20', 'Unlimited'] },
    { feature: 'Storage', values: ['10GB', '50GB', '500GB'] },
    { feature: 'API Access', values: ['✅', '✅', '✅'] },
    { feature: 'Priority Support', values: ['❌', '✅', '✅'] },
    { feature: 'Custom Integrations', values: ['❌', '✅', '✅'] },
    { feature: '24/7 Dedicated Support', values: ['❌', '❌', '✅'] },
    { feature: 'SLA Guarantee', values: ['❌', '❌', '✅'] },
    { feature: 'White Label Option', values: ['❌', '❌', '✅'] },
    { feature: 'Custom Training', values: ['❌', '❌', '✅'] },
  ],
};