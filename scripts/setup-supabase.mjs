// setup-supabase.mjs
// Runs setup commands directly against the Supabase project using the REST API

import { createClient } from "@supabase/supabase-js";

const url = "https://fvdeyqfrkpjinktzapcs.supabase.co";
const anonKey = "sb_publishable_SWuDJl-z1FbTOHX3RzNF7g_io6IcVNh";

const supabase = createClient(url, anonKey);

async function setup() {
  console.log("🔧 Setting up Supabase...\n");

  // 1️⃣ Create the avatar bucket if it doesn't exist
  console.log("1️⃣  Creating 'avatar' bucket...");
  const { data: bucketData, error: bucketErr } = await supabase.storage.createBucket("avatar", {
    public: true,
    allowedMimeTypes: ["image/*"],
    fileSizeLimit: 2621440, // 2.5 MB
  });
  if (bucketErr) {
    if (bucketErr.message?.includes("already exists") || bucketErr.message?.includes("Duplicate")) {
      console.log("   ⚠️  Bucket already exists — skipping.");
    } else {
      console.error("   ❌ Bucket error:", bucketErr.message);
    }
  } else {
    console.log("   ✅ Bucket 'avatar' created successfully.");
  }

  // 2️⃣ List buckets to confirm
  const { data: buckets } = await supabase.storage.listBuckets();
  console.log("   📦 Buckets available:", buckets?.map(b => b.name) ?? []);

  // 3️⃣ Test an insert into members
  console.log("\n2️⃣  Testing insert into 'members' table...");
  const { data: insertData, error: insertErr } = await supabase.from("members").insert([{
    name: "Setup Test",
    role: "Tester",
    department: "Engineering",
    bio: "Auto-generated test row from setup script.",
    image: "",
    socials: {},
    approved: false,
  }]).select();

  if (insertErr) {
    console.error("   ❌ Insert error:", insertErr.message);
    console.log("   💡 You need to disable RLS in the Supabase Dashboard SQL editor:");
    console.log("      ALTER TABLE public.members DISABLE ROW LEVEL SECURITY;");
  } else {
    console.log("   ✅ Insert successful! Row id:", insertData?.[0]?.id);
    // Clean up the test row
    if (insertData?.[0]?.id) {
      await supabase.from("members").delete().eq("id", insertData[0].id);
      console.log("   🧹 Test row cleaned up.");
    }
  }

  // 4️⃣ Test upload to avatar bucket
  console.log("\n3️⃣  Testing file upload to 'avatar' bucket...");
  const testBlob = new Blob(["test content"], { type: "text/plain" });
  const testFile = `setup-test-${Date.now()}.txt`;
  const { data: uploadData, error: uploadErr } = await supabase.storage
    .from("avatar")
    .upload(testFile, testBlob, { upsert: true });

  if (uploadErr) {
    console.error("   ❌ Upload error:", uploadErr.message);
  } else {
    const { data: { publicUrl } } = supabase.storage.from("avatar").getPublicUrl(testFile);
    console.log("   ✅ Upload successful!");
    console.log("   🖼️  Public URL:", publicUrl);
    // Clean up
    await supabase.storage.from("avatar").remove([testFile]);
    console.log("   🧹 Test file cleaned up.");
  }

  console.log("\n✅ Setup complete!");
}

setup();
