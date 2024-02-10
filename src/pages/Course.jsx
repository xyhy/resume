import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../component/Header'
// import Footer from '../component/Footer'

import '../css/Course.css'

function Course() {

  const years = ['2019', '2020', '2021', '2022', '2023'];

  const courses = {
    '2023': [
      { name: '多媒體技術概論 Introduction to Multimedia', link: 'https://github.com/xyhy/CS357000_Introduction-to-Multimedia' },
      { name: '軟體工程 Software Engineering', link: 'https://github.com/xyhy/CS446100_Software-Engineering' },
      { name: '高等賽局理論與應用 Advanced game Theory and its applications', link: '' },
      { name: '計算機圖學 Computer Graphics', link: 'https://github.com/xyhy/CS550000_Computer-Graphics' },
      { name: '金融商品程式交易策略研究\u001AResearch on Program Trading Strategy for Financial Products', link: 'https://github.com/xyhy/ISA532300_Research-on-Program-Trading-Strategy-for-Financial-Products' }
    ],
    '2022': [
      { name: '計算機系統管理 Computer System Administration', link: '' },
      { name: '人工智慧概論 Introduction to Intelligent Computing', link: 'https://github.com/xyhy/CS460100_Introduction-to-Intelligent-Computing' },
      { name: '元宇宙與科技創新 Technology Innovation and the Metaverse', link: '' },
      { name: '賽局理論及應用 Game theory and its Applications', link: '' },
      { name: '正規語言 Formal Language & Automata', link: '' },
      { name: '計算機結構 Computer Architecture', link: 'https://github.com/xyhy/CS410002_Computer-Architecture' },
      { name: '雲端計算 Cloud Computing', link: 'https://github.com/xyhy/CS542100_Cloud-Computing' },
      { name: '應用密碼學 Applied Cryptography', link: '' }
    ],
    '2021': [
      { name: '作業系統 Operating Systems', link: 'https://github.com/xyhy/CS342301_Operating-Systems' },
      { name: '計算方法設計 Design and Analysis of Algorithms', link: 'https://github.com/xyhy/CS431102_Design-and-Analysis-of-Algorithms' },
      { name: '機器學習概論 Introduction to Machine Learning', link: 'https://github.com/xyhy/CS460200_Introduction-to-Machine-Learning' },
      { name: '邏輯設計實驗 Logic Design Laboratory', link: 'https://github.com/xyhy/EECS207001_Logic-Design-Laboratory' },
      { name: '軟體設計與實驗 Software Studio', link: 'https://github.com/xyhy/CS241002_Software-Studio' },
    ],
    '2020': [
      { name: '資料結構 Data Structures', link: 'https://github.com/xyhy/EECS204001_Data-Structures' },
      { name: '計算機網路概論 Introduction to Computer Networks', link: 'https://github.com/xyhy/EECS302002_Introduction-to-Computer-Networks' },
      { name: '計算機程式設計二 Introduction to Programming (II)', link: 'https://github.com/xyhy/CS135502_Introduction-to-Programming' },
      { name: '邏輯設計 Logic Design', link: '' }
    ],
    '2019': [
      { name: '計算機程式設計一 Introduction to Programming (I)', link: 'https://github.com/xyhy/CS135502_Introduction-to-Programming' },
    ],
    // Add courses for other years
  };


  return (
    <>
      <Header />
      <Container className="course-container mt-5">
        {years?.slice(0).reverse().map((year) => (
          <div key={year} className="mb-4">
            <h2>{year}</h2>
            <Row>
              {courses[year]?.map((course, index) => (
                <Col key={index} xs={12} md={4} lg={3}>
                  <a href={course.link} className='course-link' target='_blank' rel='noopener noreferrer'>{course.name}</a>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default Course
