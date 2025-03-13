
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () =>{
    return (
        <section 
        id="home"
        className="pt-28 lg:pt-36"
        >
            <div 
            className="container items-center lg:grid lg:grid-cols-2 lg:gap-10"
            >
                <div>

                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-2xl">
                            <img 
                            src="/images/avatar-2.png"
                            width={40}
                            height={40}
                            alt="Jérémy Vidocin portrait"
                            className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>

                            </span>
                            Disponible pour travailler
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Bienvenu sur mon Portfolio
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                        label="Télécharger mon CV"
                        icon="download"
                        href="/public/elements/Mon CV Jérémy VIDOCIN (2).pdf"
                        
                        />

                        <ButtonOutline
                        href='#about'
                        label="Faire défiler"
                        icon='arrow_downward'

                        />
                    </div>





                </div>

                <div className="hidden lg:block">
                    <figure className="">
                        <img 
                        src="/images/hero-banner.png"
                        width={656}
                        height={800} 
                        alt="Jérémy VIDOCIN" 
                        className="w-full" 
                        />
                    </figure>
                </div>

            </div>

        </section>

    )
}

export default Hero;