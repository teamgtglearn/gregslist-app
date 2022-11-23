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
        <h1>Thank You, from Team GTG</h1>
        <h6>
          <p>
            We created Gregslist with our intentions and focus on Unity. The
            World is constantly changing and we are fortunate to be at the point
            where the experiential reality of a New World is coming into
            existence right before our very eyes, The Digital New World. A world
            where exploration of thoughts, ideas and imaginations can be
            experienced and shared differently from the previous World before.
          </p>
          <p>
            Gregslist is a platform used to connect these two worlds together
            through interaction and commerce. Our goal is not only to allow the
            World to transact digital and non-digital assets, but as a platform,
            you, our partner and digital companion, can use to stand on, unite,
            and share your visions and ambitions in this New World... Together.
          </p>
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
            <CardTitle tag="h5">Guan Chan</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              UX / UI Designer
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
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Tawn Peou</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Project Manager
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
            <CardTitle tag="h5">Goran</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Tech Lead
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
      </CardGroup>
    </div>
  );
};

export default AboutUs;
