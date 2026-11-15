
const jobs = [
  {
    id: 1,
    category: 'Programming',
    title: 'Build a Professional Business Website',
    description: 'We need a skilled developer to create a modern and responsive business website.',
    fullDescription: 'We are looking for an experienced web developer to build a professional and modern business website. The website should be responsive and work perfectly on desktop, tablet, and mobile devices. The developer should create a clean user interface, fast-loading pages, and an easy-to-use design.',
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Responsive Design'],
    budget: 300,
    type: 'Fixed Price',
    experience: 'Expert',
    time: '2 hours ago',
    duration: '1 - 3 Months',
    location: 'Worldwide',
    proposals: 15,
    responsibilities: [
      'Build a modern business website.',
      'Create responsive pages for all devices.',
      'Write clean and organized code.',
      'Test the website before delivery.'
    ],
    client: {
      name: 'John Doe',
      country: 'United States',
      initials: 'JD',
      rating: '4.9 / 5',
      totalJobs: 25,
      memberSince: 2024
    }
  },
  {
    id: 2,
    category: 'Graphic Design',
    title: 'Design a Modern Company Logo',
    description: 'We need a creative designer to create a professional company logo.',
    fullDescription: 'We are looking for a talented graphic designer to create a unique and memorable logo for our company. The design should be modern, professional, and suitable for both digital and print use.',
    skills: ['Photoshop', 'Illustrator', 'Logo Design', 'Branding'],
    budget: 80,
    type: 'Fixed Price',
    experience: 'Intermediate',
    time: '5 hours ago',
    duration: '1 - 2 Weeks',
    location: 'Remote',
    proposals: 8,
    responsibilities: [
      'Create original logo concepts.',
      'Provide professional logo revisions.',
      'Deliver high-quality source files.',
      'Prepare versions for digital and print use.'
    ],
    client: {
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      initials: 'SJ',
      rating: '4.8 / 5',
      totalJobs: 12,
      memberSince: 2023
    }
  },
  {
    id: 3,
    category: 'Writing',
    title: 'English to Pashto Translation',
    description: 'Translate English documents into Pashto.',
    fullDescription: 'We need a reliable translator who can translate English documents into clear, natural, and accurate Pashto. The translator should maintain the original meaning and deliver the work on time.',
    skills: ['Translation', 'English', 'Pashto', 'Proofreading'],
    budget: 50,
    type: 'Fixed Price',
    experience: 'Entry Level',
    time: '1 day ago',
    duration: '1 Week',
    location: 'Remote',
    proposals: 5,
    responsibilities: [
      'Translate English documents into Pashto.',
      'Maintain the original meaning.',
      'Check grammar and spelling.',
      'Deliver the translation on time.'
    ],
    client: {
      name: 'Michael Smith',
      country: 'Canada',
      initials: 'MS',
      rating: '4.7 / 5',
      totalJobs: 9,
      memberSince: 2025
    }
  },
  {
    id: 4,
    category: 'Programming',
    title: 'Develop an E-commerce Website',
    description: 'Build an online store where customers can browse and purchase products.',
    fullDescription: 'We need a developer to create a modern e-commerce website with product listings, shopping cart, and responsive design.',
    skills: ['React', 'JavaScript', 'Node.js', 'CSS'],
    budget: 800,
    type: 'Fixed Price',
    experience: 'Intermediate',
    time: '3 hours ago',
    duration: '1 - 3 Months',
    location: 'Worldwide',
    proposals: 12,
    responsibilities: [
      'Build product listing pages.',
      'Create a shopping cart.',
      'Make the website responsive.',
      'Test the complete website.'
    ],
    client: {
      name: 'David Wilson',
      country: 'Australia',
      initials: 'DW',
      rating: '4.9 / 5',
      totalJobs: 18,
      memberSince: 2022
    }
  },
  {
    id: 5,
    category: 'Digital Marketing',
    title: 'Manage Social Media Accounts',
    description: 'We need someone to manage our business social media accounts.',
    fullDescription: 'We are looking for a social media manager to create content, schedule posts, and help grow our online audience.',
    skills: ['Facebook', 'Instagram', 'Content Creation', 'Marketing'],
    budget: 250,
    type: 'Fixed Price',
    experience: 'Entry Level',
    time: '6 hours ago',
    duration: '1 Month',
    location: 'Remote',
    proposals: 10,
    responsibilities: [
      'Create social media content.',
      'Schedule regular posts.',
      'Respond to audience comments.',
      'Prepare monthly performance reports.'
    ],
    client: {
      name: 'Emma Brown',
      country: 'United States',
      initials: 'EB',
      rating: '4.8 / 5',
      totalJobs: 14,
      memberSince: 2023
    }
  },
  {
    id: 6,
    category: 'Graphic Design',
    title: 'Create Professional Website Banners',
    description: 'Design attractive banners for our company website.',
    fullDescription: 'We need a graphic designer to create professional website banners that match our brand identity and attract customers.',
    skills: ['Photoshop', 'Banner Design', 'Illustrator', 'Creativity'],
    budget: 120,
    type: 'Fixed Price',
    experience: 'Intermediate',
    time: '8 hours ago',
    duration: '1 Week',
    location: 'Remote',
    proposals: 7,
    responsibilities: [
      'Design website banners.',
      'Follow our brand guidelines.',
      'Provide different banner sizes.',
      'Deliver editable design files.'
    ],
    client: {
      name: 'Robert Taylor',
      country: 'Germany',
      initials: 'RT',
      rating: '4.6 / 5',
      totalJobs: 11,
      memberSince: 2024
    }
  },
  {
    id: 7,
    category: 'Writing',
    title: 'Write SEO Blog Articles',
    description: 'Write informative and SEO-friendly articles for our website.',
    fullDescription: 'We are looking for a content writer who can research topics and write engaging articles optimized for search engines.',
    skills: ['SEO Writing', 'Research', 'Blog Writing', 'English'],
    budget: 150,
    type: 'Fixed Price',
    experience: 'Intermediate',
    time: '10 hours ago',
    duration: '2 Weeks',
    location: 'Worldwide',
    proposals: 9,
    responsibilities: [
      'Research assigned topics.',
      'Write original blog articles.',
      'Use relevant keywords naturally.',
      'Proofread articles before submission.'
    ],
    client: {
      name: 'James Anderson',
      country: 'United Kingdom',
      initials: 'JA',
      rating: '4.9 / 5',
      totalJobs: 20,
      memberSince: 2021
    }
  },
  {
    id: 8,
    category: 'Programming',
    title: 'Fix Bugs in an Existing React App',
    description: 'Looking for a React developer to fix issues in our existing application.',
    fullDescription: 'We need an experienced React developer to investigate and resolve bugs, improve performance, and ensure the application works correctly.',
    skills: ['React', 'JavaScript', 'Debugging', 'API'],
    budget: 500,
    type: 'Hourly',
    experience: 'Expert',
    time: '12 hours ago',
    duration: '2 Weeks',
    location: 'Worldwide',
    proposals: 6,
    responsibilities: [
      'Identify existing application bugs.',
      'Fix React component issues.',
      'Improve application performance.',
      'Test all important features.'
    ],
    client: {
      name: 'Daniel White',
      country: 'Canada',
      initials: 'DW',
      rating: '4.7 / 5',
      totalJobs: 16,
      memberSince: 2022
    }
  },
  {
    id: 9,
    category: 'Digital Marketing',
    title: 'Improve Google Search Rankings',
    description: 'Help our website improve its visibility in Google search results.',
    fullDescription: 'We need an SEO specialist to review our website, identify improvement opportunities, and create an SEO strategy.',
    skills: ['SEO', 'Google Analytics', 'Keyword Research', 'Marketing'],
    budget: 600,
    type: 'Hourly',
    experience: 'Expert',
    time: '1 day ago',
    duration: '1 Month',
    location: 'Remote',
    proposals: 13,
    responsibilities: [
      'Perform website SEO audits.',
      'Research relevant keywords.',
      'Improve on-page SEO.',
      'Track search performance.'
    ],
    client: {
      name: 'Olivia Martin',
      country: 'United States',
      initials: 'OM',
      rating: '4.9 / 5',
      totalJobs: 30,
      memberSince: 2020
    }
  },
  {
    id: 10,
    category: 'Graphic Design',
    title: 'Design a Mobile App Interface',
    description: 'Create a modern and user-friendly interface for a mobile application.',
    fullDescription: 'We are looking for a UI/UX designer to design attractive mobile app screens and create a consistent user experience.',
    skills: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
    budget: 450,
    type: 'Fixed Price',
    experience: 'Intermediate',
    time: '2 days ago',
    duration: '1 Month',
    location: 'Worldwide',
    proposals: 11,
    responsibilities: [
      'Design mobile application screens.',
      'Create interactive prototypes.',
      'Follow modern design principles.',
      'Deliver editable Figma files.'
    ],
    client: {
      name: 'Sophia Clark',
      country: 'France',
      initials: 'SC',
      rating: '4.8 / 5',
      totalJobs: 19,
      memberSince: 2023
    }
  }
]

export default jobs
