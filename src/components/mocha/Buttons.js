import styled from 'styled-components'

const Button = styled.button`
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: 700;
  background-color: white;
  padding: 0.5em 1.2em;
  display: inline-block;
  color: ${ props => props.theme.brand.secondary };

  :hover {
    background-color: ${ props => props.theme.brand.secondary };
    color: white;
  }
`

export default Button
