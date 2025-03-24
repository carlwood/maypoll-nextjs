import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { getAllCountries } from "../actions";

export default async function Countries() {
  const countries = await getAllCountries();

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
