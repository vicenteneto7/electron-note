import PropTypes from 'prop-types'

export function Root(props) {
  return <nav className="flex mx-2 flex-col gap-8 text-rotion-100" {...props} />
}
Root.propTypes = {
  props: PropTypes.node
}
