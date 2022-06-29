import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdArrowDropup,IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import OverviewCard from "./OverviewCard";

const Overview = ({ toggle }) => {

    const [overviews] = useState([
        {
            title: "Page Views",
            icon: <FaFacebook />,
            number: 87,
            percent: "3%"
        },
        {
            title: "Likes",
            icon: <FaFacebook />,
            number: 52,
            percent: "2%"
        },
        {
            title: "Likes",
            icon: <FaInstagram />,
            number: 5462,
            percent: "2257%"
        },
        {
            title: "Profile Views",
            icon: <FaInstagram />,
            number: "52k",
            percent: "1375%"
        },
        {
            title: "Retweets",
            icon: <FaTwitter />,
            number: 117,
            percent: "303%"
        },
        {
            title: "Likes",
            icon: <FaTwitter />,
            number: 507,
            percent: "553%"
        },
        {
            title: "Likes",
            icon: <FaYoutube />,
            number: 107,
            percent: "19%"
        },
        {
            title: "Total Views",
            icon: <FaYoutube />,
            number: 1407,
            percent: "12%"
        }
    ]);
    

  return (
    <div className="container">
        <div className="subcontainer overview">
            <h1 className={ toggle ? 'overview__title__dark' : 'overview__title__light'}>Overview - Today</h1>
            <div className="overview__contents">
                { overviews.map((overview,idx) => (
                    <div key={idx}>
                        <OverviewCard 
                        toggle={toggle}
                        title={overview.title}
                        icon={overview.icon}
                        number={overview.number}
                        percent={overview.percent}
                        iconColor={overview.icon.type.name === "FaFacebook" ? "facebook" : overview.icon.type.name === "FaInstagram" ? "instagram" : overview.icon.type.name === "FaTwitter" ? "twitter" : "youtube"}
                        percentColor={idx > 5 ? "down" : "up"}
                        arrowIcon={idx > 5 ? <IoMdArrowDropdown /> : <IoMdArrowDropup /> }
                    />
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Overview