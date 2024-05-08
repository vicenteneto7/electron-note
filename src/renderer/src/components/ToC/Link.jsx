import PropTypes from 'prop-types'

export function ToCLink(props) {
  return <a href="#" className="hover:text-rotion-50" {...props} />
}

ToCLink.propTypes = {
  props: PropTypes.node
}
