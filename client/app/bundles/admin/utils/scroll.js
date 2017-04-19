import SweetScroll from 'sweet-scroll'

const scroll = (target, options) => {
  const sweetScroll = new SweetScroll({
    ...options,
    easing: 'easeInOutQuad'
  })
  sweetScroll.to(target)
}

export default scroll
