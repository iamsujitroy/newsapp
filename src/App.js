import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  apiKey = '17415b94ff6c4174b746f22c7199b044'
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exect path='/' element={<News title='All Headlineds' key='allTopHeadlines' apiLink={'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + this.apiKey}/>} />

          <Route exect path='business' element={<News title='All Headlineds' key='business' apiLink={'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=' + this.apiKey} />} />

          <Route exect path='entertainment' element={<News title='All Headlineds' key='entertainment' apiLink={'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=' + this.apiKey} />} />

          <Route exect path='sports' element={<News title='All Headlineds' key='sports' apiLink={'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=' + this.apiKey} />} />

          <Route exect path='technology' element={<News title='All Headlineds' key='technology' apiLink={'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=' + this.apiKey} />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

