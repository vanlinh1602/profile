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
        github: 'https://github.com/yourusername/qr-banking',
        visit: 'https://qr-banking-demo.com',
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
