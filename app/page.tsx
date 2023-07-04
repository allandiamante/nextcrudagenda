import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import { getAllTodos } from '@/api'

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className=''>
      <div className="flex items-center justify-center h-screen ">
        <div className='max-w-4xl mx-auto mt-4'>
          <div className="border border-blue-500 rounded p-4 ">
            <h1 className='text-2xl font-bold'> Afazeres App</h1>
            <TodoList tasks={tasks} />
            <div className='text-center my-5 flex flex-col gap-4'>

              <AddTask />
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
