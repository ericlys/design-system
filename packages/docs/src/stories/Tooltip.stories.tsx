import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProvider,
  TooltipProps,
} from '@eric-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'Hi, i am a Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Box
            css={{
              display: 'flex',
              padding: '$10',
              background: '$gray600',
            }}
          >
            {Story()}
          </Box>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
