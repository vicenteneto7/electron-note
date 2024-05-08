import PropTypes from 'prop-types'

export function Section(props) {
  return <div className="flex flex-col gap-2" {...props} />
}
Section.propTypes = {
    props: PropTypes.node
}
  