import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Row,
} from "reactstrap";

import profilePic1 from "../assets/prof_img.jpg";
import profilePic2 from "../assets/goran.png";

const AboutUs = () => {
  return (
    <div>
      <Row
        className="mx-4 mt-3 border border-dark"
        style={{
          backgroundColor: "lightgray",
          borderRadius: "10px",
          border: "black",
        }}
      >
        <h1>Meet Team GTG</h1>
        <h6>
          Gregslist is an e-commmece for anyone who would like to sell thier
          product. We have some great features that will help you sell your
          products You will have a cutom store front that will display all of
          your products Show your freinds and famliy have them support your
          cuase and buy your work Sign up today and start uploading your produt
          for the rest of world
        </h6>
      </Row>

      <CardGroup>
        <Card
          className="shadow"
          style={{
            width: "45%",
            padding: "24px",
            backgroundColor: "#ded8d1",
            flex: "wrap",
            borderRadius: "10px",
            margin: "2%",
          }}
        >
          <CardImg alt="Card image cap" src={profilePic1} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">UX / UI Designer</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Guan Chan
            </CardSubtitle>
            <CardText>Building a better tomorrow with code and clay</CardText>
            <Row
              className="border border-dark"
              style={{
                backgroundColor: "lightgray",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              <p className="border mb-0 text-end">
                I'm fun (call me for more fun)
              </p>
            </Row>
          </CardBody>
        </Card>
        <Card
          className="shadow"
          style={{
            width: "45%",
            padding: "24px",
            backgroundColor: "#ded8d1",
            flex: "wrap",
            borderRadius: "10px",
            margin: "2%",
          }}
        >
          <CardImg alt="Card image cap" src={profilePic2} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Tech Lead</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Goran
            </CardSubtitle>
            <CardText>
              Building lots of great software to help everyday life
            </CardText>
            <Row
              className="border border-dark"
              style={{
                backgroundColor: "lightgray",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              <p className="border mb-0 text-end">
                Couldn't do this without Tawn and G-money!
              </p>
            </Row>
          </CardBody>
        </Card>
        <Card
          className="shadow"
          style={{
            width: "45%",
            padding: "24px",
            backgroundColor: "#ded8d1",
            flex: "wrap",
            borderRadius: "10px",
            margin: "2%",
          }}
        >
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Project Manager</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Tawn Peou
            </CardSubtitle>
            <CardText>
              Ready to rock and roll, excited to build the coolest tech.
            </CardText>
            <Row
              className="border border-dark"
              style={{
                backgroundColor: "lightgray",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              <p className="border mb-0 text-end">
                I'm TawnChan (Zen master of the group)
              </p>
            </Row>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default AboutUs;
