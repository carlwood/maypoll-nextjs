import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries, error } = await supabase.from("countries").select();

  if (error) {
    console.error("Error retrieving data:", error);
    return;
  }

  return (
    <>
      <h1>Countries</h1>
      <p>Total countries: {countries?.length}</p>

      {countries?.map((country) => (
        <div key={country.id}>
          <h2>{country.name}</h2>
        </div>
      ))}

      <Link href="countries/create">Add a country</Link>
    </>
  );
}
