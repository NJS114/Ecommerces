import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faBook, faLeaf, faCogs } from '@fortawesome/free-solid-svg-icons';
import TwoPartSection from '@/components/twoPartSection/TwoPartSection'; 
import ImageAndTextSection from '@/components/twoPartSection/ImageAndTextSection'; 
import StepsCards from '@/components/stedsCard/StepsCards';
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from 'framer-motion';

const Home = () => {
  const benefits = [
    {
      icon: faMoneyBillWave,
      title: 'Économique',
      text: 'Louez des livres pour une fraction du prix d\'achat.',
    },
    {
      icon: faBook,
      title: 'Grande variété',
      text: 'Accédez à une large collection de livres pour tous les goûts.',
    },
    {
      icon: faLeaf,
      title: 'Écologique',
      text: 'Contribuez à la protection de l\'environnement en réutilisant les livres.',
    },
    {
      icon: faCogs,
      title: 'Facile à utiliser',
      text: 'Une gestion simple et rapide de vos locations de livres.',
    },
  ];

  return (
    <div>
      <ImageAndTextSection
        imageSrc="/photo/book.avif"
        title="Des livres à portée de main, où que vous soyez."
        subtitle="Découvrez, louez, dévorez vos histoires préférées en quelques clics."
        description="Que vous soyez amateur de romans, de thrillers haletants ou de récits inspirants, notre plateforme vous offre un accès illimité à une bibliothèque variée. Louez vos livres préférés en toute simplicité et profitez de la magie des mots, sans encombrer vos étagères."
        buttonText="Proposer vos œuvres"
        buttonLink="/auteurs-independants"
      />

      <section className="benefits-section py-5">
        <Container>
          <h2 className="text-center mb-5" style={{ color: '#00725E' }}>Les avantages de la location de livres</h2>
          <Row>
            {benefits.map((benefit, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="h-100 text-center">
                  <Card.Body>
                    <FontAwesomeIcon icon={benefit.icon} size="3x" className="mb-3" />
                    <Card.Title>{benefit.title}</Card.Title>
                    <Card.Text>{benefit.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <ImageAndTextSection
        imageSrc="/photo/Reader3.jpg"
        title="Bienvenue chez Lectio"
        subtitle="Réinventons la lecture pour tous"
        description="Chez [Nom de votre société], nous rendons la lecture accessible à tous grâce à notre système de location. Explorez une vaste collection de livres, économisez de l'argent et participez à une démarche écoresponsable."
        buttonText="Explorer notre collection"
        buttonLink="/collection"
      />

      <StepsCards />

      <ImageAndTextSection
        imageSrc="/photo/Reader2.jpg"
        title="Mettez en avant vos œuvres"
        subtitle="Pour les auteurs indépendants"
        description="Vous êtes auteur ? Profitez de notre plateforme pour partager vos écrits avec un public passionné. Nous vous aidons à promouvoir vos œuvres et à toucher une audience plus large."
        buttonText="Proposer vos œuvres"
        buttonLink="/auteurs-independants"
      />
    </div>
  );
};

export default Home;
