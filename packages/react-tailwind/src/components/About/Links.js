import { links } from '../../tools'
export default function Links() {
  return (
    <div
      className="bg-white border dark:border-hacker-dark-less divide-y shadow-sm rounded-sm mb-4
    dark:bg-hacker-dark-normal dark:divide-hacker-dark-less"
    >
      {links.map(({ title, to }, index) => (
        <a key={index} href={to} className="block p-2 hover:bg-[#f6f6ef] dark:hover:bg-hacker-dark-less">
          {title}
        </a>
      ))}
    </div>
  )
}
