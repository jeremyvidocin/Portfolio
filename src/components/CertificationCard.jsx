import PropTypes from "prop-types";

const CertificationCard = ({
    title,
    issuer,
    date,
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
                        alt={issuer}
                        className="img-cover"
                    />
                </figure>
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-zinc-400 text-sm">{issuer}</p>
                    <p className="text-zinc-400 text-sm">{date}</p>
                </div>
            </div>
        </div>
    );
};

CertificationCard.propTypes = {
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
};

export default CertificationCard;