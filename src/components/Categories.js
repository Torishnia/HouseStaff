import React, { Component } from 'react';

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chairs',
                    name: 'Стільці'
                },
                {
                    key: 'armchair',
                    name: 'Крісло'
                },
                {
                    key: 'sofa',
                    name: 'Дивани'
                },
                {
                    key: 'decor',
                    name: 'Декор'
                },
                {
                    key: 'lamps',
                    name: 'Лампи'
                },
                {
                    key: 'commode',
                    name: 'Комоди'
                },
                {
                    key: 'bed',
                    name: 'Ліжко'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories