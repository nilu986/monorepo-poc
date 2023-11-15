import { storiesOf } from '@storybook/vue'
import Calculator from './Calculator'

storiesOf('Calculator', module)
  .add('normal', () => ({
    components: { Calculator },
    template:
    `
      <Calculator
        :values="values"
      />
    `,
    data: () => ({
      values: []
    })
  }))