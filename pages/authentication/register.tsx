import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Pour l'appel API à Brevo

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [userVerificationCode, setUserVerificationCode] = useState("");

  // Génère un code aléatoire pour l'email
  const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();


  

  const sendVerificationEmail = async (email: string, code: string) => {
    try {
      // Appel API Brevo via HTTP POST
      await axios.post(
        "https://api.brevo.com/v3/smtp/email",  // L'API REST de Brevo
        {
          sender: { name: "Lexio", email: "aouniibrahim94@gmail.com" },
          to: [{ email }],  // Destinataire de l'email
          subject: "Vérification de votre adresse email",  // Sujet de l'email
          htmlContent: `<p>Bonjour,</p><p>Voici votre code de vérification : <b>${code}</b></p>`,  // Corps de l'email
        },
        {
          headers: {
            "api-key": "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",  // Remplacez par votre clé API
            "Content-Type": "application/json",  // Type de contenu
          },
        }
      );
      setEmailSent(true);  // Indique que l'email a bien été envoyé
      setSuccess("Un email de vérification a été envoyé !");
    } catch (error) {
      setError("Échec de l'envoi de l'email de vérification.");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation des champs
    if (!formData.email) {
      setError("Veuillez fournir une adresse email valide.");
      return;
    }

    const code = generateVerificationCode();
    setVerificationCode(code);

    // Envoi du mail de vérification
    sendVerificationEmail(formData.email, code);
  };

  const handleVerification = async () => {
    if (userVerificationCode === verificationCode) {
      setSuccess("Vérification réussie !");
      setError("");

      // Création du compte après vérification (ajoutez la logique ici si nécessaire)
      setSuccess("Inscription réussie !");
    } else {
      setError("Code de vérification incorrect.");
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow p-4 rounded" style={{ backgroundColor: "#fff", borderColor: "#28a745" }}>
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: "#28a745" }}>
                Inscription
              </h2>
              {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}
              {success && (
                <Alert variant="success">
                  {success}
                </Alert>
              )}
              {!emailSent ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFirstName" className="mb-3">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre prénom"
                      name="firstName"
                      value={formData.firstName}
                      style={{ borderColor: "#28a745" }}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formLastName" className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre nom"
                      name="lastName"
                      value={formData.lastName}
                      style={{ borderColor: "#28a745" }}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Entrez votre email"
                      name="email"
                      value={formData.email}
                      style={{ borderColor: "#28a745" }}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mb-4">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Entrez votre mot de passe"
                      name="password"
                      value={formData.password}
                      style={{ borderColor: "#28a745" }}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
                  >
                    Envoyer un email de vérification
                  </Button>
                </Form>
              ) : (
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group controlId="formVerificationCode" className="mb-3">
                    <Form.Label>Code de vérification</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez le code reçu par email"
                      value={userVerificationCode}
                      onChange={(e) => setUserVerificationCode(e.target.value)}
                      style={{ borderColor: "#28a745" }}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    onClick={handleVerification}
                    className="w-100"
                    style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
                  >
                    Vérifier
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
