/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Крісло білого кольору',
          img: 'armchair_white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'armchair',
          price: '1500'
        },
        {
          id: 2,
          title: 'Диван',
          img: 'sofa_2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '4080'
        },
        {
          id: 3,
          title: 'Крісло синього кольору',
          img: 'armchair_dark_blue.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'armchair',
          price: '2000'
        },
        {
          id: 4,
          title: 'Декоративна підставка',
          img: 'decor.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'decor',
          price: '350'
        },
        {
          id: 5,
          title: 'Стілець',
          img: 'chair_orange.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '545'
        },
        {
          id: 6,
          title: 'Плечіки для одягу',
          img: 'sh_strap.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'decor',
          price: '230'
        },
        {
          id: 7,
          title: 'Стілець',
          img: 'chair_3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '655'
        },
        {
          id: 8,
          title: 'Лампа',
          img: 'light_2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamps',
          price: '390'
        },
        {
          id: 9,
          title: 'Стілець',
          img: 'chair_2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '476'
        },
        {
          id: 10,
          title: 'Диван',
          img: 'sofa_white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '3500'
        },
        {
          id: 11,
          title: 'Ліжко',
          img: 'bed_2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'bed',
          price: '4500'
        },
        {
          id: 12,
          title: 'Диван',
          img: 'sofa_3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '4500'
        },
        {
          id: 13,
          title: 'Ліжко',
          img: 'bed.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'bed',
          price: '4000'
        },
        {
          id: 14,
          title: 'Комод',
          img: 'commode.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'commode',
          price: '2999'
        },
        {
          id: 15,
          title: 'Ліжко',
          img: 'bed_3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'bed',
          price: '3000'
        },
        {
          id: 16,
          title: 'Лампа',
          img: 'light.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamps',
          price: '260'
        },
        {
          id: 17,
          title: 'Дзеркало',
          img: 'mirror.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'decor',
          price: '600'
        },
        {
          id: 18,
          title: 'Лампа',
          img: 'light_3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'lamps',
          price: '650'
        },
        {
          id: 19,
          title: 'Комод',
          img: 'commode_2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'commode',
          price: '1800'
        },
        {
          id: 20,
          title: 'Крісло',
          img: 'armchair_3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'armchair',
          price: '2099'
        },
        {
          id: 21,
          title: 'Комод',
          img: 'commode_3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'commode',
          price: '3100'
        },
      ]
    }

    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer/>
      </div>
    )
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
      if (!isInArray)
        this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
