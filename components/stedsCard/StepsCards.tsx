import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

const StepsCards = () => {
  const steps = [
    {
      title: "1. Scannez le code-barres",
      subtitle: "Rapide et simple",
      description:
        "Utilisez notre application ou un scanner pour lire le code-barres de votre livre. Identifiez rapidement le titre et l'édition.",
      image: "/photo/scanner.avif",
    },
    {
      title: "2. Envoyez le livre",
      subtitle: "Prêt à partir",
      description:
        "Emballez le livre et envoyez-le via nos points relais ou un service d'expédition partenaire. Nous prenons soin du reste.",
      image: "/photo/cash.jpg",
    },
    {
        title: "3. Mission accomplie !",
        subtitle: "Réclamez votre récompense",
        description:
          "Obtenez vos crédits ou points directement sur votre compte. Utilisez-les pour profiter de réductions exclusives ou pour découvrir de nouveaux livres.",
        image: "/photo/celebration.avif",
    },
  ];

  return (
    <Container className="py-5">
      <Row>
        {steps.map((step, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                height: "100%",
              }}
            >
              {/* Cercle avec numéro */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "20px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#157246",
                  color: "#fff",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </div>
              <Card.Img
                variant="top"
                src={step.image}
                alt={step.title}
                style={{
                    width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {step.title}
                </Card.Title>
                <Card.Subtitle className="mb-3" style={{ fontSize: "1.2rem", fontWeight: "400" }}>
                  {step.subtitle}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
                  {step.description}
                </Card.Text>
                {index === 0 && (
                  <Button
                    variant="primary"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#157246",
                      border: "none",
                    }}
                  >
                    Scanner maintenant
                  </Button>
                )}
                {index === 1 && (
                  <Button
                    variant="success"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#157246",
                      border: "none",
                    }}
                  >
                    Envoyer un livre
                  </Button>
                )}
                {index === 2 && (
                  <Button
                    variant="success"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#157246",
                      border: "none",
                    }}
                  >
                    Voir mes récompenses
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StepsCards;
