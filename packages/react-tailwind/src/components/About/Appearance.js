import { handleThemeChange } from '../../tools'

export default function Appearance({ themes, refs }) {
  return (
    <div
      className="bg-white p-2 border shadow-sm rounded-sm mb-3 
    dark:text-hacker-light dark:bg-hacker-dark-normal dark:border-hacker-dark-less"
    >
      <span className="mr-2">Appearance</span>
      {themes.map((theme, index) => (
        <label key={index} className="mr-2">
          <input
            ref={refs[index]}
            type="radio"
            value={theme.toLowerCase()}
            name="appearance"
            onChange={() => {
              localStorage.theme = theme.toLowerCase()
              handleThemeChange()
            }}
          />{' '}
          {theme}
        </label>
      ))}
    </div>
  )
}
