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
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'JS.',
  };
  
  const about: About = {
    name: 'John Smith',
    role: 'Front End Engineer',
    description:
      'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
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
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ];
  
  const contact: Contact = {
    email: 'johnsmith@mail.com',
  };
  
  export { header, about, projects, skills, contact };
  