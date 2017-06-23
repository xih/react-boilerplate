import React from 'react'
import Radium from 'radium'
import { Carousel } from 'react-bootstrap'


import List from 'components/List'
import LoadingIndicator from 'components/LoadingIndicator'

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {

  }


  render() {
    const { carouselLoading, carouselError, carousels } = this.props

    console.log(carousels)
    if (carouselLoading) {
      return <List component={LoadingIndicator} />
    }

    if (carouselError !== false) {
      return (
        <div>
          Something went wrong, please try again!
        </div>
      )
    }

    if (carousels !== false ) {
      return (
        <Carousel>
          <Carousel.Item>
            <div style={styles.container}>
              <img style={styles.img} width={900} height={500} alt="900x500" src="http://dazedimg.dazedgroup.netdna-cdn.com/1400/azure/dazed-prod/1210/3/1213693.jpg"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={styles.container}>
              <img style={styles.img} width={900} height={500} alt="900x500" src="http://dazedimg.dazedgroup.netdna-cdn.com/1400/azure/dazed-prod/1210/3/1213178.jpg"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={styles.container}>
              <img style={styles.img} width={900} height={500} alt="900x500" src="http://dazedimg.dazedgroup.netdna-cdn.com/1400/azure/dazed-prod/1210/3/1213394.jpg"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      )
    }
    return null
  }
}

const styles = {
  container : {
    maxWidth: '100%',
    width: 'auto',
    height: '50em'
  },
  img : {
    height: '100%',
    width: '100%',
    objectFit: 'fill'
  }
}

export default Radium(HomeCarousel)
