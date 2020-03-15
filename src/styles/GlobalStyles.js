import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize';
export default props =>
  <Global
    styles={css`
      @font-face {
        font-family: 'Mier A Regular';
        src: url('/fonts/MierA-Regular.woff2') format('woff2'), url('/fonts/MierA-Regular.woff') format('woff');
        font-weight: 600;
        font-style: normal
      }
      @font-face {
        font-family: 'Mier A Bold';
        src: url('/fonts/MierA-Bold.woff2') format('woff2'), url('/fonts/MierA-Bold.woff') format('woff');
        font-weight: 600;
        font-style: normal
      }
      ${emotionNormalize}
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100%;
      }
    `}
  />