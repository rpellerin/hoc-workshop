import React from 'react'

export default addedProps => Component => props => (
  <Component {...addedProps} {...props} />
)
