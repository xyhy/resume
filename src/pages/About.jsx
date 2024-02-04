import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Header from '../component/Header'
// import Footer from '../component/Footer'

import picture from '../108062213-6.jpg'

import '../css/About.css'

function About() {
  return (
    <>
      <Header />
      <Container id='content-container'>
        <Row>
          <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
            <Image className='about-photo' src={picture} />
          </Col>
          <Col xxl={8} xl={8} lg={8} md={6} sm={12} className='about-text'>
            <h1>Yancy Yen</h1>
            I&apos;m a recent graduate from National Tsing Hua University with a Bechalor&apos;s in Computer Science.
            <br></br>
            Currently fufilled my military obligation until last December&apos;s end.
            <br></br>
            I spent a year and a half in Prof. Tsai Ren Song&apos;s Lab as an undergraduate intern researcher.
            My responsibilities included code refactoring and rewriting, implementing unit and integration tests, and attending weekly meeting.
            <br></br>
            I possess a robust programming foundation, with proficiecy in language like C, C++, JavaScript, and Python
            Alongside my technical skill, I excel in interpersonal communication.
            <br></br>
            I&apos;m actively pursuing software engineer position to apply my expertise and contribute to innovative project.
            <br></br>
            <hr></hr>
            <h3>Education</h3>
            <span>National Tsing Hua University, Departmant of Computer Science</span>
            <p>2019 Fall ~ 2023 Spring</p>
            <hr></hr>
            <h3>Abilities</h3>
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default About