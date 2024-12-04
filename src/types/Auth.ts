import type { EnumValues } from './Enum';
import type { JWTPayload } from "jose";

export const ORG_ROLE = {
  ADMIN: 'org:admin',
  MEMBER: 'org:member',
} as const;

export type OrgRole = EnumValues<typeof ORG_ROLE>;

export const ORG_PERMISSION = {
  // Add Organization Permissions here
} as const;

export type OrgPermission = EnumValues<typeof ORG_PERMISSION>;

export interface SessionPayload extends JWTPayload {
  userId: string;
}