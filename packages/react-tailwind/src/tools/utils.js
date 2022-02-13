export const handleThemeChange = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const apiRootUrl = 'https://api.hackerwebapp.com'
export const hwItemUrl = 'https://news.ycombinator.com/item?id='
export const hwUserUrl = 'https://news.ycombinator.com/user?id='

const to = 'https://twitter.com/ac_czen'
export const links = [
  { title: 'Hacker News homepage', to },
  { title: 'Hacker News homepage', to },
  { title: 'Hacker News on Github', to },
  { title: 'Follow @ac_czen', to },
  { title: 'Send Feedback', to }
]

export const getCountOfReplies = comment => comment.comments.reduce((prev, curr) => prev + getCountOfReplies(curr), 1)
