import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Pour l'appel API à Brevo

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendPasswordResetEmail = async (email: string) => {
    try {
      // Appel API Brevo via HTTP POST pour envoyer un email de réinitialisation de mot de passe
      await axios.post(
        "https://api.brevo.com/v3/smtp/email",  // L'API REST de Brevo
        {
          sender: { name: "Lexio", email: "aouniibrahim94@gmail.com" },
          to: [{ email }],  // Destinataire de l'email
          subject: "Réinitialisation de votre mot de passe",  // Sujet de l'email
          htmlContent: `<p>Bonjour,</p><p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe.</p><p><a href="http://votre-site.com/reset-password">Réinitialiser le mot de passe</a></p>`,  // Corps de l'email
        },
        {
          headers: {
            "api-key": "votre-cle-api-brevo",  // Remplacez par votre clé API Brevo
            "Content-Type": "application/json",  // Type de contenu
          },
        }
      );
      setEmailSent(true);
      setSuccess("Un email de réinitialisation a été envoyé !");
    } catch (error) {
      setError("Échec de l'envoi de l'email.");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation de l'email
    if (!email) {
      setError("Veuillez fournir une adresse email valide.");
      return;
    }

    // Envoi du mail de réinitialisation
    sendPasswordResetEmail(email);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow p-4 rounded" style={{ backgroundColor: "#fff", borderColor: "#28a745" }}>
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: "#28a745" }}>
                Réinitialisation du mot de passe
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
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Entrez votre email"
                      value={email}
                      onChange={handleChange}
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
                    Envoyer l'email de réinitialisation
                  </Button>
                </Form>
              ) : (
                <Form onSubmit={(e) => e.preventDefault()}>
                  <p>Vérifiez votre boîte de réception pour un email de réinitialisation.</p>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
