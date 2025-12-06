import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { fullName, email, industry, primaryUseCase } = body

    if (!fullName || !email || !industry || !primaryUseCase) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('early_access_submissions')
      .insert({
        full_name: fullName,
        email: email,
        company: body.company || null,
        industry: industry,
        primary_use_case: primaryUseCase,
        estimated_monthly_actions: body.estimatedMonthlyActions || null,
        status: 'pending',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)

      // Handle duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email has already been submitted' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to submit request' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Early access request submitted successfully',
        id: data.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to check if email already exists
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.json(
      { error: 'Email parameter required' },
      { status: 400 }
    )
  }

  const { data, error } = await supabase
    .from('early_access_submissions')
    .select('id')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') {
    return NextResponse.json(
      { error: 'Failed to check email' },
      { status: 500 }
    )
  }

  return NextResponse.json({ exists: !!data })
}
