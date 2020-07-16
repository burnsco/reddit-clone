/** @jsx jsx */
import { jsx } from '@emotion/core'
import { space, layout, color, typography } from 'styled-system'

export default props => (
  <main
    {...props}
    css={{
      ...space,
      ...layout,
      ...color,
      ...typography,
      '*,\n  *:before,\n  *:after': {
        boxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
      },
      fontFamily: 'system-ui',
      display: 'flex',
      flexDirection: 'column',
      scrollBehavior: 'smooth',
      justifyContent: 'center',
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
      MsTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      textRendering: 'optimizeLegibility',
      overflowX: 'hidden',
      wordWrap: 'break-word',
      fontKerning: 'normal',
      mozFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      msFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      webkitFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      fontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
    }}
  />
)
