export const iconsList = ['crypto_icon', 'keyboard_arrow_down'] as const;

export type TexIcon = (typeof iconsList)[number];
