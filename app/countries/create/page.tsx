import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";

import { addCountryAction } from "@/app/actions";

export default async function Countries() {
  return (
    <>
      <h1>Add a country</h1>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <Label htmlFor="country">Country name</Label>
        <Input name="country" required autoComplete="false" />
        <SubmitButton formAction={addCountryAction} pendingText="Signing up...">
          Add country
        </SubmitButton>

      </form>
    </>
  );
}
