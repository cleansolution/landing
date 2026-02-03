import React from 'react'
import { Link } from 'react-router-dom';
import ShareIcon from '../assets/images/svg/share-icon.svg';
import Insta from '../assets/images/svg/insta.svg';
import Facebook from '../assets/images/svg/facebook.svg';
import Whatsapp from '../assets/images/svg/whatsapp.svg';
import Twitter from '../assets/images/svg/twitter.svg';
import TeamMemberImg1 from '../assets/images/team/team-mem-img1.png';
import TeamMemberImg2 from '../assets/images/team/team-mem-img2.png';
import TeamMemberImg3 from '../assets/images/team/team-mem-img3.png';
import TeamMemberImg4 from '../assets/images/team/team-mem-img4.png';
import TeamMemberImg5 from '../assets/images/team/team-mem-img5.png';
import TeamMemberImg6 from '../assets/images/team/team-mem-img6.png';
import TeamMemberImg7 from '../assets/images/team/team-mem-img7.png';
import TeamMemberImg8 from '../assets/images/team/team-mem-img8.png';
import teamData from "../data/teamData.json";

export interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
    social?: {
        instagram?: string;
        facebook?: string;
        whatsapp?: string;
        twitter?: string;
    };
}

// Map para las imágenes del equipo
const teamImages: { [key: string]: string } = {
    'team-mem-img1.png': TeamMemberImg1,
    'team-mem-img2.png': TeamMemberImg2,
    'team-mem-img3.png': TeamMemberImg3,
    'team-mem-img4.png': TeamMemberImg4,
    'team-mem-img5.png': TeamMemberImg5,
    'team-mem-img6.png': TeamMemberImg6,
    'team-mem-img7.png': TeamMemberImg7,
    'team-mem-img8.png': TeamMemberImg8,
};

type TeamSectionProps = {
    limit?: number;
};

const TeamSection: React.FC<TeamSectionProps> = ({ limit }) => {
    const teamMembers = teamData;
    
    const slicedData = limit
        ? teamMembers.slice(0, limit)
        : teamMembers;
    return (
        <>
            <div className="row exper-team-row-home">
                {(slicedData || []).map((team: TeamMember) => (
                    <div
                        className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"
                        key={team.id}
                    >
                        <div className="team-circle-link zoom_in">
                            <div className="team-circle-main">
                                <Link to="/TeamDetails" className="inner-team-circle">
                                    <img
                                        src={teamImages[team.image] || TeamMemberImg1}
                                        alt={team.name}
                                    />
                                </Link>
                                <div className="share-icon-main">
                                    <img src={ShareIcon} alt="share-icon" />
                                    <ul className="social-icons">
                                        {team.social?.instagram && (
                                            <li>
                                                <a href={team.social.instagram} target="_blank" rel="noreferrer">
                                                    <img src={Insta} alt="Instagram" />
                                                </a>
                                            </li>
                                        )}
                                        {team.social?.facebook && (
                                            <li>
                                                <a href={team.social.facebook} target="_blank" rel="noreferrer">
                                                    <img src={Facebook} alt="Facebook" />
                                                </a>
                                            </li>
                                        )}
                                        {team.social?.whatsapp && (
                                            <li>
                                                <a href={team.social.whatsapp} target="_blank" rel="noreferrer">
                                                    <img src={Whatsapp} alt="WhatsApp" />
                                                </a>
                                            </li>
                                        )}
                                        {team.social?.twitter && (
                                            <li>
                                                <a href={team.social.twitter} target="_blank" rel="noreferrer">
                                                    <img src={Twitter} alt="Twitter" />
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <h3>{team.name}</h3>
                            <p>{team.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TeamSection