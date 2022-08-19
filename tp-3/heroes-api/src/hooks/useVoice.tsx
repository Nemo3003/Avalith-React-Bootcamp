import React, {useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { HeroByPublisherPage } from '../heroes/pages/HeroByPublisherPage';
import { SearchPage } from '../heroes/pages/SearchPage';
import { BrowserRouter,Route, Link, Redirect } from 'react-router-dom';

export const UseVoice = () => {
  return <div>
    <BrowserRouter>
      <div id="links">
        <Link to="/index">HOME</Link>
        <Link to="/search">SEARCH</Link>
      </div>
    </BrowserRouter>
  </div>
}