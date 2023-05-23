interface Header {
    homepage?: string;
    title?: string;
  }
  
  interface About {
    name?: string;
    role?: string;
    description?: string;
    resume?: string;
    social?: {
      linkedin?: string;
      github?: string;
    };
  }
  
  interface Project {
    name: string;
    description: string;
    stack: string[];
    sourceCode: string;
    livePreview: string;
  }
  
  interface Contact {
    email?: string;
  }
  
  const header: Header = {
    homepage: 'https://xyhy.github.io/resume/',
    title: 'YHY',
  };
  
  const about: About = {
    name: '顏浩昀',
    role: 'student graduated from National Tsin Hua University',
    description:
      'Soon-to-graduate hardworking college student, good at multiple programming languages and with some app development project experience, seeks a position as a software/firmware engineer.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/yen-812yun/',
      github: 'https://github.com/xyhy',
    },
  };
  
  const projects: Project[] = [
    {
      name: 'Project 1',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ];
  
  const skills: string[] = [
    'C',
    'C++',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Git',
    'devops',
    'Jest',
    'Machine Learning',
    'Artificial Intelligence',
  ];
  
  const contact: Contact = {
    email: 'xyhyjob@gmail.com',
  };
  
  export { header, about, projects, skills, contact };
  