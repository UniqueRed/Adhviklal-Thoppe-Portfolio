import { Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-sm">&copy; 2025 Adhviklal Thoppe. All rights reserved.</p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/UniqueRed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/adhviklal-thoppe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

