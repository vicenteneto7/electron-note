import clsx from 'clsx'

import PropTypes from 'prop-types'


export function Item({ isActive = false, children }) {
  const Comp = isActive ? 'span' : 'a'

  return (
    <Comp
      href="#"
      className={clsx('inline-flex items-center gap-2 hover:text-rotion-50', {
        'text-rotion-50': isActive,
      })}
    >
      {children}
    </Comp>
  )
}

Item.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node
}