interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    visit?: string;
  };
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  links,
}: ProjectCardProps) {
  return (
    <div className="relative group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
      {/* Card Container - maintains aspect ratio */}
      <div className="relative w-full pb-[75%]">
        {/* Preview Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300"
        />

        {/* Default Content (Always Visible) */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-auto bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
          <div className="h-full flex flex-col">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-auto flex gap-3 justify-around">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-pink-500 transition-colors"
                >
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="GitHub"
                    className="w-5 h-5"
                  />
                  GitHub
                </a>
              )}
              {links.visit && (
                <a
                  href={links.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-pink-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
