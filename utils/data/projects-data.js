import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Marketing App',
        description: "The AI-powered app can create high-quality, engaging content for various platforms, including social media, blogs, and email newsletters.",
        tools: ['PHP', 'JS', 'OpenAI API', 'SQL', 'AWS S3', 'EC2', 'Nginx',''],
    },
    {
        id: 2,
        name: 'Doctors Platform ',
        description: 'A digital platform designed to streamline healthcare services for both patients and medical professionals',
        tools: ['JS', 'Tailwind CSS', "Google Maps", "PHP", "Node JS", "MySQL", "AWS S3", "GCP - Firebase", "Swift", "Kotlin"],
    },
    {
        id: 3,
        name: 'Real Estate Platform',
        description: 'A dynamic digital solution designed to transform the way properties are bought, sold, and rented.',
        tools: ['JS', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'SQL', 'Nginx', 'Flutter', 'PHP', 'Google Maps','Firebase','AWS', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },