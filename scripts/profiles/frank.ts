import {
  EducationTypes,
  LanguageProficiency,
  Proficiency,
  Profile,
  ProjectType,
} from '~/types/CV';

export const frank: Profile = {
  person: {
    name: { first: 'Frank', last: 'Di Luzio' },
    // profession: 'Fullstack Developer, Games Engineer. CTO @ flint.gg',
    // image: { isURL: false, path: 'pp.png' },
    services: {
      linkedin: 'frank-di-luzio',
      github: 't0tproduction',
    },
    email: 'frank@diluz.io',
    // we are already on this page
    /* website: 'https://diluz.io', */
    shortText: 'Full Stack Developer, Gamer and TypeScript enthusiast.',
    // i dont want this to be in my professional CV
    /* interests: [
      { title: 'Gaming', icon: 'gamepad-square' },
      { title: 'Monster Hunting', icon: 'sword-cross' },
      { title: 'Fullstack Development', icon: 'code-braces' },
    ], */
    languages: [
      { lang: 'German', proficiency: LanguageProficiency.native },
      { lang: 'English', proficiency: LanguageProficiency.C1 },
    ],
    nationalities: [{ title: 'German' }, { title: 'US-American' }],
    basedIn: { country: 'Germany', city: 'Munich' },
  },
  skills: {
    technical: [
      { title: 'TypeScript', proficiency: Proficiency.strong },
      { title: 'JavaScript', proficiency: Proficiency.strong },
      { title: 'Java', proficiency: Proficiency.knowledgeable },
      { title: 'HTML', proficiency: Proficiency.knowledgeable },
      { title: 'SCSS', proficiency: Proficiency.knowledgeable },
      { title: 'Node.js', proficiency: Proficiency.strong },
      { title: 'Nuxt.js', proficiency: Proficiency.strong },
      { title: 'Vue.js', proficiency: Proficiency.strong },
      { title: 'PostgreSQL', proficiency: Proficiency.strong },
      { title: 'SQL', proficiency: Proficiency.knowledgeable },
      { title: 'MongoDB', proficiency: Proficiency.knowledgeable },
      { title: 'C', proficiency: Proficiency.knowledgeable },
      { title: 'C#', proficiency: Proficiency.knowledgeable },
      { title: 'C++', proficiency: Proficiency.knowledgeable },
      { title: 'Unity', proficiency: Proficiency.knowledgeable },
      { title: 'Unreal', proficiency: Proficiency.knowledgeable },
      { title: 'AWS', proficiency: Proficiency.knowledgeable },
      { title: 'Docker', proficiency: Proficiency.knowledgeable },
    ],
    education: [
      {
        title: 'Bachelor of Science: Games Engineering',
        type: EducationTypes.university,
        source: 'Technical University of Munich ',
        date: new Date(2019, 7),
        link: 'https://tum.de',
      },
      {
        title: 'High School Degree',
        type: EducationTypes.school,
        source: 'Ignaz-Taschner-Gymnasium Dachau',
        date: new Date(2015, 4),
        link: 'https://itg.bayern/startseite.html',
      },
    ],
    // certificates: [{ title: 'Official Basti', link: 'https:google.com/basti' }],
    misc: [
      { title: 'Adobe After Effects' },
      { title: 'Adobe Premiere Pro' },
      { title: 'Community Management' },
    ],
  },
  projects: {
    list: [
         ],
    final: {
      title: 'The beginning of time',
      text: "If you want to see more side projects, take a look at my GitHub. There's a lot more that just wasn't relevant enough to list here.",
    },
  },
};
