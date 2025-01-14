import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  return (
    <>
      <h1>Countries</h1>
      <pre>{JSON.stringify(countries, null, 2)}</pre>

      <Link href="countries/create">Add a country</Link>
    </>
  );
}
