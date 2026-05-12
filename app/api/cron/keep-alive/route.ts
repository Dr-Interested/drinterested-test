import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase-client"

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('id')
      .limit(1)

    if (error) throw error

    return NextResponse.json({ 
      success: true, 
      message: "Database pinged successfully", 
      timestamp: new Date().toISOString() 
    })
  } catch (error: any) {
    console.error("Keep-alive error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
