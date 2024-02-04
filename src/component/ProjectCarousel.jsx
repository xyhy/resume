import { React, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';


import './ProjectCarousel.css'

function ProjectCarousel() {
  
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState('');
  const handleShow = (e) => {
    setShow(true);
    setIndex(e.target.id);
  }
  const handleClose = () => {
    setShow(false);
    setIndex('');
  }

  return (
    <>
      <Carousel className='carouselCustomized d-blcok w-100' controls={true} pause='hover'>
        <Carousel.Item interval={1000}>
          <img className='carouselPicture d-blcok w-100' src='../carouselExample-1.jpg' alt='First slide' id='modal-pic-1' onClick={handleShow} />
          <Carousel.Caption className='caption' id='first-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item> */}
          {/* <ExampleCarouselImage text="Second slide" /> */}
          {/* <Carousel.Caption> */}
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          {/* </Carousel.Caption> */}
        {/* </Carousel.Item> */}
        {/* <Carousel.Item> */}
          {/* <ExampleCarouselImage text="Third slide" /> */}
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        {/* </Carousel.Item> */}
      </Carousel>

      <Modal show={show && index=='modal-pic-1'} onHide={handleClose} size='xl' fullscreen='sm-down'>
        <Modal.Header closeButton>
          <Modal.Title>Implementing Double-Link Blockchain with Proof-of-Refundable-Tax Consesum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href='https://github.com/jason7580/PoRT-js' target='_blank' rel='noopener noreferrer'>Github</a>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCarousel;