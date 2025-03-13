

import SkillCard from "./SkillCard";

const skillItem = [
    
    
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Serveur web'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'Interface utilisateur'
    },
    {
      imgSrc: '/images/vscode.png',
      label: 'VS Code',
      desc: 'Éditeur de code'
    },
    {
      imgSrc: '/images/intellij.svg',
      label: 'IntelliJ',
      desc: 'IDE'
    },
    {
      imgSrc: '/images/phpmyadmin.svg',
      label: 'phpMyAdmin',
      desc: 'Gestion de bases de données'
    },
    {
      imgSrc: '/images/visualstudio.svg',
      label: 'Visual Studio 2022',
      desc: 'IDE'
    },
    {
      imgSrc: '/images/notion.svg',
      label: 'Notion',
      desc: 'Outil de productivité'
    },
    {
      imgSrc: '/images/wordpress.svg',
      label: 'WordPress',
      desc: 'CMS'
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Langage de programmation'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Langage de programmation'
    },
    {
      imgSrc: '/images/html.svg',
      label: 'HTML',
      desc: 'Langage de balisage'
    },
    {
      imgSrc: '/images/php.svg',
      label: 'PHP',
      desc: 'Langage de script'
    },
    {
      imgSrc: '/images/sql.svg',
      label: 'SQL',
      desc: 'Langage de requête'
    },
    {
      imgSrc: '/images/csharp.svg',
      label: 'C#',
      desc: 'Langage de programmation'
    }
  ];


const Skill =  () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                Outils et technologies que j'utilise
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Découvrez les puissants outils et technologies que j'utilise pour créer des sites web et des applications performantes et exceptionnelles.


                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key)=>
                        (
                            <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes=""
                            />
                        ))
                    }
                </div>


            </div>
        </section>
    )
}

export default Skill;