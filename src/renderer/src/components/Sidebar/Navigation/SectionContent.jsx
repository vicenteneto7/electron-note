import PropTypes from 'prop-types'
export function SectionContent(props) {
  return <div className="flex flex-col gap-px" {...props} />
}

SectionContent.propTypes = {
  props: PropTypes.node
}
