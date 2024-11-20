import { Group, Text } from '@mantine/core';
import { BrandTwitch, BrandGithub, Heart } from 'tabler-icons-react';
import BrandButton from './BrandButton';

function MyCredits() {
  return (
    <Text color="dimmed" size="xs" weight={400}>
      <Group spacing={1}>
        <div>by</div>
        <BrandButton href="https://github.com/JakeMiki" icon={<BrandGithub size={16} />}>
          JakeMiki
        </BrandButton>
        <div>& forked by</div>
        <BrandButton href="https://supa.sh" icon={<Heart size={16} />}>
          Supa
        </BrandButton>
      </Group>
    </Text>
  );
}

export default MyCredits;
