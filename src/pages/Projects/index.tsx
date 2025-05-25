import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'QR Banking',
      description:
        'Create and customize a QR code for banking transactions. Can be used for both personal and business purposes.',
      image: '/images/projects/qr-banking.png',
      technologies: ['React', 'Vite', 'Tailwind'],
      links: {
        github: 'https://github.com/vanlinh1602/qr-banking',
        visit: 'https://qr.nvlinh.com',
      },
    },
    {
      title: 'Kuma bot',
      description:
        'A bot for Discord supporting auto checkin, redeem code, etc. for every Hoyoverse Game.',
      image: '/images/projects/kuma-bot.png',
      technologies: ['Discord JS', 'Typescript'],
      links: {
        github: 'https://github.com/monsieur-kuma/kuma-bot',
        visit: 'https://monsieur-kuma.github.io/kuma-bot/',
      },
    },
    // Add more projects...
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
