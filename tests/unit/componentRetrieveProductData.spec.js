import { shallowMount } from '@vue/test-utils';
import RetrieveProductData from '@/components/RetrieveProductData.vue';

describe('RetrieveProductData.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Tablets';
    const wrapper = shallowMount(RetrieveProductData, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it('should show a different html element on error', () => {
    const wrapper = shallowMount(RetrieveProductData);
    wrapper.setData({
      errored: true,
      loading: false,
    });
    const errorMessage = wrapper.find('.error-message');
    expect((errorMessage).exists()).toBeTruthy();
    expect(wrapper.is('div'));
    expect(wrapper.find('.loading').exists()).toBe(false);
  });
  it('should not show an error html element', () => {
    const wrapper = shallowMount(RetrieveProductData);
    wrapper.setData({
      errored: false,
    });
    expect(wrapper.find('.error-message').exists()).toBe(false);
  });
});
