import { useState, useEffect } from "react";
import { saveFollower, getFollowers } from "../../../Helper/datastore";

const FollowersHook = (): {followers: object, followerId: number, handleFollowClick: (id:number) => void} => {

  const [followers, setFollowers] = useState({});
  const [followerId, setFollowerId] = useState<number>(0);

  const handleFollowClick = (id: number) => {
    saveFollower(id);
    setFollowerId(id);
  }

  useEffect(() => {
    function fetchFollowers() {
      let followersHash = getFollowers();
      if(followersHash) {
        setFollowers(followersHash);
      }
    }
    fetchFollowers();
  }, [followerId])

    return {followers, followerId, handleFollowClick}

}

export default FollowersHook;


