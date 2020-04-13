import React from 'react'
import { createHashHistory } from 'history'
import PropTypes from 'prop-types'
export const history = createHashHistory()
const EventEmitter = require('events').EventEmitter
export const eventEmitter = new EventEmitter()
export const withRef = (WrappedComponent) => {
  return class Ref extends React.PureComponent {
    static displayName = `withRef(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    static propTypes = {
      getInstance: PropTypes.func
    }
    render () {
      // 这里重新定义一个props的原因是:
      // 你直接去修改this.props.ref在react开发模式下会报错，不允许你去修改
      const props = {
        ...this.props,
      }
      // 在这里把getInstance赋值给ref，
      // 传给`WrappedComponent`，这样就getInstance能获取到`WrappedComponent`实例
      // 感谢评论区的[yangshenghaha]同学的完善
      props.ref = (el) => {
        this.props.getInstance && this.props.getInstance(el)
        // this.props.ref && this.props.ref(el)
      }
      return (
        <WrappedComponent {...props} />
      )
    }
  }
}
/**
 * 订约事件(用此方法前，子组件需要用withRef包装一下)
 */
export const listenersEvent = eventName => Tmpl => {
  return class ListenersEvent extends React.PureComponent {
    eventName = []
    hasRunBlankFun = false
    componentDidMount () {
      this.handleFun('on')
    }
    blankFun = () => {
      // console.log(this.hasRunBlankFun)
      if (!this.hasRunBlankFun) {
        this.eventName.forEach(v => {
          console.warn('缺少' + v + '事件对应的回调函数')
        })
        this.hasRunBlankFun = true
      } else {
        this.hasRunBlankFun = false
      }
    }
    handleFun = type => {
      try {
        const eventEmitterFun = (name) => {
          const callback = this.childCp[name ? `${name}Callback` : 'eventCallback']
          type = type || 'removeListener'
          if (!callback) {
            // 如何组件中没有传递回调函数
            this.eventName.push(name)
          }
          eventEmitter[type](name || 'listenerEvent', callback || this.blankFun)
        }
        if ((eventName instanceof Array) && eventName.length) {
          eventName.forEach(v => {
            eventEmitterFun(v)
          })
        } else {
          typeof eventName === 'string' && eventEmitterFun(eventName)
        }
      } catch (error) {
        console.error(error.toString())
      }
    }
    componentWillUnmount () {
      this.handleFun()
      this.eventName = []
      this.hasRunBlankFun = false
    }
    render () {
      return <Tmpl
        {...this.props}
        getInstance={(childCp) => { this.childCp = childCp }} />
    }
  }
}
