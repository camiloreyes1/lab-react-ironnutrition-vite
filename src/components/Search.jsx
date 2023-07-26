import { Divider, Input } from "antd";
import { useState } from "react";

function Search() {
  return (
    <>
      <Divider>Search</Divider>

      <Input name="search" value={undefined} type="text" onChange={() => {}} />
    </>
  );
}

export default Search;
