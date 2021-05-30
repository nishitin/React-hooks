import React, { useState } from "react";

function FormHook() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <p>FirstName :{name.firstName}</p>
        <p>LastName :{name.lastName}</p>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <div>{JSON.stringify(name)}</div>
      </form>
    </div>
  );
}

export default FormHook;
