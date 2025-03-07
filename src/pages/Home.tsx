export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center space-y-12">
        {/* Hero Section */}
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Hi <span className="inline-block animate-bounce">🌏</span>, my name is{' '}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Linh Nguyễn
          </span>
        </div>

        {/* Work Info Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm sm:text-base md:text-xl order-2 md:order-1">
            <p className="flex items-center justify-center gap-2">
              👨‍💻 I'm currently Working in Xbot JSC
            </p>
            <p className="flex items-center justify-center gap-2">
              🏠 I'm living in a small city in Việt Nam 👋 🏖️
            </p>
            <p className="flex items-center justify-center gap-2">
              💎 I'm available for freelancing.
            </p>
            <p className="flex items-center justify-center gap-2">
              📝 And I'm studying English but I'm very lazy 😅
            </p>
            <p className="flex items-center justify-center gap-2">
              ⚡ Fun fact: I like watching anime and playing game of Hoyoverse
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <a
              href="https://app.daily.dev/monsieurkuma"
              className="transform hover:scale-105 transition-transform"
            >
              <img
                src="https://api.daily.dev/devcards/v2/fKnPl6IPEJqM9dysMIHKM.png?type=default&r=8na"
                className="w-full max-w-[300px]"
                alt="Linh Nguyễn's Dev Card"
              />
            </a>
          </div>
        </div>

        {/* Languages and Tools Section */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            Languages and Tools:
          </h2>
          <div className="overflow-auto rounded-xl">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Frontend Row */}
                <tr>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap">
                    <span className="text-base sm:text-xl font-semibold text-pink-500">
                      Frontend
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6">
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
                      <img
                        src="https://skillicons.dev/icons?i=react"
                        alt="React"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=ts"
                        alt="TypeScript"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=js"
                        alt="JavaScript"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=html"
                        alt="HTML"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=css"
                        alt="CSS"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                    </div>
                  </td>
                </tr>

                {/* UI Frameworks Row */}
                <tr>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap">
                    <span className="text-base sm:text-xl font-semibold text-purple-500">
                      UI Frameworks
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6">
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
                      <img
                        src="https://skillicons.dev/icons?i=mui"
                        alt="Material UI"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=bootstrap"
                        alt="Bootstrap"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=tailwind"
                        alt="Tailwind"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                    </div>
                  </td>
                </tr>

                {/* Backend Row */}
                <tr>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap">
                    <span className="text-base sm:text-xl font-semibold text-blue-500">
                      Backend
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6">
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
                      <img
                        src="https://skillicons.dev/icons?i=nodejs"
                        alt="Node.js"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=express"
                        alt="Express"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=nestjs"
                        alt="NestJS"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=bun"
                        alt="Bun"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                    </div>
                  </td>
                </tr>

                {/* Database Row */}
                <tr>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap">
                    <span className="text-base sm:text-xl font-semibold text-green-500">
                      Database & Storage
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6">
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
                      <img
                        src="https://skillicons.dev/icons?i=mysql"
                        alt="MySQL"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=sqlite"
                        alt="SQLite"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=mongodb"
                        alt="MongoDB"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=firebase"
                        alt="Firebase"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                    </div>
                  </td>
                </tr>

                {/* Tools Row */}
                <tr>
                  <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap">
                    <span className="text-base sm:text-xl font-semibold text-orange-500">
                      Tools & Others
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-4 sm:px-6">
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
                      <img
                        src="https://skillicons.dev/icons?i=vite"
                        alt="Vite"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=bots"
                        alt="Bots"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=discordjs"
                        alt="Discord.js"
                        className="w-8 sm:w-auto hover:scale-110 transition-transform"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Section */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">Activity:</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 sm:p-6 max-w-fit mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <img
                className="w-full max-w-[356px]"
                height="180em"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=vanlinh1602&show_icons=true&locale=en&layout=compact&theme=tokyonight"
                alt="vanlinh1602"
              />
              <img
                className="w-full max-w-[356px]"
                height="180em"
                src="https://github-readme-stats.vercel.app/api?username=vanlinh1602&show_icons=true&locale=en&layout=compact&theme=tokyonight"
                alt="vanlinh1602"
              />
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">Connect with me:</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.facebook.com/MonsieurKuma"
              target="blank"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/bubbles/100/facebook-new.png"
                alt="linh nguyễn"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://x.com/vanlinh2002"
              target="blank"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/bubbles/100/twitter-circled.png"
                alt="vanlinh2002"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://discord.com/users/776054010414497823"
              target="blank"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/bubbles/100/discord-logo.png"
                alt="776054010414497823"
                width="40"
                height="40"
              />
            </a>
            <a
              href="mailto:linhnv1622@gmail.com"
              target="blank"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/bubbles/100/new-post.png"
                alt="new-post"
              />
            </a>
          </div>
        </div>

        {/* Discord Status */}
        <div className="mt-8 text-pink-500">
          <a
            href="https://discord.com/channels/@me/835488546897920021"
            target="blank"
            className="flex justify-center"
          >
            <img
              src="https://lanyard-profile-readme.vercel.app/api/776054010414497823?animated=true&theme=dark&borderRadius=30px"
              alt="connect discord"
              className="max-w-full h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
