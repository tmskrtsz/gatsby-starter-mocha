import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: ${ props => props.maxWidth || props.theme.container.xl }px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  background-color: ${ props => props.bgColor };
`

Container.propTypes = {
  maxWidth: PropTypes.number,
}

Wrapper.propTypes = {
  bgColor: PropTypes.string.isRequired,
}

export { Container, Wrapper }
