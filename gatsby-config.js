const metadata = require('./src/config/metadata')
const navigation = require('./src/config/navigation')
const plugins = require('./src/config/plugins')

module.exports = {
  siteMetadata: {
    ...metadata,
    navigation,
  },
  ...plugins,
}
