// Project.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

import './ProjectCard.css';

function ProjectCard({ src, title, description, link }) {
  return (
    <Card>
      <Button variant='outline-secondary' href={link} target='_blank' rel='noopener noreferrer'>
        <Card.Img variant='top' src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Button>
    </Card>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
