import PropTypes from "prop-types";

const ExperienceCard = ({
    title,
    company,
    duration,
    description,
    imgSrc
}) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            <div className="flex items-center gap-6 mb-6">
                <figure className="img-box rounded-lg">
                    <img
                        src={imgSrc}
                        width={44}
                        height={44}
                        alt={company}
                        className="img-cover"
                    />
                </figure>
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-zinc-400 text-sm">{company}</p>
                    <p className="text-zinc-400 text-sm">{duration}</p>
                </div>
            </div>
            <p className="text-zinc-400 mb-8">{description}</p>
        </div>
    );
};

ExperienceCard.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
};

export default ExperienceCard;