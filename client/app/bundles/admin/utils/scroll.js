import SweetScroll from 'sweet-scroll'

const scroll = (options) => {
  const sweetScroll = new SweetScroll({
    easing: 'easeInOutQuad'
  })
  sweetScroll.to(options)
}

export default scroll
