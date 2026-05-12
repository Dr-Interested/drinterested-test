import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

// We need to import the data directly from the files
import { upcomingEvents, pastEvents } from './data/events'
import { webinars } from './data/webinars'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // using anon key

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function migrateEvents() {
  console.log('Migrating upcoming events...')
  for (const event of upcomingEvents) {
    const { error } = await supabase.from('events').insert([{
      title: event.title,
      date: event.date,
      time: event.time || null,
      location: event.location,
      description: event.description,
      image: event.image,
      status: event.status,
      link: event.link,
      featured: event.featured || false,
      is_past: false
    }])

    if (error) {
      console.error(`Failed to insert event ${event.title}:`, error.message)
    } else {
      console.log(`Successfully migrated upcoming event: ${event.title}`)
    }
  }

  console.log('Migrating past events...')
  for (const event of pastEvents) {
    const { error } = await supabase.from('events').insert([{
      title: event.title,
      date: event.date,
      time: event.time || null,
      location: event.location,
      description: event.description,
      image: event.image,
      status: event.status,
      link: event.link,
      featured: event.featured || false,
      is_past: true
    }])

    if (error) {
      console.error(`Failed to insert event ${event.title}:`, error.message)
    } else {
      console.log(`Successfully migrated past event: ${event.title}`)
    }
  }
}

async function migrateWebinars() {
  console.log('Migrating webinars...')
  for (const webinar of webinars) {
    const { error } = await supabase.from('webinars').insert([{
      title: webinar.title,
      date: webinar.date,
      time: webinar.duration || "TBA",
      speaker: webinar.speaker || "N/A",
      speaker_title: "Speaker",
      description: webinar.description,
      image: webinar.thumbnailPath || "/logo.png",
      video_url: webinar.videoPath || null,
      status: "completed",
      featured: false
    }])

    if (error) {
      console.error(`Failed to insert webinar ${webinar.title}:`, error.message)
    } else {
      console.log(`Successfully migrated webinar: ${webinar.title}`)
    }
  }
}

async function main() {
  await migrateEvents()
  await migrateWebinars()
  console.log('Migration complete!')
}

main()
