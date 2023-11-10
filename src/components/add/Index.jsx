import React  , {useState }from 'react'
import {Card, CardBody} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
const Add = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState('');
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    let numericCount = parseInt(count);
    const addTask = () => {
        console.log(currentTask)

        if(!isNaN(numericCount)){
            
            setTasks([...tasks, { task: currentTask, count }]);
            setCurrentTask('');
            setCount(0);            
        }else {
            setErrorMessage('هناك خطأ اثناء اضافة الذكر ، عدل على بعض المعلومات التي ادخلتها');
            setTimeout(() => {
                setErrorMessage("");
            }, 10000);
        }
    };
  
    const deleteTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };
  
    const decreaseCount = (index) => {
      const newTasks = [...tasks];
      if (newTasks[index].count > 0) {
        newTasks[index].count -= 1;
        setTasks(newTasks);
      } else {
        deleteTask(index);
      }
    };
  
  return (
    <div>
        <p className='font-bold text-red-500 flex justify-center items-center flex-col text-2xl'>{errorMessage}</p>
      <div className='flex justify-center items-center flex-col gap-4'>
      <Input type="text" label="الذكر" onChange={(e) => setCurrentTask(e.target.value)} />
      <Input type="text" label="التكرار" onChange={(e) => setCount(e.target.value)} />
        <Button color="success" onClick={addTask}>
        اضافة
      </Button>  
      </div>
      <ul className='p-1'>
        <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Card>
            <CardBody>
                <p>{task.task}.</p>
            </CardBody>
            <CardBody>
                <p>عدد التكرار : {task.count}</p>
            </CardBody>
            </Card>
            <Button color="warning"  onClick={() => decreaseCount(index)}>
                {task.count}
            </Button>  
            <Button color="danger" onClick={() => deleteTask(index)}>
                حذف
            </Button>
          </li>
        ))}
      </ul>
      </ul>
    </div>
    )
}

export default Add;
/**
 * 
 *           <li key={index}>
            {task.task} - {task.count}
            <button onClick={() => decreaseCount(index)}>تقليل</button>
            <button onClick={() => deleteTask(index)}>حذف</button>
          </li>
 * */ 