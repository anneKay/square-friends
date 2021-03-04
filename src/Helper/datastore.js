/**
 * @description retrives followers from localStorage.
 * Returns undefined if no data is found.
 */
export const getFollowers = () => {
  const serializeddata = window.localStorage.getItem('followers');
  const followers = JSON.parse(serializeddata || '{}');
  return followers;
};

/**
 * @description Saves a follower to the browser's localStorage
 * @param {integer} followersId The id of the friend 
 */
export const saveFollower = (followersId) => {
  let followerHash = getFollowers()||{};
  let key = followersId;
  followerHash[`${key}`] = true;
  const serializeddata = JSON.stringify(followerHash);
  window.localStorage.setItem('followers', serializeddata);
};

/**
 * @description retrieves user data from friendsjson object
 */
export const getDetails = (friends) => {
  const username = window.location.pathname;
  if(friends) {
    return friends.find((friend) => `/${friend.username}` === username);
  }
};
