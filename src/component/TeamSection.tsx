import React from 'react'
import { Link } from 'react-router-dom';
import ShareIcon from '../assets/images/svg/share-icon.svg';
import Insta from '../assets/images/svg/insta.svg';
import Facebook from '../assets/images/svg/facebook.svg';
import Whatsapp from '../assets/images/svg/whatsapp.svg';
import Twitter from '../assets/images/svg/twitter.svg';
import teamData from "../data/teamData.json";
import img1 from "../assets/images/team/team-mem-img1.png";
import img2 from "../assets/images/team/team-mem-img2.png";
import img3 from "../assets/images/team/team-mem-img3.png";
import img4 from "../assets/images/team/team-mem-img4.png";
import img5 from "../assets/images/team/team-mem-img5.png";
import img6 from "../assets/images/team/team-mem-img6.png";
import img7 from "../assets/images/team/team-mem-img7.png";
import img8 from "../assets/images/team/team-mem-img8.png";

export const teamImageMap = {
    "team-mem-img1.png": img1,
    "team-mem-img2.png": img2,
    "team-mem-img3.png": img3,
    "team-mem-img4.png": img4,
    "team-mem-img5.png": img5,
    "team-mem-img6.png": img6,
    "team-mem-img7.png": img7,
    "team-mem-img8.png": img8,
} as const;


export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: keyof typeof teamImageMap;
    instagram: string;
    facebook: string;
    whatsapp: string;
    twitter: string;
}


type TeamSectionProps = {
    limit?: number;
};

const TeamSection: React.FC<TeamSectionProps> = ({ limit }) => {
    const slicedData = limit
        ? (teamData as TeamMember[]).slice(0, limit)
        : (teamData as TeamMember[]);
    return (
        <>
            <div className="row exper-team-row-home">
                {slicedData.map((team) => (
                    <div
                        className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                        key={team.id}
                    >
                        <div className="team-circle-link zoom_in">
                            <div className="team-circle-main">
                                <Link to="/TeamDetails" className="inner-team-circle">
                                    <img
                                        src={teamImageMap[team.image]}
                                        alt={team.name}
                                    />
                                </Link>
                                <div className="share-icon-main">
                                    <img src={ShareIcon} alt="share-icon" />
                                    <ul className="social-icons">
                                        <li>
                                            <a href={team.instagram} target="_blank" rel="noreferrer">
                                                <img src={Insta} alt="Instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={team.facebook} target="_blank" rel="noreferrer">
                                                <img src={Facebook} alt="Facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={team.whatsapp} target="_blank" rel="noreferrer">
                                                <img src={Whatsapp} alt="WhatsApp" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={team.twitter} target="_blank" rel="noreferrer">
                                                <img src={Twitter} alt="Twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3>{team.name}</h3>
                            <p>{team.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TeamSection