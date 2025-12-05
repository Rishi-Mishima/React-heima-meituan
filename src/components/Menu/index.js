import classNames from 'classnames'
import './index.scss'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Menu = () => {
  // 从 Redux 获取 foodsList
  const { foodsList } = useSelector(state => state.foods)

  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            onClick={() => setActiveIndex(index)}
            className={classNames(
              'list-menu-item', index === activeIndex && 'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
