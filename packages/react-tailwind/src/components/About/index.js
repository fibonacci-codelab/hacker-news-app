import { useEffect, useRef, useMemo } from 'react'
import Header from '../Header'
import Appearance from './Appearance'
import Links from './Links'
import Statement from './Statement'
import { CodiconHome } from '../../tools'

export default function About() {
  const props = {
    left: { content: <CodiconHome className="text-xl" />, to: '/' },
    title: 'About'
  }
  const refs = [useRef('light'), useRef('dark'), useRef('auto')]
  const themes = useMemo(() => ['Light', 'Dark', 'Auto'], [])

  useEffect(() => {
    const theme = localStorage.theme || 'auto'
    const index = themes.findIndex(t => t.toLowerCase() === theme)
    refs[index].current.checked = true
  }, [])

  $tools.useTitle('About - Hacker News')

  return (
    <>
      <Header {...props} />
      <div className="p-3 bg-[#f6f6ef] flex-1 dark:bg-hacker-dark-more border-x dark:border-hacker-dark-less">
        <Appearance refs={refs} themes={themes} />
        <Links />
        <Statement />
      </div>
    </>
  )
}
