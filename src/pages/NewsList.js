import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function NewsList() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    async function getNewsList() {
      const response = await fetch(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=lUNrwudaZPWvD7lQvdwX6YpHmyySzqGl"
      );
      const data = await response.json();
      console.log(data);
      setNewsList(data.response.docs);
    }
    getNewsList();
    return () => {};
  }, []);

  return (
    <div className="news-list">
      <Header />
      <Container>
        <Row>
          <Col lg={12} className="bg-dark mb-5 pt-5">
            <div className="blog-content w-50 mt-5">
              <h1 className="main-title text-light">
                Title of a longer featured blog post
              </h1>
              <p className="text-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                eius, aut tenetur necessitatibus quasi unde doloribus eos
                delectus deleniti? Id?
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {newsList.map((content) => (
            <Col lg={4} className="mb-4" key={content.id}>
              <NewsCard
                id={content._id.split("/")[3]}
                title={content.headline.main}
                date={content.pub_date}
                subtitle={content.lead_paragraph}
                image={
                  "https://static01.nyt.com/" +
                  content.multimedia.find((m) => m.subtype === "blog480").url
                }
                category={content.subsection_name}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function NewsCard({ id, image, category, title, subtitle, date }) {
  return (
    <Card className="d-flex rounded-3">
      <Card.Header className="p-0 ">
        <img src={image} class="img-fluid" alt={title}></img>
      </Card.Header>
      <Card.Body>
        <p>{category}</p>
        <Link to={`/newsdetail/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{date}</p>
        <p>{subtitle}</p>
      </Card.Body>
    </Card>
  );
}
