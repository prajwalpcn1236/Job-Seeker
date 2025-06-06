import { data } from "autoprefixer";
import {
    WhatsApp,
    Twitter,
    Instagram,
    Spotify,
    Linkedin,
    Youtube,
    Google,
    Facebook,
  } from "../assets";
  
  export const jobTypes = ["Full-Time", "Part-Time", "Contract", "Intern"];
  
  export const experience = [
    { title: "Under 1 Year", value: "0-1" },
    { title: "1 -2 Year", value: "1-2" },
    { title: "2 -6 Year", value: "2-6" },
    { title: "Over 6 Years", value: "6-20" },
  ];
  
  export const popularSearch = [
    "Software Engineer",
    "Developer",
    "Full-Stack Developer",
    "Data Scientist",
    "Remote",
    "Full-Time",
    "Sales",
    "Office Assistant",
  ];
  
  export const jobs = [
    {
      id: "1",
      company: {
        name: "Microsoft Corporation",
        location: "Bangalore, India",
        email: "support@microsoft.in",
        contact: "1800-102-1100",
        about:
          "Microsoft Corporation is a multinational technology company, headquartered in Redmond, Washington, with a significant presence in Bangalore, India. The company develops, manufactures, licenses, supports, and sells a range of software products and services.",
        profileUrl: Twitter,
      },
      jobTitle: "Software Engineer",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "15,00,000 INR per annum",
      detail: [
        {
          desc: "As a Software Engineer at Microsoft, you will work on cutting-edge technologies and be part of a global team. You will design, develop, and implement software solutions that meet the needs of our customers.",
          requirement:
            "Bachelor's degree in Computer Science or related field. 2+ years of experience in software development using C#, .NET, Java, or similar languages. Strong problem-solving skills and ability to work in a team environment.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "2",
      company: {
        name: "Google Corporation",
        location: "Bangalore, India",
        email: "support@google.in",
        contact: "1800-258-2554",
        about:
          "Google Corporation is a global technology company specializing in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. Google has a large office in Bangalore, India, where it focuses on research and development.",
        profileUrl:  Google,
      },
      jobTitle: "System Analyst",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "18,00,000 INR per annum",
      detail: [
        {
          desc: "As a System Analyst at Google, you will analyze system requirements and address any relevant problems. You will also perform standard testings and provide solutions to ensure high levels of performance and security.",
          requirement:
            "Bachelor's degree in Information Technology, Computer Science, or related field. 3+ years of experience as a Systems Analyst or similar role. Excellent knowledge of data analysis and system integration.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 20,
      createdAt: new Date(),
    },
    {
      id: "3",
      company: {
        name: "LinkedIn Corporation",
        location: "Bangalore, India",
        email: "support@linkedin.in",
        contact: "1800-102-4474",
        about:
          "LinkedIn Corporation is a business and employment-oriented service that operates via websites and mobile apps. Based in Sunnyvale, California, LinkedIn has a significant presence in Bangalore, India, focusing on software development and user engagement.",
        profileUrl: Linkedin,
      },
      jobTitle: "Social Media Manager",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "12,00,000 INR per annum",
      detail: [
        {
          desc: "As a Social Media Manager at LinkedIn, you will develop and implement a comprehensive social media strategy to increase our web traffic and our brand awareness.",
          requirement:
            "Bachelor's degree in Marketing, Communications, or related field. Proven work experience as a Social Media Manager. Excellent knowledge of Facebook, Twitter, LinkedIn, Pinterest, Instagram, Google+, and other social media best practices.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 10,
      createdAt: new Date(),
    },
    {
      id: "4",
      company: {
        name: "Spotify Corporation",
        location: "Bangalore, India",
        email: "support@spotify.in",
        contact: "1800-572-5330",
        about:
          "Spotify Corporation is a digital music service that gives you access to millions of songs. With a strong presence in Bangalore, India, Spotify focuses on music streaming, product development, and user experience.",
        profileUrl: Spotify,
      },
      jobTitle: "Chief Financial Officer (CFO)",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "30,00,000 INR per annum",
      detail: [
        {
          desc: "As the CFO at Spotify, you will be responsible for managing the financial actions of the company. Your duties will include tracking cash flow and financial planning as well as analyzing the company's financial strengths and weaknesses and proposing corrective actions.",
          requirement:
            "Master's degree in Finance, Accounting, or Business Administration. 10+ years of experience in a senior financial managerial position. Experience in the technology or music industry is a plus.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 2,
      createdAt: new Date(),
    },
    {
      id: "5",
      company: {
        name: "Facebook Corporation",
        location: "Bangalore, India",
        email: "support@facebook.in",
        contact: "1800-258-6689",
        about:
          "Facebook Corporation is a social media and technology company headquartered in Menlo Park, California. The company has a substantial presence in Bangalore, India, where it focuses on product development, user experience, and community operations.",
        profileUrl: Facebook,
      },
      jobTitle: "Chief Financial Officer (CFO)",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "35,00,000 INR per annum",
      detail: [
        {
          desc: "As the CFO at Facebook, you will oversee all financial activities, reporting, and analysis, ensuring the financial health of the company and driving growth strategies.",
          requirement:
            "MBA in Finance, Accounting, or related field. 12+ years of experience in financial management roles. Prior experience in the tech industry and familiarity with social media metrics is highly desirable.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 3,
      createdAt: new Date(),
    },
    {
      id: "6",
      company: {
        name: "WhatsApp Corporation",
        location: "Bangalore, India",
        email: "support@whatsapp.in",
        contact: "1800-102-3773",
        about:
          "WhatsApp Corporation, a subsidiary of Facebook, Inc., is a freeware, cross-platform messaging and Voice over IP (VoIP) service. The Bangalore office focuses on software development, security, and user operations.",
        profileUrl: WhatsApp,
      },
      jobTitle: "Product Manager",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "20,00,000 INR per annum",
      detail: [
        {
          desc: "As a Product Manager at WhatsApp, you will oversee the development and delivery of innovative products that meet user needs and drive engagement.",
          requirement:
            "Bachelor's degree in Business Administration, Computer Science, or related field. 5+ years of experience in product management, preferably in the tech industry. Strong analytical skills and user-focused mindset.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 15,
      createdAt: new Date(),
    },
    {
      id: "7",
      company: {
        name: "Instagram Corporation",
        location: "Bangalore, India",
        email: "support@instagram.in",
        contact: "1800-258-5400",
        about:
          "Instagram Corporation, also a subsidiary of Facebook, Inc., is a photo and video-sharing social networking service. The Bangalore office is pivotal in product development, user engagement, and market research.",
        profileUrl: Instagram,
      },
      jobTitle: "Product Manager",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "18,00,000 INR per annum",
      detail: [
        {
          desc: "As a Product Manager at Instagram, you will lead cross-functional teams to deliver high-quality products. You will be responsible for product planning and execution throughout the product lifecycle.",
          requirement:
            "Bachelor's degree in Business, Engineering, or related field. 4+ years of experience in product management with a focus on mobile apps. Excellent communication and leadership skills.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 10,
      createdAt: new Date(),
    },
    {
      id: "8",
      company: {
        name: "YouTube Corporation",
        location: "Bangalore, India",
        email: "support@youtube.in",
        contact: "1800-572-5898",
        about:
          "YouTube Corporation, a subsidiary of Google, LLC, is a video sharing service where users can watch, like, share, comment and upload their own videos. The Bangalore office focuses on product innovation, user experience, and video content moderation.",
        profileUrl: Youtube,
      },
      jobTitle: "Product Manager",
      location: "Bangalore, India",
      jobType: "Full-Time",
      salary: "17,00,000 INR per annum",
      detail: [
        {
          desc: "As a Product Manager at YouTube, you will be responsible for guiding products from conception to launch. You will work with cross-functional teams to design, build, and roll-out products that deliver the company’s vision and strategy.",
          requirement:
            "Bachelor's degree in Business, Marketing, or a related field. 5+ years of product management experience. Demonstrated success in launching products and driving product strategy.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 8,
      createdAt: new Date(),
    },
  ];
  
  export const footerLinks = [
    {
      id: "01",
      title: "Company",
      links: ["Home", "About Us", "Services", "Our Team"],
    },
    {
      id: "02",
      title: "Policy",
      links: ["Policies", "Contact", "FAQ"],
    },
    {
      id: "03",
      title: "Support",
      links: ["Account", "Support Center", "Feedback", "Accessibility"],
    },
  ];
  
  export const companies = [
    {
      _id: 1,
      name: "Microsoft Corporation",
      location: "Bangalore, India",
      email: "support@microsoft.in",
      contact: "1800-102-1100",
      about:
        "Microsoft Corporation is a multinational technology company, headquartered in Redmond, Washington, with a significant presence in Bangalore, India. The company develops, manufactures, licenses, supports, and sells a range of software products and services.",
      profileUrl: Twitter,
      jobPosts: ["1"],
    },
    {
      _id: 2,
      name: "Google Corporation",
      location: "Bangalore, India",
      email: "support@google.in",
      contact: "1800-258-2554",
      about:
        "Google Corporation is a global technology company specializing in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. Google has a large office in Bangalore, India, where it focuses on research and development.",
      profileUrl: Google,
      jobPosts: ["2"],
    },
    {
      _id: 3,
      name: "LinkedIn Corporation",
      location: "Bangalore, India",
      email: "support@linkedin.in",
      contact: "1800-102-4474",
      about:
        "LinkedIn Corporation is a business and employment-oriented service that operates via websites and mobile apps. Based in Sunnyvale, California, LinkedIn has a significant presence in Bangalore, India, focusing on software development and user engagement.",
      profileUrl: Linkedin,
      jobPosts: ["3"],
    },
    {
      _id: 4,
      name: "Spotify Corporation",
      location: "Bangalore, India",
      email: "support@spotify.in",
      contact: "1800-572-5330",
      about:
        "Spotify Corporation is a digital music service that gives you access to millions of songs. With a strong presence in Bangalore, India, Spotify focuses on music streaming, product development, and user experience.",
      profileUrl: Spotify,
      jobPosts: ["4"],
    },
    {
      _id: 5,
      name: "Facebook Corporation",
      location: "Bangalore, India",
      email: "support@facebook.in",
      contact: "1800-258-6689",
      about:
        "Facebook Corporation is a social media and technology company headquartered in Menlo Park, California. The company has a substantial presence in Bangalore, India, where it focuses on product development, user experience, and community operations.",
      profileUrl: Facebook,
      jobPosts: ["5"],
    },
    {
      _id: 6,
      name: "WhatsApp Corporation",
      location: "Bangalore, India",
      email: "support@whatsapp.in",
      contact: "1800-102-3773",
      about:
        "WhatsApp Corporation, a subsidiary of Facebook, Inc., is a freeware, cross-platform messaging and Voice over IP (VoIP) service. The Bangalore office focuses on software development, security, and user operations.",
      profileUrl: WhatsApp,
      jobPosts: ["6"],
    },
    {
      _id: 7,
      name: "Instagram Corporation",
      location: "Bangalore, India",
      email: "support@instagram.in",
      contact: "1800-258-5400",
      about:
        "Instagram Corporation, also a subsidiary of Facebook, Inc., is a photo and video-sharing social networking service. The Bangalore office is pivotal in product development, user engagement, and market research.",
      profileUrl: Instagram,
      jobPosts: ["7"],
    },
    {
      _id: 8,
      name: "YouTube Corporation",
      location: "Bangalore, India",
      email: "support@youtube.in",
      contact: "1800-572-5898",
      about:
        "YouTube Corporation, a subsidiary of Google, LLC, is a video sharing service where users can watch, like, share, comment and upload their own videos. The Bangalore office focuses on product innovation, user experience, and video content moderation.",
      profileUrl: Youtube,
      jobPosts: ["8"],
    },
  ];
  
  export const users = [
    {
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Google,
      jobPosts: ["1", "2"],
      token: "gjhsdgsjgdjh",
    },
    {
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Google,
      accountType:"seeker",
      jobPosts: ["1", "2"],
      token: "gjhsdgsjgdjh",
    },
   
  ];