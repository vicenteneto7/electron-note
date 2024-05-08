import PropTypes from 'prop-types'

export function ToCRoot(props) {
  return <div className="flex flex-col text-sm text-rotion-100 gap-2 mt-2" {...props} />
}

ToCRoot.propTypes = {
  props: PropTypes.node
}
