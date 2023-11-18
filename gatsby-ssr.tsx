import React from 'react'
import type { GatsbySSR } from 'gatsby'
import { Providers, WrapPage } from './src/components'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <WrapPage>{element}</WrapPage>
}
