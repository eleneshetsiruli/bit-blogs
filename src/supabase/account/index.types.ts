// export type FillProfileInfoPayload = {
//   username: string;
//   id: string;
//   full_name_ka: string;
//   full_name_en: string;
//   avatar_url: string;
//   last_name_ka: string;
//   last_name_en: string;
//   telephone: string;
// };

export type FillProfileInfoPayload = {
  id: string;
  username?: string | null;
  full_name_ka?: string | null;
  full_name_en?: string | null;
  avatar_url?: string | null;
  telephone?: string | null;
  website?: string | null;
  updated_at?: string | null;
  last_name_ka?: string | null;
  last_name_en?: string | null;
};
