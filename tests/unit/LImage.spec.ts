import { shallowMount } from '@vue/test-utils'
import LImage from '../../src/components/LImage'
import { imageDefaultProps } from '../../src/defaultProps'

describe('LImage.vue', () => {
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

  it('默认 LImage 渲染测试', () => {
    const testSrc = 'https://example.com/test.png'
    const props = {
      ...imageDefaultProps,
      src: testSrc,
    }
    const wrapper = shallowMount(LImage, { props })
    // 应该是 img 标签
    expect(wrapper.element.tagName).toBe('IMG')
    // 应该有正确的 src 属性
    expect(wrapper.attributes('src')).toBe(testSrc)
    // 应该有 l-image-component class
    expect(wrapper.classes()).toContain('l-image-component')
    // 应该包含样式属性
    const style = wrapper.attributes().style
    expect(style.includes('width')).toBeTruthy()
    // 不应该包含被过滤的 prop
    expect(style.includes('actionType')).toBeFalsy()
    expect(style.includes('src')).toBeFalsy()
  })

  it('LImage 设置 actionType 和 URL 应该触发跳转', async () => {
    const testUrl = 'http://dummy.url'
    const props = {
      ...imageDefaultProps,
      src: 'https://example.com/test.png',
      actionType: 'url',
      url: testUrl,
    }
    const wrapper = shallowMount(LImage, { props })
    await wrapper.trigger('click')
    expect(window.location.href).toBe(testUrl)
  })

  it('LImage 在 isEditing 模式下不应该触发跳转', async () => {
    const testUrl = 'http://dummy.url'
    const props = {
      ...imageDefaultProps,
      src: 'https://example.com/test.png',
      actionType: 'url',
      url: testUrl,
      isEditing: true,
    }
    const wrapper = shallowMount(LImage, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe(testUrl)
  })

  it('LImage 应该正确应用边框样式', () => {
    const props = {
      ...imageDefaultProps,
      src: 'https://example.com/test.png',
      borderStyle: 'solid',
      borderColor: '#ff0000',
      borderWidth: '2px',
      borderRadius: '10px',
    }
    const wrapper = shallowMount(LImage, { props })
    const style = wrapper.attributes().style
    expect(style.includes('border-style: solid')).toBeTruthy()
    expect(style.includes('border-color')).toBeTruthy()
    expect(style.includes('border-width: 2px')).toBeTruthy()
    expect(style.includes('border-radius: 10px')).toBeTruthy()
  })

  it('LImage 应该正确应用透明度和阴影', () => {
    const props = {
      ...imageDefaultProps,
      src: 'https://example.com/test.png',
      opacity: '0.5',
      boxShadow: '0 4px 6px #000000',
    }
    const wrapper = shallowMount(LImage, { props })
    const style = wrapper.attributes().style
    expect(style.includes('opacity: 0.5')).toBeTruthy()
    expect(style.includes('box-shadow')).toBeTruthy()
  })
})
