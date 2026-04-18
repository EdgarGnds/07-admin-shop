import { getProductById } from '@/modules/products/actions';
import { useQuery } from '@tanstack/vue-query';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    productId: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { data: product } = useQuery({
      queryKey: ['product', props.productId],
      queryFn: () => getProductById(props.productId),
      retry: false,
    });

    return {
      // Properties

      // Getters
      allSizes: ['XS', 'X', 'M', 'L', 'XL', 'XXL'],

      // Actions
    };
  },
});
