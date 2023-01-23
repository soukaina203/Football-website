import React, { Component } from 'react'
// import './para.css'
export default class Paragraphe extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.title;
    this.Text = this.props.Text
    this.class = this.props.class
  }
  render() {
    return (
      <div className='flex flex-wrap relative left-[5%] w-[92%] lg:w-[85%] lg:ml-[5rem]'>
        <h2 className='font-bold lg:text-3xl'>{this.title}</h2>
        <p className='lg:text-[32px] font-normal'>{this.Text}</p>
      </div>
    )
  }
}


