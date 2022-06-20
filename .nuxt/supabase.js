import Vue from "vue";
import { createVueSupabase } from "vue-supabase";

const supabase = createVueSupabase({
  supabaseUrl: "https://xrsmbvndxjoxjukwumls.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyc21idm5keGpveGp1a3d1bWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUzMzczNjEsImV4cCI6MTk3MDkxMzM2MX0.yq8ZZeuuDFH5uLarQ21jZobY7d-7A4ZP0RvFqIKm3ik",
  supabaseOptions: undefined,
});

Vue.use(supabase);

// Inject Supabase into Nuxt Context
export default (ctx, inject) => {
  // ctx.$supabase = supabase;
  inject("supabase", supabase);
};
