export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _churchLeaders: {
        Row: {
          A: number
          B: number
        }
        Insert: {
          A: number
          B: number
        }
        Update: {
          A?: number
          B?: number
        }
      }
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      Church: {
        Row: {
          createdAt: string | null
          id: number
          meetingDay: string | null
          meetingTime: string | null
          nickname: string
          observations: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: number
          meetingDay?: string | null
          meetingTime?: string | null
          nickname: string
          observations?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: number
          meetingDay?: string | null
          meetingTime?: string | null
          nickname?: string
          observations?: string | null
        }
      }
      Disciple: {
        Row: {
          birthdate: string | null
          convertionDate: string | null
          createdAt: string | null
          disciplerId: number | null
          email: string | null
          id: number
          isLeader: boolean | null
          isPastor: boolean | null
          name: string
          phone: string | null
          userId: number | null
        }
        Insert: {
          birthdate?: string | null
          convertionDate?: string | null
          createdAt?: string | null
          disciplerId?: number | null
          email?: string | null
          id?: number
          isLeader?: boolean | null
          isPastor?: boolean | null
          name: string
          phone?: string | null
          userId?: number | null
        }
        Update: {
          birthdate?: string | null
          convertionDate?: string | null
          createdAt?: string | null
          disciplerId?: number | null
          email?: string | null
          id?: number
          isLeader?: boolean | null
          isPastor?: boolean | null
          name?: string
          phone?: string | null
          userId?: number | null
        }
      }
      User: {
        Row: {
          createdAt: string | null
          email: string
          id: number
          password: string
        }
        Insert: {
          createdAt?: string | null
          email: string
          id?: number
          password: string
        }
        Update: {
          createdAt?: string | null
          email?: string
          id?: number
          password?: string
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
