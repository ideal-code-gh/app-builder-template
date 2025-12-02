import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  defaultTheme,
  Flex,
  Provider
} from '@adobe/react-spectrum'

export default () => {
  // eslint-disable-next-line no-undef
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider
        theme={defaultTheme}
        UNSAFE_style={{backgroundColor: '#fff'}}
      >
        <Flex marginTop="size-300">
          This paragraph is being rendered by Spectrum React component.
        </Flex>
      </Provider>
    </StrictMode>
  )
}
