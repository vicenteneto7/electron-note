import PropTypes from 'prop-types'

export function Root({ children }) {
  return (
    <div className="flex-1 overflow-hidden flex items-center">
      <div className="inline-flex gap-2 text-sm text-rotion-100 items-center whitespace-nowrap region-no-drag">
        {children}
      </div>
    </div>
  )
}

Root.propTypes = {
  children: PropTypes.node
}
