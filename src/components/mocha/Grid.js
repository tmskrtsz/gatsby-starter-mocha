import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  max-width: ${ props => props.maxWidth || props.theme.container.xl }px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  background-color: ${ props => props.bgColor };
`

Wrapper.propTypes = {
  maxWidth: PropTypes.number.isRequired,
}

Wrapper.propTypes = {
  bgColor: PropTypes.string.isRequired,
}

export { Container, Wrapper }
