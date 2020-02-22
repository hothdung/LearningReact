import React, { Component } from 'react';
import Sidebar from './Sidebar'

const students = [
  { name: 'seokwonchoi', label: 'Seokwon Choi', color: '#9f2525' },
  { name: 'kevinhuh', label: 'Kevin Huh', color: '#f5624d' },
  { name: 'dorotheaschaan', label: 'Dorothea Schaan', color: '#2bce79' },
  { name: 'minheeseo', label: 'Minhee Seo', color: '#34a65f' },
  { name: 'jiwonyoon', label: 'Jiwon Yoon', color: '#0f8a5f' },

]
class App extends Component {
  render() {
    return (
      <div>
        <Sidebar students={students} />
      </div>
    )
  }
}

export default App
