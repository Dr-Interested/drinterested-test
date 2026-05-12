import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { resolve } from "path";

const envStr = fs.readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
envStr.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=');
  if (key && vals.length) {
    process.env[key.trim()] = vals.join('=').trim().replace(/^"|"$/g, '');
  }
});

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(url, anonKey);

async function check() {
  const { data } = await supabase.from('members').select('name, image').limit(20);
  console.log(data);
}
check();
