import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pxldubjjkfkelnyhjmxo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bGR1Ympqa2ZrZWxueWhqbXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5Mjc1NDEsImV4cCI6MjAyNjUwMzU0MX0.oUNL7BSxcgFmxFm4gyhqwzRQ35-evaaLmlN6NZIToNs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
