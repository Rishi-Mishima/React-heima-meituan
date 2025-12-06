import classNames from 'classnames'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeActiveIndex } from '../../store/modules/takeaway'

const Menu = () => {
  // 从 Redux 获取 foodsList
  const { foodsList, activeIndex } = useSelector(state => state.foods)

  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  // const [activeIndex, setActiveIndex] = useState(0)

  const dispatch = useDispatch()

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            onClick={() => dispatch(changeActiveIndex(index))}
            className={classNames(
              'list-menu-item', activeIndex === index && 'active'
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
