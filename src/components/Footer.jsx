
import { ButtonPrimary } from "./Button";


const sitemap = [
    {
      label: 'Acceuil',
      href: '#home'
    },
    {
      label: 'A Propos',
      href: '#about'
    },
    {
      label: 'Projets',
      href: '#work'
    },
    {
      label: 'Certifications',
      href: '#reviews'
    },
    {
      label: 'Me Contacter',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch reveal-up">
                            Travaillons ensemble dès maintenant!
                        </h2>
                        <ButtonPrimary
                        href="mailto:jeremyvidocin@gmail.com"
                        label="Commencer à travailler"
                        icon="chevron_right"
                        classes="reveal-up"

                        
                        />
                    </div>


                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">
                                Sitemap
                            </p>

                            <ul>
                                {sitemap.map(({label, href}, key)=>(
                                    <li key={key}>
                                        <a 
                                        href={href} 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                             {label}

                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div>
                            <p className="mb-2 reveal-up">
                                Socials
                            </p>

                            <ul>
                                {socials.map(({label, href}, key)=>(
                                    <li key={key}>
                                        <a 
                                        href={href} 
                                        target="_blank"
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        
                                        >
                                             {label}

                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>



                    </div>
                </div>


                <div className="flex items-center justify-between pt-10 mb-8">
                    <a 
                    href="/" 
                    className="logo reveal-up"
                    >
                        <img 
                        src="/images/logo.svg"
                        width={40}
                        height={40} 
                        alt="Logo" 
                        />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2025 <span className="text-zinc-200">
                            Jérémy Vidocin.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;