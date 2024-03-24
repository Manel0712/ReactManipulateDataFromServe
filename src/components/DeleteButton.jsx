import { usePersons } from "../hooks"
export const DeleteButton = ({id}) => {
	const { handleDeletePerson, error } = usePersons();
      const handleDelete = () => {
        handleDeletePerson(id);
      };

    return (
        <button onClick={handleDelete}>delete</button>
    )
}