import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/900.css'
import { Providers, WrapPage } from './src/components'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <WrapPage>{element}</WrapPage>
}

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  // tell the browser we're handling scroll position restoration manually
  window.history.scrollRestoration = 'manual'
  // transition duration from `PageTransition`
  const TRANSITION_DELAY = 1500
  // if it's a "normal" route
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }
  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location, location.key) || [0, 0]
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }
  return false
}
