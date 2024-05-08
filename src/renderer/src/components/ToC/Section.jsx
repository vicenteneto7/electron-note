import PropTypes from 'prop-types'

export function ToCSection(props) {
  return <div className="flex flex-col gap-2 px-2" {...props} />
}

ToCSection.propTypes = {
  props: PropTypes.node
}
