import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('book'); 
  let content;
  if (view === 'book') {
    content = <BookDetails />;
  } else if (view === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📚 Blogger App</h1>

      <button onClick={() => setView('book')}>Show Book</button>
      <button onClick={() => setView('blog')}>Show Blog</button>
      <button onClick={() => setView('course')}>Show Course</button>

      <hr />

      <h3>Element Variable Conditional Rendering</h3>
      {content}

      <h3>Ternary Conditional Rendering</h3>
      {
        view === 'book' ? <BookDetails /> :
        view === 'blog' ? <BlogDetails /> :
        <CourseDetails />
      }

      <h3>Short-Circuit Rendering</h3>
      {view === 'book' && <BookDetails />}
      {view === 'blog' && <BlogDetails />}
      {view === 'course' && <CourseDetails />}
    </div>
  );
}

export default App;

