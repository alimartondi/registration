import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

export default function NewsDetail() {
  return (
    <div className="news-detail">
      <Header />
      <Container>
        <Row className="pt-5">
          <Col lg={12} className="mt-5">
            <img src="" alt="" />
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima
            ipsa, reiciendis natus impedit deleniti rerum quibusdam, itaque
            neque nam quas provident suscipit repellat praesentium officia
            aliquam quasi veritatis laudantium eum esse culpa et? Labore,
            sapiente molestiae? Cupiditate harum sit corporis quasi accusamus
            minus delectus aspernatur ut eligendi non officiis animi similique
            ad dolorem adipisci fuga debitis numquam ex sed, enim facere.
            Laboriosam dolor alias optio rem. Quae accusantium, ex
            exercitationem molestiae cupiditate excepturi non sint beatae fuga
            minus, mollitia distinctio? Vel similique obcaecati tempore eos
            illum at quam saepe consequuntur qui eum dolorum perferendis,
            nostrum quasi, amet, ducimus eaque.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
