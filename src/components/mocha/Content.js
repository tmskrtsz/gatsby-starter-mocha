import styled from 'styled-components'
import { rgba, darken } from 'polished'

const Content = styled.div`
  padding: 1.2em;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    line-height: 1;
  }

  p {
    font-size: 2rem;
    padding: 1em 0;
    color: ${ props => rgba(darken(0.8, props.theme.brand.primary), 0.8) };
  }
`

export default Content
