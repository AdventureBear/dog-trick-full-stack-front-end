
import NewTrickForm from "../../../components/NewTrickForm";
import {createTrick, getOneTrick} from '../../../lib/actions'


async function EditTrickPage({params}:{params: {id: string}}) {
    const trick = await getOneTrick(params.id)
    console.log(trick)

    if (!trick) {
        return ("Trick not found")
    }

    return (
        <div className="content">
            <NewTrickForm trick={trick} />
        </div>
    );
}

export default EditTrickPage;