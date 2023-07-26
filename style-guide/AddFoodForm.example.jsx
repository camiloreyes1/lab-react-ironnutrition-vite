// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input, Button } from "antd";

function AddFoodForm() {
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input name="image" value={undefined} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input calories="number" value={undefined} type="text" onChange={() => {}} />

      <label>Servings</label>
      <Input servings="number" value={undefined} type="text" onChange={() => {}} />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
