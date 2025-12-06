export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      early_access_submissions: {
        Row: {
          id: string
          created_at: string
          full_name: string
          email: string
          company: string | null
          industry: string
          primary_use_case: string
          estimated_monthly_actions: string | null
          status: 'pending' | 'contacted' | 'converted' | 'rejected'
        }
        Insert: {
          id?: string
          created_at?: string
          full_name: string
          email: string
          company?: string | null
          industry: string
          primary_use_case: string
          estimated_monthly_actions?: string | null
          status?: 'pending' | 'contacted' | 'converted' | 'rejected'
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          email?: string
          company?: string | null
          industry?: string
          primary_use_case?: string
          estimated_monthly_actions?: string | null
          status?: 'pending' | 'contacted' | 'converted' | 'rejected'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
