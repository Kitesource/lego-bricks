import { shallowMount } from '@vue/test-utils'
import LShape from '../../src/components/LShape'
import { shapeDefaultProps } from '../../src/defaultProps'

describe('LShape.vue', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' },
    })
  })
  afterEach(() => {
    window.location = location as any
  })

  it('默认 LShape 渲染测试', () => {
    const props = {
      ...shapeDefaultProps,
    }
    const wrapper = shallowMount(LShape, { props })
    // 应该是 div 标签
    expect(wrapper.element.tagName).toBe('DIV')
    // 应该有 l-shape-component class
    expect(wrapper.classes()).toContain('l-shape-component')
    // 应该包含样式属性
    const style = wrapper.attributes().style
    expect(style.includes('width')).toBeTruthy()
    // 不应该包含被过滤的 prop
    expect(style.includes('actionType')).toBeFalsy()
  })

  it('LShape 设置背景颜色应该正确渲染', () => {
    const props = {
      ...shapeDefaultProps,
      backgroundColor: '#ff5500',
    }
    const wrapper = shallowMount(LShape, { props })
    const style = wrapper.attributes().style
    expect(style.includes('background-color')).toBeTruthy()
  })

  it('LShape 设置 actionType 和 URL 应该触发跳转', async () => {
    const testUrl = 'http://dummy.url'
    const props = {
      ...shapeDefaultProps,
      actionType: 'url',
      url: testUrl,
    }
    const wrapper = shallowMount(LShape, { props })
    await wrapper.trigger('click')
    expect(window.location.href).toBe(testUrl)
  })

  it('LShape 在 isEditing 模式下不应该触发跳转', async () => {
    const testUrl = 'http://dummy.url'
    const props = {
      ...shapeDefaultProps,
      actionType: 'url',
      url: testUrl,
      isEditing: true,
    }
    const wrapper = shallowMount(LShape, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe(testUrl)
  })

  it('LShape 应该正确应用边框样式', () => {
    const props = {
      ...shapeDefaultProps,
      borderStyle: 'dashed',
      borderColor: '#00ff00',
      borderWidth: '3px',
      borderRadius: '50%',
    }
    const wrapper = shallowMount(LShape, { props })
    const style = wrapper.attributes().style
    expect(style.includes('border-style: dashed')).toBeTruthy()
    expect(style.includes('border-color')).toBeTruthy()
    expect(style.includes('border-width: 3px')).toBeTruthy()
    expect(style.includes('border-radius: 50%')).toBeTruthy()
  })

  it('LShape 应该正确应用尺寸属性', () => {
    const props = {
      ...shapeDefaultProps,
      width: '200px',
      height: '100px',
    }
    const wrapper = shallowMount(LShape, { props })
    const style = wrapper.attributes().style
    expect(style.includes('width: 200px')).toBeTruthy()
    expect(style.includes('height: 100px')).toBeTruthy()
  })

  it('LShape 应该正确应用透明度和阴影', () => {
    const props = {
      ...shapeDefaultProps,
      opacity: '0.8',
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    }
    const wrapper = shallowMount(LShape, { props })
    const style = wrapper.attributes().style
    expect(style.includes('opacity: 0.8')).toBeTruthy()
    expect(style.includes('box-shadow')).toBeTruthy()
  })
})
