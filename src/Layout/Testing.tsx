import { Button, Group, HoverCard, Text } from '@mantine/core'

const Testing = () => {
  return (
    <div>
      <div className='h-screen w-full'></div>
        <Group justify="center">
      <HoverCard
        width={280}
        shadow="md"
        position="bottom"           // Default position
        withArrow                   // Optional arrow
        openDelay={100}
        closeDelay={200}
        withinPortal={false}       // Keeps it within the flow, so flipping works
        transitionProps={{ duration: 200 }}
      >
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>

        <HoverCard.Dropdown>
          <Text size="sm">
            This card will flip to top or bottom based on space.
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
    </div>
  )
}

export default Testing;