import React, { useEffect } from 'react'

import TocIcon from '@mui/icons-material/Toc';
import * as Dom from '../../utils/dom'
import { className } from '../../constants/className'
import { useScrollEvent } from '../../hooks/useScrollEvent'
import * as EventManager from '../../utils/event-manager'

import './index.scss'

const HEADER_OFFSET_Y = 180

function getHeaderElements() {
  const headerSelectors = `.${className.post_content} > h0, h1, h2, h3, h4, h5, h6`
  return Array.from(Dom.getElements(headerSelectors))
}

function getElementTopPos(element) {
  const currentoffsetY = window.pageYOffset
  const { top } = element.getBoundingClientRect()

  return top + currentoffsetY
}

function getTOCHrefPullPath(headerID) {
  return `${window.location.pathname}#${encodeURI(headerID)}`
}

export const TableOfContents = ({ toc }) => {
  const onScroll = () => {
    const currentoffsetY = window.pageYOffset
    const headerElements = getHeaderElements()
    for (const headerElement of headerElements) {
      if (!!headerElement.id === false) continue // id가 없으면 패스(markdown에서 잘못 적은 것)
      const headerElementTop = getElementTopPos(headerElement)
      const href = getTOCHrefPullPath(headerElement.id)
      const tocLinkElement = Dom.getElement(`a[href="${href}"]`)

      if (currentoffsetY >= headerElementTop - HEADER_OFFSET_Y) {
        headerElement && headerElement.classList.add('toc-header-active')
        tocLinkElement && tocLinkElement.classList.add('toc-active')
      } else {
        headerElement && headerElement.classList.remove('toc-header-active')
        tocLinkElement && tocLinkElement.classList.remove('toc-active')
      }
    }
  }

  useScrollEvent(() => {
    return EventManager.toFit(onScroll, {})()
  })

  useEffect(() => {
    const headerElements = getHeaderElements()

    headerElements.forEach(headerElement => {
      headerElement.classList.add('toc-header') // active 애니메이션 효과를 위해 사전에 클래스 추가

      const headerElementTop = getElementTopPos(headerElement)
      const tocLinkElement = Dom.getElement(
        `a[href="${getTOCHrefPullPath(headerElement.id)}"]`
      )

      if (tocLinkElement)
        tocLinkElement.addEventListener('click', e => {
          e.preventDefault()
          window.scroll({ top: headerElementTop, behavior: 'smooth' })
        })
    })
  })

  return (
    <div className='table-of-contents'>
      <div className="table-header" >
        <div className="table-header-icon">
          <TocIcon />
        </div>
        <div className="table-header-title">
          목차
        </div>
      </div>
      <div className="content-table">
        <div className="table" dangerouslySetInnerHTML={{ __html: toc }} />
      </div>
    </div>
  )
}
