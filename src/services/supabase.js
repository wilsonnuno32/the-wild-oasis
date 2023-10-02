import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zqkbztwcthunbckufvgq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxa2J6dHdjdGh1bmJja3VmdmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNTQxNDQsImV4cCI6MjAxMTgzMDE0NH0.oXF2dxyzROeSFRn_CkNy6UFPD58C2HYKAar1052yGw4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
