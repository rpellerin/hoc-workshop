import React from 'react'

export default addedFunctions => Component => props => {
  const addedProps = Object.entries(addedFunctions).reduce(
    (acc, [key, v]) => ({ ...acc, [key]: v(props) }),
    {}
  )
  return <Component {...addedProps} {...props} />
}
