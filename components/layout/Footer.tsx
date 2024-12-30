import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'; // Vous pouvez personnaliser le style dans ce fichier
import 'bootstrap/dist/css/bootstrap.min.css';


// Expressions régulières
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Footer = () => {
  // State pour gérer l'email et les erreurs
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');



  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-left">
          {/* Section Contact */}
          <Col xs={12} md={4}>
            <h5>Contactez-nous</h5>
            <p>
              Si vous avez des questions ou souhaitez en savoir plus, n'hésitez pas à nous contacter :
            </p>
            <p>Email : contact@exemple.com</p>
            <p>Téléphone : 01 49 48 05 05</p>
          </Col>

          {/* Section Liens rapides */}
          <Col xs={12} md={4}>
            <h5>Liens rapides</h5>
            <ul className="list-unstyled">
              <li>
                <a className="footer-a">Accueil</a>
              </li>
              <li>
                <a className="footer-a">Nos Actions</a>
              </li>
              <li>
                <a  className="footer-a">Zakat</a>
              </li>
              <li>
                <a className="footer-a">Bénévolat</a>
              </li>
            </ul>
          </Col>

          {/* Section Abonnement à la newsletter */}
          <Col xs={12} md={4}>
            <h5>Abonnez-vous à notre newsletter</h5>
            <p>Restez informé de nos dernières actions et actualités !</p>
            <form >
              <input 
                type="email" 
                className="form-control mb-3" 
                placeholder="Votre email" 
                value={email}
                required
              />
              {emailError && <p style={{color: 'red'}}>{emailError}</p>} {/* Afficher l'erreur email */}

             

              <Button variant="success" type="submit">S'abonner</Button>
            </form>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <p>&copy; 2024 Votre Organisation. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
