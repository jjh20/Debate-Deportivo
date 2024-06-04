import React from 'react'
import './index.css'
import Header from './components/Header';
import Main from './components/Main'
import NewNotice from './components/NewNotice';
import { ArticleContainer } from './components/ArticleContainers';

function App() {
 

  return (
    <main className='px-4 pt-6'>
    <Header />
    <div className='md:flex md:gap-8'>
    <Main />
    <NewNotice />
    <ArticleContainer />
    </div>
    </main>
  )
} 

export default App;


