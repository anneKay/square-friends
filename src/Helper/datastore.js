
/**
 * @description retrives followers from localStorage.
 * Returns undefined if no data is found.
 */
export const getFollowers = () => {
  const serializeddata = window.localStorage.getItem('followers');
  const followers = JSON.parse(serializeddata);
  return followers;
};

/**
 * @description Saves a copy of the survey to the browser's localStorage
 * @param {object} survey The survey object
 */
export const saveFollower = (followersId) => {
  let followerHash = getFollowers()||{};
  let key = followersId;
  followerHash[`${key}`] = true;
  const serializeddata = JSON.stringify(followerHash);
  window.localStorage.setItem('followers', serializeddata);
};
