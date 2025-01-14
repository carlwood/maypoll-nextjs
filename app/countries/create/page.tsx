export default async function Countries() {
  return (
    <>
      <h1>Add a country</h1>
      <form>
        <div>
          <label htmlFor="name">Country name</label>
        </div>
        <div>
          <input type="text" id="name" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
