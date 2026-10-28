import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const getContactsData = {
  async getAll() {
    const {data} = await supabase.from('company').select('*').throwOnError();
    return data;
  }
};

export async function ContactsData() {
  try {
    const data = await getContactsData.getAll();
    if (data && data.length > 0) {
      return data[0];
    }
  } catch (error) {
    console.error('Error fetching contacts data:', error);
  }
}