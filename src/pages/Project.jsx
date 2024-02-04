import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Header from '../component/Header'
// import Footer from '../component/Footer'
import ProjectCard from '../component/ProjectCard'

import '../css/Project.css'


function Project() {

  const projects = [
    {
      src: '../project1.png',
      title: 'Implementing Double-Link Blockchain with Proof-of-Refundable-Tax Consesum',
      description: '',
      link: 'https://github.com/jason7580/PoRT-js',
    },
    {
      src: '../project2.png',
      title: 'Undergraduate research fellowship, National Science and Technology Council （NSTC), Taiwan',
      description: '',
      link: '#',
    },
  ];

  return (
    <>
      <Header />
      <Container className='container-project'>
        <Row >
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={6}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Footer /> */}
    </>

  )
}

export default Project