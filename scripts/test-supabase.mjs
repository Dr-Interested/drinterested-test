// test-supabase.mjs
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !anonKey) {
  console.error("Missing env vars. Check .env.local");
  process.exit(1);
}

const supabase = createClient(url, anonKey);

async function runTests() {
  console.log("🔧 Testing Supabase connection...");
  // 1️⃣ List buckets (should include 'avatar')
  const { data: buckets, error: bucketErr } = await supabase.storage.listBuckets();
  if (bucketErr) {
    console.error("❌ Bucket list error:", bucketErr.message || bucketErr);
  } else {
    console.log("✅ Buckets:", buckets.map(b => b.name));
  }

  // 2️⃣ Insert a dummy member (will be removed later)
  const dummy = {
    name: "Test User",
    role: "Tester",
    department: "Engineering",
    bio: "Automated test entry",
    image: "",
    socials: { github: null, linkedin: null, instagram: null },
    approved: false,
  };
  const { data: insertData, error: insertErr } = await supabase.from("members").insert([dummy]);
  if (insertErr) {
    console.error("❌ Insert error:", insertErr.message || insertErr);
  } else if (insertData && insertData.length > 0) {
    console.log("✅ Inserted dummy member, id:", insertData[0].id);
  } else {
    console.log("⚠️ Insert succeeded but no data returned (likely RLS block or empty response).");
  }

  // 3️⃣ Try a simple upload to the avatar bucket (text file)
  const fileContent = "hello from test";
  const blob = new Blob([fileContent], { type: "text/plain" });
  const fileName = `test-${Date.now()}.txt`;
  const { data: uploadData, error: uploadErr } = await supabase.storage.from("avatar").upload(fileName, blob, { upsert: true });
  if (uploadErr) {
    console.error("❌ Upload error:", uploadErr.message || uploadErr);
  } else {
    console.log("✅ Uploaded test file:", uploadData.path);
    const publicUrl = supabase.storage.from("avatar").getPublicUrl(fileName).data.publicUrl;
    console.log("🖼️ Public URL:", publicUrl);
  }

  console.log("🟢 All tests completed");
}

runTests();
