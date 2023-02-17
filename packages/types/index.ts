export * from './integrations/threads';
export * from './integrations/channels';
export * from './integrations/messages';
export * from './integrations/users';

export * from './api/channels';

/*
  This package redefines enums from `schema.prisma`.
  Ideally this package should be considered as a source of truth
  and not have on other dependencies.
*/

export enum AccountType {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export enum AccountIntegration {
  NONE = 'NONE',
  SLACK = 'SLACK',
  DISCORD = 'DISCORD',
}

export enum ChatType {
  NONE = 'NONE',
  MANAGERS = 'MANAGERS',
  MEMBERS = 'MEMBERS',
}

export enum CommunityType {
  'discord' = 'discord',
  'slack' = 'slack',
  'linen' = 'linen',
}

export enum MessageFormat {
  DISCORD = 'DISCORD',
  SLACK = 'SLACK',
  LINEN = 'LINEN',
}

export enum Roles {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

export enum ThreadState {
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
}

export enum ThreadStatus {
  UNREAD = 'unread',
  READ = 'read',
  MUTED = 'muted',
  REMINDER = 'reminder',
}

export enum ReminderTypes {
  SOON = 'soon',
  TOMORROW = 'tomorrow',
  NEXT_WEEK = 'next-week',
}

export enum Priority {
  MOUSE,
  KEYBOARD,
}

export interface SerializedUserThreadStatus {
  threadId: string;
  userId: string;
  muted: boolean;
  read: boolean;
}

export interface SerializedAccount {
  id: string;
  type: AccountType;
  name?: string;
  description?: string;
  homeUrl?: string;
  docsUrl?: string;
  logoUrl?: string;
  logoSquareUrl?: string;
  redirectDomain?: string;
  brandColor?: string;
  premium: boolean;
  googleAnalyticsId?: string;
  syncStatus: string;
  communityType: CommunityType | null;
  anonymizeUsers?: boolean;
  hasAuth?: boolean;
  slackDomain?: string;
  discordDomain?: string;
  discordServerId?: string;
  communityInviteUrl?: string;
  chat: ChatType | null;
}

export interface SerializedAttachment {
  url: string;
  name: string;
}

export type SerializedChannel = {
  id: string;
  channelName: string;
  default: boolean;
  hidden: boolean;
  accountId: string | null;
  pages: number | null;
  stats?: string;
};

export interface SerializedUser {
  id: string;
  authsId: string | null;
  username: string | null;
  displayName: string | null;
  externalUserId: string | null;
  profileImageUrl: string | null;
}

export interface SerializedMessage {
  id: string;
  body: string;
  sentAt: string;
  usersId: string;
  mentions: SerializedUser[];
  attachments: SerializedAttachment[];
  reactions: SerializedReaction[];
  threadId: string;
  externalId?: string;
  author?: SerializedUser | null;
  messageFormat: MessageFormat;
}

export interface SerializedReaction {
  type: string;
  count: number;
  users: SerializedUser[];
}

export interface SerializedThread {
  id: string;
  incrementId: number;
  externalThreadId?: string | null;
  viewCount: number;
  slug: string | null;
  messageCount: number;
  hidden: boolean;
  title?: string | null;
  state: ThreadState;
  pinned: boolean;
  channelId: string;
  closeAt?: string;
  firstUserReplyAt?: string | null;
  firstManagerReplyAt?: string | null;
  sentAt: string;
  lastReplyAt: string;
  messages: SerializedMessage[];
  channel: SerializedChannel | null;
  resolutionId?: string | null;
}

export interface SerializedReadStatus {
  channelId: string;
  lastReadAt: string;
  lastReplyAt?: string;
  read: boolean;
}

export type Settings = {
  communityId: string;
  communityType: CommunityType;
  googleAnalyticsId?: string | undefined;
  googleSiteVerification?: string | undefined;
  name: string | null;
  brandColor: string;
  homeUrl: string;
  docsUrl: string;
  logoUrl: string;
  communityUrl: string;
  communityInviteUrl: string;
  communityName: string;
  redirectDomain?: string;
  prefix?: 'd' | 's';
  chat: ChatType | null;
};

export interface Permissions {
  access: boolean;
  inbox: boolean;
  chat: boolean;
  manage: boolean;
  channel_create: boolean;
  is_member: boolean;
  accountId: string | null;
  token: string | null;
  user: any | null;
  auth: {
    id: string;
    email: string;
  } | null;
}

export enum Scope {
  All = 'all',
  Participant = 'participant',
}

export interface UploadedFile {
  id: string;
  url: string;
}

export enum channelsIntegrationType {
  'GITHUB' = 'GITHUB',
  'EMAIL' = 'EMAIL',
  'LINEAR' = 'LINEAR',
}

export type ChannelsIntegration = {
  externalId: string;
  data: any;
};

export type onResolve = (threadId: string, messageId?: string) => void;
