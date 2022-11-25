import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
            </ul>
        </div>
        <div className='presentation'></div>
      </header>
    )
  }
}

export default Header