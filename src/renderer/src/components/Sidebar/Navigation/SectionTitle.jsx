import PropTypes from 'prop-types'
export function SectionTitle(props) {
  return <div className="text-rotion-300 mx-3 uppercase text-xs font-semibold" {...props} />
}

SectionTitle.propTypes = {
  props: PropTypes.node
}
