import React from 'react';
import Header from '../Header.js';
import Project from '../Project.js';
import '../styles.css';

export default function HomePage() {
   return [
       <Header />,
       <Project />
   ]
}