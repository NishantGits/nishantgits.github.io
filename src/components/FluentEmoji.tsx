import React from 'react';
import { Modern } from 'react-fluentui-emoji';

const emojiMap: Record<string, React.FC<any>> = {
  waving_hand: Modern.IconMWavingHandDefault,
  house: Modern.IconMHouse,
  laptop: Modern.IconMLaptop,
  bullseye: Modern.IconMBullseye,
  envelope: Modern.IconMEnvelope,
  rocket: Modern.IconMRocket,
  person: Modern.IconMPersonDefault,
  briefcase: Modern.IconMBriefcase,
  hammer_and_wrench: Modern.IconMHammerAndWrench,
  speech_balloon: Modern.IconMSpeechBalloon,
  sparkles: Modern.IconMSparkles,
  robot: Modern.IconMRobot,
  locked_with_key: Modern.IconMLockedWithKey,
  memo: Modern.IconMMemo,
  high_voltage: Modern.IconMHighVoltage,
  bar_chart: Modern.IconMBarChart,
  busts_in_silhouette: Modern.IconMBustsInSilhouette,
  link: Modern.IconMLink,
  artist_palette: Modern.IconMArtistPalette,
  mobile_phone: Modern.IconMMobilePhone,
  handshake: Modern.IconMHandshake,
  shield: Modern.IconMShield,
  floppy_disk: Modern.IconMFloppyDisk,
  star: Modern.IconMStar,
  page_facing_up: Modern.IconMPageFacingUp,
  red_heart: Modern.IconMRedHeart,
};

interface FluentEmojiProps {
  name: string;
  size?: number;
}

const FluentEmoji: React.FC<FluentEmojiProps> = ({ name, size = 24 }) => {
  const EmojiComponent = emojiMap[name];

  if (!EmojiComponent) {
    console.warn(`FluentEmoji: Emoji "${name}" not found in map.`);
    return <span>{name}</span>;
  }

  return <EmojiComponent width={size} height={size} />;
};

export default FluentEmoji;
