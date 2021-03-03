import React, { useState, useEffect, FC } from "react";
import { Card,Row, Col,Button, Container } from "react-bootstrap";
import { FriendsData } from "../../Types/FriendsData";
import { saveFollower, getFollowers } from "../../Helper/datastore";
import friendsJson from "../../Helper/friendsData/friendsList.json"
import coverImage from "../../assets/images/cover-image.png";
import avatar from "../../assets/images/avatar.png";
import "../../assets/stylesheet/home/card.scss";

interface Props {
}

const CardContainer: FC<Props> = () => {

  const [friends, setFriends] = useState<Array<FriendsData>>(friendsJson.data);
  const [followers, setFollowers] = useState({});
  const [followerId, setFollowerId] = useState<number>(0);

  const handleFollowClick = (id: number) => {
    saveFollower(id);
    setFollowerId(id);
  }

  const setFollowerStatus = (followers: object, id: number) => (
    followers.hasOwnProperty(`${id}`) ? "Following" : "Follow"
  )

  useEffect(() => {
    function fetchFollowers() {
      let followersHash = getFollowers();
      if(followersHash) {
        setFollowers(followersHash);
      }
    }
    fetchFollowers();
  }, [followerId])

  return (
    <>
      <Container className="card-container">
        <Row md={1} lg={2}>
        {friends.length > 0 && friends.map((friend) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={coverImage} />
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <Card.Img className="card-avatar" src={avatar} />
                  </Col>
                  <Col sm={6}>
                    <Row><Card.Title className="title-text">{friend.name}</Card.Title></Row>
                    <Row><Card.Subtitle className="mb-2 text-muted">{friend.username}</Card.Subtitle></Row>
                    <Row> <Card.Text className="bio-text">{friend.bio}</Card.Text></Row>
                  </Col>
                  <Col sm={3}>
                    <Button className="follow" variant="primary" onClick={() => handleFollowClick(friend.id)}>{setFollowerStatus(followers, friend.id)}</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Container>
    </>
  )
}

export default CardContainer;
