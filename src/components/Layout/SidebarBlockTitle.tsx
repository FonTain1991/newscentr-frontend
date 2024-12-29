import { memo, useMemo } from 'react'

interface ISidebarBlockTitle {
  title: string
  className?: string
}
export const SidebarBlockTitle = memo(({ title, className }: ISidebarBlockTitle) => {
  const _className = useMemo(() => {
    return ['bg-black text-white text-md py-1 px-3 inline-block uppercase', className].join(' ')
  }, [className])

  return (
    <h4 className={_className}>
      {title}
    </h4>
  )
})