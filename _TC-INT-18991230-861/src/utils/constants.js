export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams just getting started',
    features: [
      '5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'API access'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Everything you need to scale your business',
    features: [
      '20 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      '1TB storage',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom API access',
      'SLA guarantee',
      'On-premise deployment'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export const FEATURES = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Built with performance in mind. Experience blazing fast load times.'
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Enterprise-grade security with end-to-end encryption.'
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Real-time insights with beautiful, actionable visualizations.'
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Work together seamlessly with built-in collaboration tools.'
  },
  {
    icon: '🔌',
    title: 'Integrations',
    description: 'Connect with your favorite tools and services.'
  },
  {
    icon: '📱',
    title: 'Mobile Ready',
    description: 'Full-featured mobile apps for iOS and Android.'
  }
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'This platform transformed how we manage our operations. The team collaboration features are unmatched.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, CloudWorks',
    content: 'The analytics dashboard gives us real-time insights that help us make better decisions faster.',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO, DataFlow Solutions',
    content: 'Security and performance are top-notch. Our team feels confident using this platform every day.',
    rating: 5,
    avatar: 'ER'
  }
]

export const FAQS = [
  {
    question: 'What is the minimum team size?',
    answer: 'You can start with as few as 2 team members. Our platform is flexible and scales with your needs.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial on all plans. No credit card required to get started.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. You can cancel or change your plan at any time from your dashboard settings.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees or hidden charges. You only pay for what you use.'
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes, we work with enterprise clients to provide custom solutions tailored to their specific needs.'
  }
]