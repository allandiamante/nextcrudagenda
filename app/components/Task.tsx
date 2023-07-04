'use client';
import { ITask } from "@/types/tasks"
import { FormEventHandler, useState } from "react"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import Modal from "./Modal"
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModelEdit, setOpenModalEdit]= useState<boolean>(false);
    const [openModelDeleted, setOpenModalDeleted]= useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: taskToEdit,
        })
        setOpenModalEdit(false);
        router.refresh();
    }

    const handleDelteTask = async (id: string) => {
        await deleteTodo(id);
        setOpenModalDeleted(false);
        router.refresh();
    }
    
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td className="flex gap-5">
                <FiEdit onClick={() => setOpenModalEdit(true)}cursor="pointer" className="text-blue-500" size={25} />                
                <Modal modalOpen={openModelEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className='font-bold text-lg'>Edite a tarefa</h3>
                        <div className='modal-action'>
                            <input value={taskToEdit} onChange={e => setTaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
                            <button type="submit" className='btn btn-info btn-outline '>Editar</button>
                        </div>
                    </form>
                </Modal>
                <FiTrash2 onClick={() => setOpenModalDeleted(true)} cursor="pointer" className="text-red-500" size={25} />
                <Modal modalOpen={openModelDeleted} setModalOpen={setOpenModalDeleted}>
                   <h3 className="font-bold text-lg">Você tem certeza que quer deletar?</h3>
                   <div className=" modal-action">
                        <button onClick={() => handleDelteTask(task.id)} className="btn btn-warning btn-outline ">Deletar</button>

                   </div>
                </Modal>
            </td>
        </tr>)

}


export default Task