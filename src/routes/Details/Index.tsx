import React, { FC, useState } from "react";
import coverImage from "../../assets/images/cover-image.png";
import avatar from "../../assets/images/avatar.png";
import Navbar from "../../components/Navbar/Navbar";
import friendsJson from "../../Helper/friendsData/friendsList.json";
import { FriendsData } from "../../Types/FriendsData";
import { getDetails } from "../../Helper/datastore";
import "../../assets/stylesheet/details/details-page.scss";


interface Props {
}

const Header: FC<Props> = () => {
  const [ userDetails, setUserDetails ] = useState<FriendsData>(getDetails(friendsJson.data));
  return (
    <>
      <Navbar />
      <div className="details-container">
          <div className="profile-pics">
            <img className="cover-img" src={coverImage} alt="cover" />
            <img className="avatar" src={avatar} alt="avatar" />
            <h2 className="name">{userDetails.name}</h2>
            <h4 className="username">{`@${userDetails.username}`}</h4>
            <hr />
            <h4 className="bio-text">{userDetails.bio}</h4>
        </div>

      </div>
    </>
  )
}

export default Header;