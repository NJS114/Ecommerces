import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Typage des props du composant
interface LoginPageProps {
  navigateToSignup?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigateToSignup }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // L'erreur peut être null ou une chaîne de caractères

  // Fonction de connexion
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simuler l'appel à l'authentification ici
      // À remplacer par ton propre appel à authProvider.login
      if (email === 'user@example.com' && password === 'password123') {
        // Si l'authentification réussit
        alert('Connexion réussie !');
        // Rediriger ou effectuer l'action souhaitée ici
      } else {
        throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row className="w-100">
        <Col xs={12} md={6} className="p-5">
          <h3 className="mb-4 text-center">Bienvenue !</h3>

          {error && <Alert variant="danger" className="mb-3">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrer votre email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Gérer la modification de l'email
                className="rounded-3"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrer votre mot de passe"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Gérer la modification du mot de passe
                className="rounded-3"
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 rounded-3" disabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </Form>

          <hr />
          <p className="text-center text-muted mt-3">
            Pas encore de compte ?{' '}
            <Button
              variant="success"
              className="p-1"
              onClick={navigateToSignup} // Assurer que navigateToSignup soit défini ou gérer une redirection
            >
              S'inscrire
            </Button>
          </p>
        </Col>

        <Col xs={12} md={6} className="d-none d-md-flex bg-light justify-content-center align-items-center">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Illustration"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
