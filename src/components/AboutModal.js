import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import aboutImage from '../assets/about.webp';

const AboutModal = ({ show, handleClose }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      fullscreen={true}
      className="about-modal"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>À propos de Box8</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0" style={{ overflowY: 'auto' }}>
        <div className="about-content" 
          style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px 20px',
          }}
        >
          <div className="text-center mb-5">
            <img 
              src={aboutImage} 
              alt="Box8 Interface" 
              style={{ 
                width: '100%',
                height: 'auto',
                borderRadius: '0 0 16px 16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
          
          <div className="content-wrapper" style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Box8</h1>
            
            <p className="lead" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Box8 est une application de conception et d'exécution de workflows basée sur un système d'agents. 
              Elle permet de créer, gérer et exécuter des diagrammes de flux de travail interactifs avec une interface graphique moderne.
            </p>
            
            <p><em>Dernière mise à jour : Janvier 2025</em></p>
            
            <div className="features-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div className="feature-section">
                <h2>Composants de Diagramme</h2>
                <ul className="feature-list" style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Agents</strong>
                    <p>Nœuds intelligents avec états, rôles et objectifs configurables</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Connexions</strong>
                    <p>Flux de données animés avec indicateurs d'état</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Sorties</strong>
                    <p>Visualisation formatée des résultats avec prévisualisation</p>
                  </li>
                </ul>
              </div>

              <div className="feature-section">
                <h2>Interface Utilisateur</h2>
                <ul className="feature-list" style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Modales Interactives</strong>
                    <p>Configuration intuitive des agents et workflows</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Gestion de Fichiers</strong>
                    <p>Import/export et édition de fichiers JSON</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Profil Utilisateur</strong>
                    <p>Personnalisation complète et gestion des préférences</p>
                  </li>
                </ul>
              </div>

              <div className="feature-section">
                <h2>Fonctionnalités Avancées</h2>
                <ul className="feature-list" style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Temps Réel</strong>
                    <p>Mises à jour instantanées via WebSocket</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Multi-thèmes</strong>
                    <p>Support des modes clair/sombre</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Performance</strong>
                    <p>Chargement optimisé et monitoring en temps réel</p>
                  </li>
                </ul>
              </div>

              <div className="feature-section">
                <h2>Sécurité et Intégration</h2>
                <ul className="feature-list" style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Authentification</strong>
                    <p>Support multi-méthodes (Email, SSO, OAuth2)</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>API</strong>
                    <p>Gestion sécurisée des clés API</p>
                  </li>
                  <li className="mb-3">
                    <strong style={{ color: '#1a73e8' }}>Données</strong>
                    <p>Validation et synchronisation multi-onglets</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prerequisites" style={{ 
              marginTop: '3rem',
              padding: '2rem',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{ color: '#1a73e8', marginBottom: '1.5rem' }}>Prérequis Techniques</h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
              }}>
                <div>
                  <h4>Frontend</h4>
                  <p>Node.js 18+ et npm</p>
                </div>
                <div>
                  <h4>Backend</h4>
                  <p>Python 3.11+</p>
                </div>
                <div>
                  <h4>Cache</h4>
                  <p>Redis 7+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="primary" size="lg" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;
